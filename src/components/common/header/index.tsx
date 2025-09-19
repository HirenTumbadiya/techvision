"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 px-6 md:px-40 flex justify-between items-center bg-[#063d39] sticky top-0 z-50">
      <Image
        src={
          "https://www.compscience.com/wp-content/uploads/2022/09/cs-logo-white-big.svg"
        }
        width={180}
        height={60}
        alt="Company Logo"
      />

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-8">
        <Link href="#">
          <span className="hover:text-green-400 font-extrabold text-white">
            Products
          </span>
        </Link>
        <Link href="#">
          <span className="hover:text-green-400 font-extrabold text-white">
            Solutions
          </span>
        </Link>
        <Link href="#">
          <span className="hover:text-green-400 font-extrabold text-white">
            Company
          </span>
        </Link>
      </nav>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <Link
          href="#"
          className="border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          <span>Login</span>
        </Link>
        <Link
          href="#"
          className="bg-green-400 border-2 bo text-black px-5 py-2 rounded-full font-semibold hover:bg-transparent border-green-400 hover:text-white transition"
        >
          Get Appointed
        </Link>
      </div>
    </header>
  );
}
