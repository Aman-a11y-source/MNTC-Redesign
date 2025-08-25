export default function Navbar() {
  const menu = [
    { name: "Home", highlight: "me" },
    { name: "About Us", highlight: "us" },
    { name: "Anveshan", highlight: "shan" },
    { name: "Events", highlight: "s" },
    { name: "Our Team", highlight: "team" },
  ];

  return (
    <nav className="w-full flex justify-between items-center px-12 py-8 bg-transparent">
      {/* Left: Logos */}
      <div className="flex items-center gap-5">
        <img src="/nit-dgp-black.svg" alt="MNTC Logo" className="h-18 w-auto" />
        <img src="/mntc-white.svg" alt="NIT DGP Logo" className="h-11 w-auto" />
      </div>

      {/* Right: Menu */}
      <ul className="flex gap-14 text-2xl tracking-wide">
        {menu.map(({ name, highlight }, idx) => {
          const parts = name.split(new RegExp(`(${highlight})`, "i"));
          return (
            <li
              key={idx}
              className="cursor-pointer transition-colors duration-300 text-white hover:text-white group"
            >
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
    </nav>
  );
}
