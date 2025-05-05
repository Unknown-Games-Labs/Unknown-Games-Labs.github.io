import { useZoomImage } from "@/hooks/use-zoom-image";
import Image from "next/image";

interface ZoomImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export const ZoomImage = ({ ...imageProps }: ZoomImageProps) => {
  const { showImage } = useZoomImage();

  const setFlag = () => {
    showImage(imageProps.src)
  }
  
  return (
    <>
      <Image {...imageProps} onClick={setFlag} />
    </>
  )
}
