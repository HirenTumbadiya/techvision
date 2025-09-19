"use client";

import Image from "next/image";

const logos = [
  { src: "/images/honda.png", alt: "Honda" },
  { src: "/images/coca-cola.png", alt: "Coca Cola" },
  { src: "/images/conagra.png", alt: "Conagra" },
  { src: "/images/toyota.png", alt: "Toyota" },
];

export default function Marquee() {
  return (
    <div className="bg-[#063d39] py-6 overflow-hidden relative">
      <div className="flex w-max">
        {/* Track duplicated for infinite loop */}
        <div className="marquee-track">
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={50}
            />
          ))}
          {logos.map((logo, i) => (
            <Image
              key={`dup-${i}`}
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={50}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
