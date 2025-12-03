"use client";

import React, { useState, useEffect } from "react";
import { Settings, Wrench, Key } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ExtraServicesOffered() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-quart",
    });

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const services = [
    {
      title: "Diagnostic",
      desc: "Advanced diagnostic services to identify and resolve vehicle issues with precision",
      icon: (
        <Settings className="h-8 w-8 text-[#EF4444] drop-shadow-[0_0_6px_#EF4444]" />
      ),
    },
    {
      title: "Servicing & Repairs",
      desc: "Comprehensive servicing and repair solutions to keep your vehicle running smoothly",
      icon: (
        <Wrench className="h-8 w-8 text-[#EF4444] drop-shadow-[0_0_6px_#EF4444]" />
      ),
    },
    {
      title: "Key Cutting",
      desc: "Professional key cutting and programming services for all vehicle makes and models",
      icon: (
        <Key className="h-8 w-8 text-[#EF4444] drop-shadow-[0_0_6px_#EF4444]" />
      ),
    },
  ];

  const handleClick = (index) => {
    if (isMobile) setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2
          className="text-center font-bold text-4xl text-[#C0C0C0] mb-12"
          data-aos="fade-up"
        >
          Extra Services Offered
        </h2>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className={`relative overflow-hidden rounded-lg border p-8 
                  bg-[#111111] transition-all duration-300 cursor-pointer
                  ${
                    isMobile
                      ? isActive
                        ? "border-[#EF4444]/70 shadow-[0_0_18px_#EF4444]/60"
                        : "border-[#3F3F46]"
                      : "border-[#3F3F46] hover:border-[#EF4444]/60 hover:shadow-[0_0_18px_#EF4444]/40"
                  }`}
              >
                {/* Red Glow Gradient */}
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br from-[#3F3F46] to-[#EF4444]/20 
                    transition-opacity duration-300
                    ${
                      isMobile
                        ? isActive
                          ? "opacity-100"
                          : "opacity-0"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                ></div>

                {/* Icon */}
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full 
                    transition-colors duration-300
                    ${
                      isMobile
                        ? isActive
                          ? "bg-[#EF4444]/20"
                          : "bg-[#1F2933]"
                        : "bg-[#1F2933] group-hover:bg-[#EF4444]/20"
                    }`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className={`mb-3 font-semibold text-2xl transition-colors duration-300
                    ${
                      isMobile
                        ? isActive
                          ? "text-[#EF4444]"
                          : "text-[#E5E7EB]"
                        : "text-[#E5E7EB] group-hover:text-[#EF4444]"
                    }`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#9CA3AF] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
