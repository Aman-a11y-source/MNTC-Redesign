export default function AnveshanPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('anveshan1/bg.png')", // ✅ put bg.png inside /public
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full max-w-7xl items-center">
          
          {/* Left: Anveshan Image */}
          <div className="flex justify-center lg:justify-start lg:-ml-6">
            <img
              src="anveshan1/Group 1.png"  
              alt="Anveshan Magazine"
              className="w-[85%] sm:w-[70%] md:w-[596px] md:h-[719px] lg:w-[620px] xl:w-[650px] object-contain"
            />
          </div>

          {/* Right: Content */}
         <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
           {/* Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wide leading-tight text-white mb-3"> 
              Anve<span className="text-[#A185FE]">shan</span> </h1>
              
               {/* Subheading */} <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide mb-4" style={{ color: "#00FFDF" }} >
                 The Official Tech Magazine of MNTC, NIT Durgapur
                  </h2><br/><br/>
            <p className="text-sm sm:text-base md:text-lg lg:text-[22px] text-white leading-relaxed max-w-xl md:max-w-2xl mb-8">
              We are stoked to present to you the newest edition of{" "}
              <span className="text-white">Anveshan</span> - the official tech
              magazine of Maths N Tech Club, NIT Durgapur. Feeling tired of
              assignments and regular 9-6 classes? <br />
              Replete with technical articles that are sure to blow up your
              mind, innovations of your contemporaries that would make you feel
              proud, and puzzles that would require your analytical skills at
              their peak to solve them,{" "}
              <span className="text-white">Anveshan</span> is definitely the
              ideal magazine to provide a reprieve to you from your monotonous.
            </p>

            {/* Download Button */}
           <a
  href="anveshan1/Anveshan_2025.pdf"   
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full bg-[#A185FE] text-white text-base md:text-lg lg:text-xl font-medium
             shadow-md transition-all duration-300 transform
             hover:bg-[#B49BFF] hover:shadow-xl hover:scale-105"
>
  Download it now!
</a>

          </div>
        </div>
      </section>
    </main>
  );
}
