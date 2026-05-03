"use client";

import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      
      {/* Background Grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-10">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          className="object-cover opacity-50"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take{" "}
          <span className="text-purple">your</span> digital presence to the next level?
        </h1>

        <p className="text-white-200 md:mt-10 my-5">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>

        <a href="/contact">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Bottom Section */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center px-4">
        
        <p className="md:text-base text-sm text-gray-400">
         Copyright © 2026 Mohd Saif Ali
        </p>

        {/* Social Icons */}
        <div className="flex items-center md:gap-4 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              title={info.name || "social"}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition duration-300"
            >
              <Image
                src={info.img}
                alt={info.name || "social"}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;