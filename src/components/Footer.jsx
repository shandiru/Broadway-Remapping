"use client";
import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const mapsUrl = "https://maps.app.goo.gl/PQoeNHRGmgSawQz89";

  return (
    <footer className="bg-[#000000] border-t border-[#1C1C1C] py-12 text-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold brand-gradient">
              AF-MOK <span className="text-[#C0C0C0]">PERFORMANCE</span>
            </h2>

            <p className="text-[#C0C0C0] mb-4 mt-3 text-sm leading-relaxed">
              High-quality performance tuning and emissions solutions for cars
              and LCVs — unlocking power, efficiency, and reliability.
            </p>

            <div className="flex space-x-4 mt-4">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/16eb5kcuGU/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  className="text-[#868386] hover:text-[#D70C09] transition-colors"
                  size={20}
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/afmokperformance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  className="text-[#868386] hover:text-[#D70C09] transition-colors"
                  size={20}
                />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@afmok.performance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 256 256"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="text-[#868386] hover:text-[#D70C09] transition-colors"
                >
                  <path d="M240 80a64 64 0 0 1-64-64h-32v168a40 40 0 1 1-40-40 39.6 39.6 0 0 1 8 .8V112a72 72 0 1 0 64 71.6V97.7A95.6 95.6 0 0 0 240 112Z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-lg brand-gradient">Services</h3>

            <ul className="space-y-2 text-[#C0C0C0] text-sm">
              <li>
                <a href="#services" className="hover:text-[#D70C09] transition">
                  Performance Software
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D70C09] transition">
                  Economy Tuning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D70C09] transition">
                  DPF Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D70C09] transition">
                  EGR & AdBlue Delete
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#D70C09]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-[#D70C09]">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-lg brand-gradient">Contact Info</h3>

            <ul className="space-y-2 text-[#C0C0C0] text-sm">

              <li>AF-MOK Performance</li>

              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D70C09] transition block leading-relaxed"
                >
                  Unit 6, Spon Lane Trading Estate,
                  <br />
                  Varney Ave, West Bromwich B70 6AE,
                  <br />
                  United Kingdom
                </a>
              </li>

              <li>
                <a
                  href="tel:+447494481443"
                  className="hover:text-[#D70C09] transition"
                >
                  +44 7494 481443
                </a>
              </li>

              <li>
                <a
                  href="mailto:afmok.performance@outlook.com"
                  className="hover:text-[#D70C09] transition break-all"
                >
                  afmok.performance@outlook.com
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1C1C1C] mt-10 pt-6 text-center text-[#868386] text-sm">
          <p>&copy; 2025 AF-MOK Performance. All rights reserved.</p>
        </div>

        {/* Powered By */}
        <div className="mt-2 text-center text-[#868386] text-sm">
          <p>
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D70C09] hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>

      {/* BRAND GRADIENTS */}
      <style jsx global>{`
        .brand-gradient {
          background: linear-gradient(90deg, #D70C09, #ffffff, #868386);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </footer>
  );
}
