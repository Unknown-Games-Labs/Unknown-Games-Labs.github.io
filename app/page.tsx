'use client'

import AOS from 'aos'
import { Rajdhani } from "next/font/google"
import { useEffect } from "react"

import 'aos/dist/aos.css'
import { Footer } from "./sections/footer"
import { Header } from "./sections/header"
import { ProductMusicPlayer } from "./sections/product-music_player"

const rajdhani = Rajdhani({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})


export default function LandingPage() {
  useEffect(() => {

    setTimeout(() => {
      AOS.init(
        //offset: 200,
        //duration: 600,
        //easing: 'ease-in-sine',
        //delay: 100,
      );
    }, 1);
  }, [])

  return (
    <div className={"flex flex-col min-h-screen bg-[#1a1a1a] text-white " + rajdhani.className}>
      <Header />

      <ProductMusicPlayer />
      
      <Footer />
    </div>
  )
}
