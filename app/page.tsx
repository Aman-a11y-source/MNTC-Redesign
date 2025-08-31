import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="bg-[url('/home/bg.png')] text-white min-h-screen w-full relative overflow-hidden">
      {/*section1*/}
      <section className="flex flex-col items-center justify-center py-10 relative">
        
        <div>
          <Image src="/home/rocket.png" alt="Rocket" className="w-full mb-10" width={1920} height={600}/>
        </div>

        
      </section>

      {/*section2*/}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
    
        <div className="pt-30">
        <div className="mt-150">
        <Image width={1920} height={600}
          src="/home/who are we shape.png"
          alt="Semi circular rings"
          className="hidden md:block absolute left-0 bottom-1 w-60 opacity-90"
        /> </div>
        </div>

        
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

        
        <div className="md:w-4/5 flex justify-center mt-20 md:mt-0 z-10">
          <Image width={1920} height={600} src="/home/question vector.png" alt="Who are we illustration" className="w-72 lg:w-100" />
        </div>
      </section>

      {/*section3*/}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
        
        <div className="md:w-2/5 flex justify-center items-start mt-70">
          <Image width={1920} height={600}
            src="/home/team.png"
            alt="People with graph illustration"
            className="w-full max-w-xl mx-auto"
          />
        </div>

        
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

      
      <div className="absolute bottom-0 right-10 mb-1">
        <Image width={1920} height={600} src="/home/meet the people shape.png" alt="Decorative bottom design" className="w-100" />
      </div>
    </div>
  );
}
