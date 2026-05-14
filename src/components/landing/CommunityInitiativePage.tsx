"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/landing/Breadcrumb";
import { Heart, BookOpen, HandHeart, Trophy } from "lucide-react";

const initiatives = [
  {
    title: "School Partnerships",
    desc: "We provide free coaching clinics and equipment to over 15 local primary and secondary schools in Lagos.",
    icon: <BookOpen className="w-6 h-6 text-white" />,
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Street to Stadium",
    desc: "A talent identification program giving underprivileged youth the chance to earn full academy scholarships.",
    icon: <Trophy className="w-6 h-6 text-white" />,
    color: "from-green-500 to-green-700"
  },
  {
    title: "Community Health",
    desc: "Monthly free health check-ups and fitness seminars for the local community hosted at our facilities.",
    icon: <Heart className="w-6 h-6 text-white" />,
    color: "from-red-500 to-red-700"
  },
  {
    title: "Food Drives",
    desc: "Players and staff volunteer bi-monthly to distribute food and essentials to communities in need.",
    icon: <HandHeart className="w-6 h-6 text-white" />,
    color: "from-orange-500 to-orange-700"
  }
];

export default function CommunityInitiativePage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <Breadcrumb title="Community Initiatives" />

      {/* Hero Section */}
      <section className="relative w-full py-24 bg-[#0d0d0d] overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg-2.webp"
            alt="Island FC Community"
            fill
            priority
            className="object-cover opacity-30 grayscale"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001429] via-[#001429]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primaryColor text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4">
            Beyond Football
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-black uppercase leading-tight mb-6">
            Heart of the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryColor to-blue-400">Community</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Island FC is committed to using the power of football to drive positive social change and uplift the communities we call home.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#f7f9fc]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-[#001429] uppercase mb-8 leading-tight">
            "A football club is only as strong as the community that stands behind it."
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Since our inception, Island Football Club has dedicated a percentage of all revenue directly to our charitable foundation. We don't just want to win trophies; we want to win hearts, provide opportunities, and build a better future for the youth of Lagos.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((init, idx) => (
              <div key={idx} className="flex gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${init.color} shadow-lg group-hover:-translate-y-2 transition-transform`}>
                  {init.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#001429] mb-3">{init.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-4">{init.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 pb-20">
        <div className="bg-gradient-to-r from-[#001429] to-[#1469B4] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">Want to make a difference?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              We are always looking for volunteers, corporate partners, and sponsors for our community outreach programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-white text-[#001429] font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-gray-100 transition-colors">
                  Partner With Us
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-white/10 transition-colors">
                  Volunteer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
