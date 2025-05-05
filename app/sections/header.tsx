import Image from "next/image";

export function Header() {
  return (
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
        <p className="text-3xl md:text-5xl mb-8 max-w-2xl mx-auto font-bold text-[#ade5ff]" data-aos="fade-up" data-aos-duration="3000">
          Your games are our passion.
        </p>
      </div>
    </section>
  )
}
