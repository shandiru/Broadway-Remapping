"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ReviewsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  return (
    <section className="relative py-24 bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: "url('pexels-photo-1397751-2880w.webp')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h3 className="text-white text-2xl tracking-[4px] uppercase font-bold">
            Customer Feedback
          </h3>

          {/* Red highlight bar */}
          <div className="w-20 h-[3px] bg-[#D70C09] mx-auto mt-4"></div>

          <p className="text-[#C0C0C0] mt-5 text-lg max-w-xl mx-auto">
            Here’s what our clients have to say about our service.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ReviewCard
            text={`I recently had my Seat Leon remapped — very impressed with the smooth 
acceleration and improved response. Quality service.`}
            name="Toby Fletcher"
            dataAos="fade-up"
            delay={0}
          />

          <ReviewCard
            text={`Did my Scirocco — massive difference. Friendly, clear explanations. 
Definitely recommend.`}
            name="Jay Sharif"
            dataAos="fade-down"
            delay={100}
          />

          <ReviewCard
            text={`Audi 2.0 TDI remap — great performance boost. Professional and helpful 
throughout the process.`}
            name="Ben Shackleton"
            dataAos="fade-up"
            delay={200}
          />

          <ReviewCard
            text={`Enquired yesterday, came out next day. Great service, fair pricing, very 
friendly. Highly recommend!`}
            name="Mike Fletcher"
            dataAos="fade-down"
            delay={300}
          />

          <ReviewCard
            text={`BMW 740D issue sorted same day. Fast, reliable, professional. Highly 
recommend Fehu!`}
            name="Stuart Pardy"
            dataAos="fade-up"
            delay={400}
          />

          <ReviewCard
            text={`Stage 1 install — professional, friendly, and extremely helpful. Would 
use again 100%.`}
            name="Gary O’Neill"
            dataAos="fade-down"
            delay={500}
          />
        </div>
      </div>
    </section>
  );
}

/* Updated Review Card Component */
function ReviewCard({ text, name, dataAos, delay }) {
  return (
    <div
      data-aos={dataAos}
      data-aos-delay={delay}
      className="
        bg-black/70 
        text-[#C0C0C0]
        p-6 
        border border-white/10 
        shadow-md 
        backdrop-blur-sm
        min-h-[200px]
        flex flex-col justify-between
        rounded-sm
      "
    >
      {/* Review Text */}
      <p className="text-base leading-relaxed mb-4 whitespace-pre-line">
        {text}
      </p>

      {/* Reviewer Name */}
      <h4 className="text-white text-sm tracking-wide font-semibold uppercase">
        — {name}
      </h4>
    </div>
  );
}
