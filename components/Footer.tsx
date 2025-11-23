"use client";

import Link from "next/link";
import { LiaInstagram } from "react-icons/lia";
import { LiaFacebookF } from "react-icons/lia";
import { LiaLinkedinIn } from "react-icons/lia";
import { LiaGithub } from "react-icons/lia";
import { LiaEnvelopeSolid } from "react-icons/lia";
import { LiaMapMarkerSolid } from "react-icons/lia";

export default function Footer() {
  return (
    <footer>
      <div className="relative bottom-0 w-full h-[70vh] bg-black flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute top-0 border w-full h-20 flex justify-center items-center pt-5">
          <span className="h-px w-100 bg-gradient-to-l from-[#ffffff] via-[#7b7b7b] to-transparent" />
          <span className="text-white px-10 opacity-50">
            © 2025 Falah Path LMS — All rights reserved.
          </span>
          <span className="h-px w-100 bg-gradient-to-l from-transparent via-[#7b7b7b] to-[#ffffff]" />
        </div>
        <div className="flex w-1/2 justify-center items-center absolute top-20 gap-5">
          <Link href="/">
            <LiaFacebookF
              size={50}
              className="text-[#ffffff] hover:text-[#b966e7] cursor-pointer"
            />
          </Link>
          <LiaInstagram
            size={50}
            className="text-[#ffffff] hover:text-[#b966e7] cursor-pointer"
          />
          <LiaLinkedinIn
            size={50}
            className="text-[#ffffff] hover:text-[#b966e7]  cursor-pointer"
          />
          <LiaGithub
            size={50}
            className="text-[#ffffff] hover:text-[#b966e7] cursor-pointer"
          />
        </div>
        <div className="absolute top-35 w-full flex items-center justify-between px-20">
          <div className="flex items-center text-white opacity-80">
            <LiaEnvelopeSolid size={25} />
            <span className="text-lg">falahpath@gmail.com</span>
          </div>
          <div className="flex items-center text-white opacity-80">
            <LiaMapMarkerSolid size={28} />
            <span className="text-lg">Tirana, Albania</span>
          </div>
        </div>
        <span className="text-[30rem] font-extrabold text-white opacity-10 select-none whitespace-nowrap leading-none translate-y-[28%]">
          FALAH
        </span>
      </div>
    </footer>
  );
}
