import fs from "fs";
import path from "path";
import DomeGallery from "../components/DomeGallery";
import AboutUsPerspective from "../components/AboutUsPerspective";

export default function AboutPage() {
  // Scan the memories folder at render/build time
  const memoriesDir = path.join(process.cwd(), "public", "images", "memories");
  let images: string[] = [];
  try {
    if (fs.existsSync(memoriesDir)) {
      const files = fs.readdirSync(memoriesDir);
      images = files
        .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
        .map((file) => `/images/memories/${file}`);
    }
  } catch (e) {
    console.error("Failed to read memories directory:", e);
  }

  // Fallback to our known 6 memories if directory is empty or inaccessible
  if (images.length === 0) {
    images = [
      "/images/memories/memory1.jpeg",
      "/images/memories/memory2.jpeg",
      "/images/memories/memory3.jpeg",
      "/images/memories/memory4.jpeg",
      "/images/memories/memory5.jpeg",
      "/images/memories/memory6.jpeg",
    ];
  }

  return (
    <div className="relative text-white min-h-screen w-full overflow-hidden bg-[#08070d] pb-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED] rounded-full mix-blend-screen filter blur-[120px] opacity-15 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#00FFDF] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      {/* Hero Section with Interactive Dome Gallery */}
      <div className="relative w-full h-screen overflow-hidden bg-transparent border-b border-white/5 flex flex-col justify-center items-center">
        {/* Immersive Title Overlay */}
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none select-none px-6 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-space-grotesk text-white uppercase tracking-tight">
            Our Interactive Dome
          </h1>
        </div>

        {/* Dome Gallery Container */}
        <div className="w-full h-full relative z-10">
          <DomeGallery images={images} grayscale={false} />
        </div>
      </div>

      {/* 3D Perspective Scroll About Us Section */}
      <div className="relative z-10 mt-12">
        <AboutUsPerspective />
      </div>
    </div>
  );
}
