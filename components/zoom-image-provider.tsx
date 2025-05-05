"use client"

import Image from "next/image";
import { createContext, useCallback, useState, type ReactNode } from "react";

import styles from './zoom-image.module.css';

interface ZoomImageContextType {
  showImage: (src: string) => void
  hideImage: () => void
}

export const ZoomImageContext = createContext<ZoomImageContextType | undefined>(undefined)

export function ZoomImageProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)
  const [imageSrc, setImageSrc] = useState('');

  const showImage = useCallback((src: string) => {
    document.body.classList.remove('overflow-auto')
    document.body.classList.add('overflow-hidden')
    setImageSrc(src);
    setIsVisible(true);
  }, [])

  const hideImage = useCallback(() => {
    document.body.classList.remove('overflow-hidden')
    document.body.classList.add('overflow-auto')
    setIsVisible(false);
  }, [])

  return (
    <ZoomImageContext.Provider value={{ showImage, hideImage }}>
      <div className={`fixed inset-0 z-40 flex items-center justify-center p-4 transition ${isVisible ? 'backdrop-blur-sm' : 'pointer-events-none'}`} />
      {children}
      <div className={`${styles.backdrop} ${isVisible ? styles.active : ''}`} onClick={hideImage}>
        {imageSrc && (
          <div className={styles.fullscreen_image}>
            <Image src={imageSrc} alt="Fullscreen Image" className="rounded-xlg w-full border border-gray-500/50 shadow-gray-950/50 shadow-lg cursor-pointer" width={300} height={200} />
          </div>
        )}
      </div>
    </ZoomImageContext.Provider>
  )
}
