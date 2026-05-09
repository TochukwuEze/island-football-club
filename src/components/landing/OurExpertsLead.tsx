"use client";

import React from "react";
import Image from "next/image";

const experts = [
  {
    name: "LIAM HARRISON",
    role: "Forward",
    image: "/images/team/liam.png",
  },
  {
    name: "GEFF BARKER",
    role: "Forward",
    image: "/images/team/geff.png",
  },
  {
    name: "ROBERT THOMPSON",
    role: "Defender",
    image: "/images/team/robert.png",
  },
  {
    name: "HUGO STONES",
    role: "Forward",
    image: "/images/team/hugo.png",
  },
];

const OurExpertsLead = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-3">
            Meet the Team
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight uppercase leading-tight">
            Our Experts Lead
          </h2>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {experts.map((expert, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Expert Info */}
              <div className="mt-6">
                <h3 className="text-lg font-black text-black uppercase tracking-tight">
                  {expert.name}
                </h3>
                <p className="text-gray-400 text-sm font-medium mt-1">
                  {expert.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertsLead;
