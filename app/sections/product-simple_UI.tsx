import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ProductSimpleUI() {
  return (
        <section className="py-20 px-4 bg-[#8f24c1]" id="products">
          <div className="container max-w-6xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#ade5ff]">
              Music Player Asset for Unity
            </h2>
            <p className="text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto text-gray-300">
              A powerful, customizable music player for your Unity games. Easy to integrate, feature-rich, and designed
              for developers.
            </p>
  
            {/* Product Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-[#ade5ff]">
              <div className="bg-[#710ca0] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Easy Integration</h3>
                <p>Simple drag-and-drop implementation with minimal coding required.</p>
              </div>
              <div className="bg-[#710ca0] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Customizable UI</h3>
                <p>Fully customizable interface to match your game's aesthetic.</p>
              </div>
              <div className="bg-[#710ca0] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Advanced Controls</h3>
                <p>Playlist management, shuffle, repeat, and volume controls included.</p>
              </div>
            </div>
  
            {/* Product Screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12" data-aos="fade-up">
              <Image
                src="/images/music-player/01.png"
                alt="Music Player Screenshot 1"
                width={300}
                height={200}
                className="rounded-lg w-full h-auto"
              />
              <Image
                src="/images/music-player/02.png"
                alt="Music Player Screenshot 2"
                width={300}
                height={200}
                className="rounded-lg w-full h-auto"
              />
              <Image
                src="/images/music-player/03.png"
                alt="Music Player Screenshot 3"
                width={300}
                height={200}
                className="rounded-lg w-full h-auto"
              />
              <Image
                src="/images/music-player/04.png"
                alt="Music Player Screenshot 4"
                width={300}
                height={200}
                className="rounded-lg w-full h-auto"
              />
            </div>
  
            {/* Call to Action */}
            <div className="text-center">
              <Button className="bg-[#ade5ff] hover:bg-[#c6e9fa] px-8 py-6 text-lg">
                Comming soon
                {/* Get it on Unity Asset Store */}
              </Button>
            </div>
          </div>
        </section>
  )
}
