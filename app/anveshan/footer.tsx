import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Footer() {
  const pages = [
    { name: "Home", highlight: "me" },
    { name: "About Us", highlight: "Us" },
    { name: "Anveshan", highlight: "shan" },
    { name: "Events", highlight: "s" },
    { name: "Our Team", highlight: "Team" },
  ];

  return (
    <footer className="bg-[#1D1D1B] text-white px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">
        
        {/* Left Section: Club Info */}
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-semibold mb-4">GET IN TOUCH</h1>
          <h2 className="text-3xl font-medium mb-2">Maths N Tech Club</h2>
          <p className="text-lg text-gray-300">NIT Durgapur</p>
        </div>

        {/* Middle Section: Contact Us */}
        <div>
          <h3 className="text-2xl font-semibold relative w-fit mb-6
            after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] 
            after:bg-gradient-to-r after:from-[#A185FE] after:via-[#7C6BFF] after:to-transparent">
            Contact Us
          </h3>
          <ul className="space-y-4 text-lg text-gray-300">
            <li className="flex items-center gap-3">
              <MdEmail size={22} className="text-[#A185FE]" /> 
              <a href="mailto:mntc@nitdgp.ac.in" className="hover:text-[#A185FE] transition-colors">
                mntc@nitdgp.ac.in
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MdPhone size={22} className="text-[#A185FE]" /> 
              +91 9876543210
            </li>
            <li className="flex items-center gap-3">
              <MdLocationOn size={22} className="text-[#A185FE]" /> 
              NIT Durgapur, WB, India
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6">
            <a 
              href="https://www.instagram.com/mntc.nitd?igsh=MTZsMDcyaWw5ZnI2aQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#A185FE] transition-colors"
            >
              <FaInstagram size={28} />
            </a>
            <a 
              href="https://www.facebook.com/share/1F8HmYufnv/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#A185FE] transition-colors"
            >
              <FaFacebookF size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/company/maths-n-tech-club-nit-durgapur/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#A185FE] transition-colors"
            >
              <FaLinkedinIn size={28} />
            </a>
          </div>
        </div>

        {/* Right Section: Pages */}
        <div>
          <h3 className="text-2xl font-semibold relative w-fit mb-6
            after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] 
            after:bg-gradient-to-r after:from-[#A185FE] after:via-[#7C6BFF] after:to-transparent">
            Other Pages
          </h3>
          <ul className="space-y-4 text-lg">
            {pages.map(({ name, highlight }, idx) => {
              const parts = name.split(new RegExp(`(${highlight})`, "i"));
              return (
                <li key={idx} className="cursor-pointer text-white group">
                  {parts.map((part, i) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                      <span
                        key={i}
                        className="transition-colors duration-300 group-hover:text-[#A185FE]"
                      >
                        {part}
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Maths N Tech Club, NIT Durgapur. All rights reserved.
      </div>
    </footer>
  );
}
