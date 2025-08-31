import React from "react";

export default function App() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen w-full relative overflow-hidden">
      {/* ===== Section 1: Rocket ===== */}
      <section className="flex flex-col items-center justify-center py-24 relative">
        {/* Rocket image */}
        <img src="/images/rocket.png" alt="Rocket" className="w-100% mb-10" />

        
      </section>

      {/* ===== Section 2: Who are We ===== */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
        {/* Semi-circular rings (bottom-left) */}
        <div className="pt-30">
        <div className="mt-150">
        <img
          src="/images/who are we shape.png"
          alt="Semi circular rings"
          className="hidden md:block absolute left-0 bottom-1 w-60 opacity-90"
        /> </div>
        </div>

        {/* Left Text */}
        <div className="ml-20 md:w-3/5 z-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Who are <span className="text-purple-500">We?</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-xl">
            We are the official knowledge club of National Institute of
            Technology, Durgapur. Established in 2004, the aim of our club is to
            create a platform that encourages one to stimulate their love and
            passion for mathematics in this world of technology. It is our goal
            to fabricate the perfect balance of Maths and Technology by hosting
            various events, webinars and workshops that inspire one to explore
            new fields and innovations.
          </p>
          <a href="#" className="text-teal-400 font-semibold hover:underline">
            Know More About Us
          </a>
        </div>

        {/* Right Illustration */}
        <div className="md:w-4/5 flex justify-center mt-20 md:mt-0 z-10">
          <img src="/images/question vector.png" alt="Who are we illustration" className="w-72 lg:w-100" />
        </div>
      </section>

      {/* ===== Section 3: Meet the people ===== */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
        {/* Left: Single illustration (people + graph) */}
        <div className="md:w-2/5 flex justify-center items-start mt-70">
          <img
            src="/images/team.png"
            alt="People with graph illustration"
            className="w-full max-w-xl mx-auto"
          />
        </div>

        {/* Right: Text */}
        <div className="md:w-4/5 text-right flex flex-col justify-start">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 whitespace-nowrap">
            Meet the <span className="text-purple-500">people</span> making it happen
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-xl ml-auto">
              Be it the smallest achievements or the largest accomplishments, it
            requires the support and dedication of every member of the team. All
              our endeavours are nothing but a display of the united attempts of
              our zestful squad. Meet the MNTC family, the dynamic gang behind it
            all.
          </p>
          <a href="#" className="text-teal-400 font-semibold hover:underline">
            Meet the people making it happen
          </a>
        </div>
    
      </section>

      {/* ===== Decorative bottom-right ===== */}
      <div className="absolute bottom-0 right-10 mb-1">
        <img src="/images/meet the people shape.png" alt="Decorative bottom design" className="w-100" />
      </div>
    </div>
  );
}

