import Image from "next/image";
import Link from "next/link";
import Marquee from "../marquee";

export default function LandingPage() {
  return (
    <section className="relative md:flex md:flex-col md:justify-center md:gap-10 bg-[#063c3b] h-auto md:h-screen">
      <div className="block md:hidden w-full h-64 relative">
        <Image
          src="/gif/safety-ai.gif"
          alt="hero-mobile"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="hidden md:block absolute top-0 left-[23%] w-[77%] h-full">
        <Image
          src="/gif/safety-ai.gif"
          alt="hero-background"
          fill
          priority
          className="object-contain"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#063c3b] via-[#063c3b]/90 to-transparent"></div>
      </div>
      <div className="relative px-6 md:px-20 lg:px-40 max-w-5xl py-10 md:py-0">
        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight text-white text-center md:text-left">
          Active Workers <br /> Compensation Insurance
          <span className="text-orange-500">.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 text-center md:text-left">
          AI Built for Safety with a Partner That Cares
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="#"
            className="bg-green-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-green-400 transition"
          >
            Get Appointed
          </Link>
          <Link
            href="#"
            className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition"
          >
            Get a Free Risk Assessment
          </Link>
        </div>
      </div>

      <div className="mt-auto">
        <Marquee />
      </div>
    </section>
  );
}
