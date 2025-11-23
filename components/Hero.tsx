"use client";

import RotatingHeadline from "./RoatatingHeadline";
import Statistics from "./Statistics";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-400 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-20 w-80 h-80 bg-purple-400 opacity-25 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-pink-400 opacity-20 rounded-full blur-2xl"></div>
      </div>
      <div className="relative flex flex-row w-full h-full justify-center align-center">
        {/* LEFT SIDE TEXT */}
        <div className="basis-2/3 px-15 py-10">
          <h1 className="text-6xl font-extrabold uppercase leading-tight text-neutral-900 select-none">
            A smarter way to learn with
            <RotatingHeadline />
          </h1>

          <p className="text-[1.15rem] font-extralight text-neutral-500 italic leading-relaxed max-w-4/5 pt-5 select-none">
            Unlock global learning opportunities with a platform designed to
            break limits and connect learners everywhere.
          </p>
        </div>
        {/* RIGHT SIDE IMAGE */}
        <div className="basis-1/3 flex justify-center items-center">
          <Image
            src="/global_Learning.png"
            alt="logo"
            width={450}
            height={450}
          />
        </div>
      </div>
      <Statistics />
    </div>
  );
}
