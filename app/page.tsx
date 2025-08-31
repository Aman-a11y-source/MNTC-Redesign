import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (

    <div
      className="min-h-screen bg-fixed bg-no-repeat bg-cover overflow-y-scroll"
      style={{
        backgroundImage: "url('../public/images/desktop.png')",
      }}>
        <h1 className="absolute top-10 text-3xl md:text-4xl font-bold">
        Maths <span className="text-purple-400">N</span> Tech Club
        </h1>

    

    <div className="bg-black text-white min-h-screen overflow-y-scroll">

{/*who are we*/}
      <section className="h-screen flex items-center justify-center px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl">

          <div>
            <h2 className="text-4xl font-bold mb-4">
              Who are <span className="text-purple-400">We?</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We are the official knowledge club of National Institute of Technology,Durgapur. Established in 2009, the aim of our club is to create a platform
              that encourages one to structure their love and passion for mathematics in theworld of technology. It is our goal to strike the perfect balance of Maths and
              Technology by hosting regular events, webinars and workshops that inspire oneto explore new fields and innovations.
            </p>
            <a
              href="/about-us/page.tsx"
              className="text-purple-400 hover:underline font-medium"
            >
              Know More About Us
            </a>
          </div>
          <div className="hidden lg:flex items-center justify-center fixed right-0 top-0 h-screen w-1/2">
            <img
            src="../public/images/question vector.png"
            alt="who are we"
            className="max-h-[80%] object-contain"
            />
          </div>
          <div className="absolute left-0 top-0">
            <img src="../public/images/who are we shape.png" 
            alt="who we are vector" 
            className="w-32 h-32 object-contain" />
          </div>
        </div>
      </section>

{/*meet the team*/}
      <section className="h-screen flex items-center justify-center px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl">
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <img 
            src="../public/images/team.png" 
            alt="team" 
            className="w-40 h-auto object-contain" 
            />
          </div>
          <div className="absolute right-0 top-2/3 -translate-y-1/2">
            <img 
            src="../public/images/meet the people shape.png" 
            alt="meet the team" 
            className="w-40 h-auto object-contain" 
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">
              Meet the <span className="text-purple-400">people</span> making it happen
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Be it the smallest achievements or the largest accomplishments, it requires the support and dedication of every member of the team. All our endeavors are
              nothing but a display of the united ambition of our small squad. Here at the Math Club, this dynamic gang gets behind it all.
            </p>
            <a
              href="#"
              className="text-purple-400 hover:underline font-medium"
            >
              Meet the people making it happen
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}