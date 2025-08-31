"use client";

import Image from "next/image";

export default function Events() {
  const events = [
    {
      category: "WORKSHOPS",
      items: [
        {
          title: "Graphic Design Workshop",
          date: "Jan 20, 2024",
          description:
            "Ever wondered how to create digital media from scratch using software?\nWant to broaden your horizons by communicating through visual concepts?",
          image: "/events/GD-WORKSHOP.png",
          link: "#",
        },
        {
          title: "Stock Market Workshop",
          date: "Jan 29, 2023",
          description:
            "Do you ever imagine yourself as a star investor ruling the markets of the Stock Exchange and reaping sumptuous? Isn't it worth it to take a chance to be the one, to be the billionaires?",
          image: "/events/STOCK MARKET.png",
          link: "#",
        },
      ],
    },
    {
      category: "HACKATHON",
      items: [
        {
          title: "Ideathon",
          date: "Mar 14, 2024",
          description:
            "Are you brimming with ideas to address the common real world problems and revolutionize the field of solutions?! IDEATION is an offline team-based event wheres participant in a team come together to present solution on various real life problem.",
          image: "/events/IDEATHON-2.0.png",
          link: "#",
        },
      ],
    },
    {
      category: "FINANCE EVENTS",
      items: [
        {
          title: "Stock Bit",
          date: "Jan 30, 2023",
          description:
            "Embrace yourselves as we present to you, StockBit. A five day Stock Market simulation. Invest fake money and see if you're able to predict the movement of stocks.",
          image: "/events/STOCK BIT.png",
          link: "#",
        },
        {
          title: "Mergers Alliance 2.0",
          date: "Dec 23, 2023",
          description:
            "Get ready to embark on a journey of innovation, inspiration, and interaction! We at Maths N Tech Club are thrilled to be back with our latest event MERGERS ALLIANCE 2.0 where you not only get a chance to showcase your entrepreneurial spirit",
          image: "/events/MERGERS.png",
          link: "#",
        },
      ],
    },
    {
      category: "FUN EVENTS",
      items: [
        {
          title: "Campusudo",
          date: "Oct 16, 2022",
          description:
            "Maths N Tech Club is soon bringing to you all, the first ever version of 'Campusudo', an offline intrepid hunting game, that will have your brains engaged in mind boggling assumptions and leave you craving for more.",
          image: "/events/CAMPUSUDO.png",
          link: "#",
        },
        {
          title: "Brain Darts",
          date: "Feb 25, 2024",
          description:
            "Just like a vector, the magnitude is not the only thing that matters in Brain Darts .As you witness your scores run riot, just by a correct sense of direction!!!Miss and see yourself fall behind on the leaderboad. Hit and you’ll see yourself reach the pinnacle!!!And, as you decide amongst yourselves who has the better aim, Team Aavishkar presents before you BRAIN DARTS! Can you aim for the eye… Arjuna?",
          image: "/events/BRAINDARTS.png",
          link: "#",
        },
      ],
    },
    {
      category: "AAROHAN EVENTS",
      items: [
        {
          title: "Terrrist Takedown 2.0",
          date: "Apr 9, 2024",
          description:
            "Do you pose a keen desire to explore the unknown? We feel you, Master Snow. The Night's Watch is definitely not your place. Last Aarohan, MNTC organized the annual edition of the prolific treasure hunt, TERRORIST TAKEDOWN! As one reached out to the east of Essos and to the west of Westeros, each careful step unraveled a series of mysteries",
          image: "/events/TT.png",
          link: "#",
        },
        {
          title: "Kryptic",
          date: "Apr 10, 2024",
          description:
            "Is adrenaline rush what you crave for whilst cracking codes? Fascinated by outlandish and bizarre cyphers, eh? This Aarohan, Team Aavishkar brings to you KRYPTIC, to put your crypto-hungry soul to rest. Delve deeper into this enigmatic World of Cryptology, sail through the labyrinthine trail of codes and decipher them to climb up to the pinnacle",
          image: "/events/KRYPTIC.png",
          link: "#",
        },
        {
          title: "Matrix",
          date: "Apr 8, 2024",
          description:
            "This Aarohan relive those adrenaline packed days of family game nights, those same tears of defeat, the roars of success and the incessant praying for the dice to roll in your favour! Team Aavishkar brings to you the chance of travelling down the memory lane, with twist of numbers and logic: MATRIX",
          image: "/events/MATRIX.png",
          link: "#",
        },
        {
          title: "Call out Sherlock",
          date: "Apr 8, 2024",
          description:
            "Will you be excited to hear that we are back again with an enthralling opportunity to unleash the hidden detective inside of you?",
          image: "/events/COS.png",
          link: "#",
        },
        {
          title: "Darwinia",
          date: "Apr 9, 2024",
          description:
            "Have you ever thought of playing football online rather than going to the field?,This Aarohan, Team Aavishkar brings to you DARWINIA, a football match for all the soccer enthusiasts out there, with numerous twists and turns.",
          image: "/events/DARWINIA.png",
          link: "#",
        },
        {
          title: "House of Cups",
          date: "Apr 8, 2024",
          description:
            "Because Team Aavishkar is bringing to you an astonishing game of thrill and delight through HOUSE OF CUPS. Form your houses and protect them from demolition.",
          image: "/events/HOUSE-OF-CUPS.png",
          link: "#",
        },
        {
          title: "Portfolio Venture",
          date: "Apr 10, 2024",
          description:
            "Are you ready to test your financial acumen and strategic thinking? Welcome to Portfolio Venture, an exciting game hosted by our Maths N Tech Club that puts your investment skills to the ultimate test !! The goal?",
          image: "/events/PORTFOLIO.png",
          link: "#",
        },
        {
          title: "Clash of Titans",
          date: "Apr 10, 2024",
          description:
            "Do you remember how much fun it was to watch those game shows with your family back in the day? Those enjoyable, heartwarming, and humorous games.",
          image: "/events/COT.png",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[url('/events/bg.png')] bg-cover bg-center bg-no-repeat text-white p-6">
      {/* Page Title */}
      <div className="text-center mb-16 mt-16">
        <h1
          className="text-[70px] font-bold leading-none tracking-normal text-center"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Events Round The <span style={{ color: "#A185FE" }}>Calendar</span>
        </h1>
      </div>

      {/* Events */}
      {events.map((section, id) => (
        <div key={id} className="p-6">
          {/* Category Heading */}
          <h2
            className="text-[50px] font-bold leading-none tracking-normal text-center mb-8"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {section.category}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {section.items.map((item, index) => {
              const isLastOdd =
                section.items.length % 2 !== 0 &&
                index === section.items.length - 1;

              return (
                <div
                  key={index}
                  className={`p-6 flex flex-col md:flex-row gap-6 items-center transition-transform duration-300 hover:scale-105 ${
                    isLastOdd ? "md:col-span-2 md:mx-auto md:w-1/2" : ""
                  }`}
                >
                  {/* Image */}
                  {item.image && (
                    <Image width={1920} height={600}
                      src={item.image}
                      alt={item.title}
                      className="w-48 h-48 object-cover rounded-xl shadow-md"
                    />
                  )}

                  {/* Description */}
                  <div className="flex-1">
                    {/* Event Name */}
                    <h3
                      className="text-[30px] font-bold leading-none tracking-normal mb-1 text-left"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {item.title}
                    </h3>

                    {/* Event Date */}
                    <p
                      className="text-[15px] leading-none tracking-normal mb-4 text-left"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        color: "#00FFDF",
                      }}
                    >
                      {item.date}
                    </p>

                    {/* Event Description */}
                    <p
                      className="text-[15px] leading-normal tracking-normal mb-2 whitespace-pre-line text-left"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {item.description}
                    </p>

                    {/* Learn More Link */}
                    <a
                      href={item.link}
                      className="text-[15px] hover:underline text-left"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        color: "#00FFDF",
                      }}
                    >
                      Learn More &gt;
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}