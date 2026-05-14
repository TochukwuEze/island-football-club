"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function JoinIfcPage() {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep === 1) {
      setFormStep(2);
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#f7f9fc] flex items-center justify-center p-4">
        <div className="bg-white max-w-lg w-full rounded-3xl p-10 text-center shadow-xl border border-gray-100">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-[#001429] uppercase mb-4">Application Received!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Welcome to the Island Football Club family! We've received your membership application. Our team will review your details and send a confirmation email shortly with your next steps.
          </p>
          <Link href="/">
            <button className="w-full py-4 bg-primaryColor text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-blue-600 transition-colors">
              Return to Homepage
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Image/Branding (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-5/12 relative bg-[#001429] flex-col justify-between overflow-hidden p-12">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg-2.webp"
            alt="Island FC players"
            fill
            className="object-cover opacity-40 mix-blend-luminosity"
            sizes="(max-width: 1024px) 0vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001429] via-[#001429]/60 to-transparent" />
        </div>

        <div className="relative z-10">
          <Link href="/">
            <div className="text-white text-2xl font-black tracking-tighter uppercase inline-block">
              Island <span className="text-primaryColor">FC</span>
            </div>
          </Link>
        </div>

        <div className="relative z-10 mb-10">
          <p className="text-primaryColor text-xs font-black uppercase tracking-[0.3em] mb-4">
            Join The Legacy
          </p>
          <h1 className="text-white text-4xl xl:text-5xl font-black uppercase leading-[1.1] mb-6">
            More Than Just <br /> A Football Club
          </h1>
          <p className="text-gray-300 text-lg max-w-md leading-relaxed">
            Connect with professionals, develop your skills, and be part of an exclusive community both on and off the pitch.
          </p>
          
          <div className="mt-12 space-y-6">
            {[
              "Professional coaching & facilities",
              "Exclusive networking events",
              "Competitive and social leagues",
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primaryColor/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primaryColor" />
                </div>
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-7/12 flex items-center justify-center p-6 md:p-12 lg:p-16 bg-[#f7f9fc]">
        <div className="max-w-xl w-full">
          {/* Mobile Header */}
          <div className="lg:hidden mb-10 text-center">
            <Link href="/">
              <div className="text-[#001429] text-2xl font-black tracking-tighter uppercase inline-block mb-4">
                Island <span className="text-primaryColor">FC</span>
              </div>
            </Link>
            <h1 className="text-3xl font-black uppercase text-[#001429]">Join The Club</h1>
            <p className="text-gray-500 mt-2">Create your membership account today.</p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            {/* Progress Indicator */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex-1 h-2 rounded-full bg-primaryColor" />
              <div className={`flex-1 h-2 rounded-full transition-colors duration-300 ${formStep === 2 ? "bg-primaryColor" : "bg-gray-100"}`} />
            </div>

            <h2 className="text-2xl font-black text-[#001429] uppercase mb-1">
              {formStep === 1 ? "Personal Details" : "Membership Preferences"}
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              {formStep === 1 ? "Let's start with your basic information." : "Customize your IFC experience."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {formStep === 1 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">First Name *</label>
                      <input required type="text" placeholder="Emeka" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor/20 focus:border-primaryColor transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Last Name *</label>
                      <input required type="text" placeholder="Okafor" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor/20 focus:border-primaryColor transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address *</label>
                    <input required type="email" placeholder="emeka@example.com" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor/20 focus:border-primaryColor transition-all" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number *</label>
                      <input required type="tel" placeholder="+234 800 000 0000" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor/20 focus:border-primaryColor transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Date of Birth</label>
                      <input required type="date" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor/20 focus:border-primaryColor transition-all text-gray-600" />
                    </div>
                  </div>

                  <button type="submit" className="w-full mt-4 py-4 bg-[#001429] text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-primaryColor transition-all duration-300 flex items-center justify-center gap-2 group">
                    Continue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Membership Tier *</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["Basic", "Premium", "Platinum"].map((tier) => (
                        <label key={tier} className="cursor-pointer">
                          <input type="radio" name="tier" value={tier} className="peer sr-only" defaultChecked={tier === "Premium"} />
                          <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-center peer-checked:bg-primaryColor/5 peer-checked:border-primaryColor peer-checked:ring-1 peer-checked:ring-primaryColor transition-all">
                            <span className="block text-sm font-bold text-[#001429] uppercase">{tier}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Primary Interest *</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor/20 focus:border-primaryColor transition-all text-gray-700 appearance-none">
                      <option value="">Select your main interest</option>
                      <option value="playing">Playing Matches & Tournaments</option>
                      <option value="training">Training & Fitness</option>
                      <option value="networking">Networking & Social Events</option>
                      <option value="supporter">Just Supporting</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Preferred Position (If Playing)</label>
                    <div className="grid grid-cols-2 gap-4">
                      {["Goalkeeper", "Defender", "Midfielder", "Forward"].map((pos) => (
                        <label key={pos} className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                          <input type="checkbox" className="w-4 h-4 text-primaryColor rounded border-gray-300 focus:ring-primaryColor" />
                          <span className="text-sm font-semibold text-gray-700">{pos}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <button type="button" onClick={() => setFormStep(1)} className="px-6 py-4 bg-gray-100 text-gray-600 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors">
                      Back
                    </button>
                    <button type="submit" disabled={isSubmitting} className="flex-1 py-4 bg-primaryColor text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-blue-600 transition-all shadow-[0_0_15px_rgba(20,105,180,0.3)] disabled:opacity-70 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        "Complete Registration"
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
            
            <p className="text-center text-xs text-gray-400 mt-8">
              By joining, you agree to our <Link href="#" className="text-primaryColor hover:underline">Terms of Service</Link> and <Link href="#" className="text-primaryColor hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
