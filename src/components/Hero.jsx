"use client";

import React, { useEffect } from "react";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-left" data-aos="fade-right">

            {/* HEADLINE */}
            <div className="space-y-4">
              <h1
                className="
                  text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl
                  font-black leading-tight text-white
                "
              >
                SAMPLE TITLE
                <br />
                <span className="text-red-500">LOREM IPSUM</span>
              </h1>

              <p className="text-xl text-gray-300">
                Lorem ipsum dolor sit amet.
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-lg leading-relaxed text-gray-300 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vitae sapien quis justo dapibus semper. Nulla facilisi. Sed
              ullamcorper, purus vitae accumsan dictum, dui velit commodo est,
              sit amet gravida ipsum orci sed neque.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up">

              {/* RED MAIN BUTTON */}
              <a
                href="#"
                className="
                  inline-flex items-center justify-center gap-2 text-sm
                  bg-red-600 text-white shadow h-10 rounded-md px-6 font-semibold
                  transition-all duration-300 hover:bg-red-700
                "
              >
                <FaPhone className="h-4 w-4" />
                Call Now
              </a>

              {/* SILVER/GREY BUTTON */}
              <a
                href="#services"
                className="
                  inline-flex items-center justify-center gap-2 text-sm
                  border border-gray-500 text-gray-200
                  h-10 rounded-md px-6 font-semibold
                  transition-all duration-300 hover:bg-gray-800
                "
              >
                View Services
              </a>
            </div>

            {/* INFO BLOCKS */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 items-start"
              data-aos="zoom-in"
            >
              {/* Location */}
              <div
                className="
                  flex items-start gap-3 p-2 rounded transition
                  hover:bg-red-900/20 hover:shadow-[0_4px_15px_rgba(220,38,38,0.25)]
                "
              >
                <FaMapMarkerAlt className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>

              {/* Established */}
              <div
                className="
                  flex items-start gap-3 p-2 rounded transition
                  hover:bg-red-900/20
                "
              >
                <FaClock className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Established</p>
                  <p className="text-sm text-gray-400">Since Lorem Ipsum</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="relative w-full" data-aos="fade-left">
            <div
              className="
                aspect-video sm:aspect-[4/3] w-full relative rounded-lg overflow-hidden shadow-2xl
                transition-all duration-300 hover:shadow-[0_12px_30px_rgba(220,38,38,0.4)]
              "
            >
              <video
                src="/stoneleysvideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="object-cover absolute inset-0 h-full w-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
