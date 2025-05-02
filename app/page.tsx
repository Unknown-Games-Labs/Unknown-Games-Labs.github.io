'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee } from "lucide-react"
import AOS from 'aos';
import { useEffect } from "react";
import { Rajdhani } from "next/font/google"

import 'aos/dist/aos.css'

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
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero Section with Logo and Slogan */}
      <section className="flex relative flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
        <img className="absolute w-full h-full" src="/images/banner-bg.png" />
        <div className="absolute w-full h-[15vh] bottom-0" style={{background: 'linear-gradient(0deg, rgba(143, 36, 193, 1) 0%, rgba(143, 36, 193, 0) 100%)'}} />
        <div className="container max-w-5xl mx-auto">
          <div className="mb-8" data-aos="fade-up" data-aos-duration="2000">
            <Image
              src="/images/banner-fg.png"
              alt="Unknown Games Labs Logo"
              width={1200}
              height={800}
              className="mx-auto"
            />
          </div>
          <p className={"text-3xl md:text-5xl mb-8 max-w-2xl mx-auto font-bold " + rajdhani.className} data-aos="fade-up" data-aos-duration="3000" style={{color: 'rgb(173, 229, 255)'}}>
            Your games are our passion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white">Explore Our Products</Button>
            <Button variant="outline" className="border-[#ff6b6b] text-[#ff6b6b] hover:bg-[#ff6b6b] hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Product Section - Music Player Asset */}
      <section className="py-20 px-4 bg-[#8f24c1]">
        <div className="container max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#ff6b6b]">
            Music Player Asset for Unity
          </h2>
          <p className="text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto text-gray-300">
            A powerful, customizable music player for your Unity games. Easy to integrate, feature-rich, and designed
            for developers.
          </p>

          {/* Product Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#2a2a2a] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#ff6b6b]">Easy Integration</h3>
              <p className="text-gray-300">Simple drag-and-drop implementation with minimal coding required.</p>
            </div>
            <div className="bg-[#2a2a2a] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#ff6b6b]">Customizable UI</h3>
              <p className="text-gray-300">Fully customizable interface to match your game's aesthetic.</p>
            </div>
            <div className="bg-[#2a2a2a] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#ff6b6b]">Advanced Controls</h3>
              <p className="text-gray-300">Playlist management, shuffle, repeat, and volume controls included.</p>
            </div>
          </div>

          {/* Product Screenshots */}
          <h3 className="text-2xl font-bold mb-6 text-center text-[#ff6b6b]">Screenshots</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12" data-aos="fade-up">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Music Player Screenshot 1"
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Music Player Screenshot 2"
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Music Player Screenshot 3"
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Music Player Screenshot 4"
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white px-8 py-6 text-lg">
              Get it on Unity Asset Store
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#151515]">
        <div className="container max-w-6xl mx-auto" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#ff6b6b]">Unknown Games Labs</h3>
              <p className="text-gray-400 mb-4">Creating innovative tools and assets for game developers.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-[#ff6b6b]">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#ff6b6b]">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#ff6b6b]">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#ff6b6b]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#ff6b6b]">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#ff6b6b]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#ff6b6b]">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#ff6b6b]">
                    Unity Asset Store
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#ff6b6b]">Support Us</h3>
              <p className="text-gray-400 mb-4">If you like our work, consider buying us a coffee!</p>
              <Link
                href="#"
                className="inline-flex items-center px-4 py-2 bg-[#ff6b6b] hover:bg-[#ff5252] text-white rounded-md"
              >
                <Coffee className="mr-2 h-5 w-5" />
                Buy us a coffee
              </Link>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Unknown Games Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
