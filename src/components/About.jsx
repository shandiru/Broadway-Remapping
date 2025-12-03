"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutFehuTuning() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#000000] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE — TEXT */}
        <div data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide mb-4 uppercase">
            ABOUT FEHU TUNING
          </h2>

          {/* RED HIGHLIGHT LINE */}
          <div
            className="w-20 h-[3px] bg-[#D70C09] mb-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          ></div>

          {/* LOREM CONTENT */}
          <p
            className="text-[#C0C0C0] leading-relaxed mb-6"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            fermentum tortor vel justo aliquam, ut interdum ipsum facilisis.
            Etiam convallis, ante sed luctus dignissim, nulla arcu feugiat dui,
            vitae vulputate velit enim sed massa.
          </p>

          <p
            className="text-[#868386] leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            Sed ultricies sapien id nunc feugiat, sed sodales risus tempus.
            Phasellus rutrum quam id urna pulvinar, vel auctor elit consectetur.
            Vivamus pharetra, justo ac placerat interdum, mauris nisi tincidunt
            orci, quis porttitor sem felis non augue.
          </p>

          <button
            className="bg-[#D70C09] hover:bg-[#868386] text-white font-medium py-3 px-8 rounded-sm transition"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Contact Us
          </button>
        </div>

        {/* RIGHT SIDE — IMAGES */}
        <div className="flex flex-row gap-4 w-full">

          {/* Image 1 */}
          <div
            className="w-1/2 h-[420px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="/pexels-photo-1397751-2880w.webp"
              alt="Engine tuning"
              className="w-full h-full object-cover rounded-sm"
              loading="lazy"
            />
          </div>

          {/* SILVER DIVIDER */}
          <div
            className="w-[2px] bg-[#C0C0C0]/40"
            data-aos="fade-in"
            data-aos-delay="350"
          ></div>

          {/* Image 2 */}
          <div
            className="w-1/2 h-[420px]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="/pexels-photo-17045319-2880w.webp"
              alt="BMW tuning"
              className="w-full h-full object-cover rounded-sm"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
