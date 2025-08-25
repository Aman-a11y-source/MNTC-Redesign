export default function Home() {
  return (
    <main className="min-h-screen bg-[#9747FF]">
      {/* Navbar */}

      {/* Body Section */}
      <section className="w-full min-h-screen flex items-center justify-center px-16 py-12">
        <div className="grid grid-cols-2 gap-12 w-full max-w-7xl items-center">
          {/* Left: Anveshan Image */}
          <div className="flex justify-center">
            <div className="w-[420px] h-[420px] bg-white/10 rounded-xl flex items-center justify-center shadow-xl overflow-hidden">
              <img
                src="/Group 1.png"
                alt="Anveshan Magazine"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col items-start text-left">
            {/* Heading */}
            <h1 className="text-8xl tracking-wide leading-tight text-white mb-2">
              Anve<span className="text-[#A185FE]">shan</span>
            </h1>

            {/* Subheading */}
            <h2
              className="text-3xl tracking-wide mb-2"
              style={{ color: "#00FFDF" }}
            >
              The Official Tech Magazine of MNTC, NIT Durgapur
            </h2>
            <br />
            <br />

            {/* Paragraph */}
            <p className="text-white text-2xl leading-relaxed max-w-2xl mb-10">
              We are stoked to present to you the newest edition of{" "}
              <span className="text-[#ffffff]">Anveshan</span> - the official
              tech magazine of Maths N Tech Club, NIT Durgapur. Feeling tired of
              assignments and regular 9-6 classes?
              <br />
              Replete with technical articles that are sure to blow up your
              mind, innovations of your contemporaries that would make you feel
              proud, and puzzles that would require your analytical skills at
              their peak to solve them,{" "}
              <span className="text-[#ffffff]">Anveshan</span> is definitely the
              ideal magazine to provide a reprieve to you from your monotonous.
            </p>

            {/* Button */}
            <button
              className="px-10 py-4 rounded-full bg-[#A185FE] text-white text-xl font-medium 
                            shadow-md transition-all duration-300 transform 
                            hover:bg-[#B49BFF] hover:shadow-xl hover:scale-105"
            >
              Download it now!
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
    </main>
  );
}
