"use client";

import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  return (
    <section className="relative py-20 bg-[#000000] text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: "url('pexels-photo-17045319-2880w.webp')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT — FORM */}
        <div
          className="bg-black/80 p-8 shadow-xl border border-white/10"
          data-aos="fade-right"
        >
          <h2 className="text-xl font-semibold mb-6">Send us an email:</h2>

          <form className="space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[#C0C0C0] text-sm">Name:</label>
                <input
                  type="text"
                  className="w-full bg-black/50 border border-[#868386] text-white px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-[#C0C0C0] text-sm">Email:</label>
                <input
                  type="email"
                  className="w-full bg-black/50 border border-[#868386] text-white px-3 py-2 text-sm"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[#C0C0C0] text-sm">Phone:</label>
                <input
                  type="text"
                  className="w-full bg-black/50 border border-[#868386] text-white px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-[#C0C0C0] text-sm">
                  Vehicle Registration:
                </label>
                <input
                  type="text"
                  placeholder="AX51 BCD"
                  className="w-full bg-black/50 border border-[#868386] text-white px-3 py-2 text-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-[#C0C0C0] text-sm">Message</label>
              <textarea
                rows="4"
                className="w-full bg-black/50 border border-[#868386] text-white px-3 py-2 text-sm"
              ></textarea>
            </div>

            {/* Button */}
            <button className="px-6 py-2 border border-[#D70C09] text-[#D70C09] text-sm hover:bg-[#D70C09] hover:text-white transition">
              Send Message
            </button>
          </form>

          {/* MAP */}
          <div
            className="mt-6 h-60 w-full bg-black/40 border border-white/10"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <iframe
              title="map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.8132316661526!2d-3.1427187234624776!3d53.224073879958504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ad5c97af0ab8b%3A0xbadd60618eaed8e6!2sQue%20Sera%2C%20Pentre%20Hill%2C%20Flint%20Mountain%2C%20Flint!5e0!3m2!1sen!2suk!4v1733268000000"
            ></iframe>
          </div>
        </div>

        {/* RIGHT — CONTACT DETAILS */}
        <div className="text-white" data-aos="fade-left" data-aos-delay="100">
          <h2 className="text-xl font-semibold mb-4">Contact details:</h2>

          <p className="text-[#C0C0C0]">
            Que Sera, Pentre Hill,  
            <br />
            Flint Mountain, Flint, United Kingdom
          </p>

          <p className="text-[#C0C0C0] mt-4">
            <a href="tel:07392791919" className="hover:text-[#D70C09]">
              07392 791919
            </a>
          </p>

          <p className="text-[#C0C0C0] mt-2">
            <a
              href="mailto:enquiries@dervtech.com"
              className="hover:text-[#D70C09]"
            >
              enquiries@dervtech.com
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6 text-xl">
            <a
              href="https://web.facebook.com/profile.php?id=100037206957303"
              target="_blank"
              className="hover:text-[#D70C09]"
            >
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#D70C09]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#D70C09]">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-[#D70C09]">
              <FaWhatsapp />
            </a>
          </div>

          {/* Business Hours */}
          <h3 className="text-lg font-semibold mt-10">Business Hours</h3>

          <ul className="text-[#C0C0C0] mt-2 space-y-1 text-sm">
            <li>Monday: 9:30 AM – 5:30 PM</li>
            <li>Tuesday: 9:30 AM – 5:30 PM</li>
            <li>Wednesday: 9:30 AM – 5:30 PM</li>
            <li>Thursday: 9:30 AM – 5:30 PM</li>
            <li>Friday: 9:30 AM – 5:30 PM</li>
            <li>Saturday: 9 AM – 5 PM</li>
            <li>Sunday: 9 AM – 2 PM</li>
          </ul>

          {/* Facebook Embed */}
          <div
            className="mt-10 border border-white/10 p-3 bg-black/40"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-sm mb-1 text-[#C0C0C0]">Follow us on Facebook</p>
            <iframe
              title="facebook"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allow="encrypted-media"
              src="https://www.facebook.com/plugins/page.php?href=https://web.facebook.com/profile.php?id=100037206957303&tabs&width=340&height=130&small_header=false&adapt_container_width=true"
              width="340"
              height="130"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
