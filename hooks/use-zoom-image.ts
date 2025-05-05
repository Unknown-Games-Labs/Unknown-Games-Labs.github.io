"use client"

import { useContext } from "react"
import { ZoomImageContext } from "../components/zoom-image-provider"

export function useZoomImage() {
  const context = useContext(ZoomImageContext)

  if (context === undefined) {
    throw new Error("useZoomImage must be used within a ZoomImageProvider")
  }

  return context
}
