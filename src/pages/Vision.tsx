import { Heart } from "lucide-react";

export default function OurVision() {
  type ValueIcon =
    | "sustainability"
    | "heritage"
    | "community"
    | "innovation"
    | "excellence"
    | "circular";

  type JourneyIcon = "begin" | "growth" | "create" | "future";

  const renderValueIcon = (icon: ValueIcon) => {
    switch (icon) {
      case "sustainability":
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3C8 7 6 10 6 13.5A6 6 0 0 0 18 13.5C18 10 16 7 12 3Z" stroke="#D19C2A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "heritage":
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20M12 4V20M16 12.8L17 18.5L12 15.8L7 18.5L8 12.8L4 9L9.5 8.2L12 3L14.5 8.2L20 9" stroke="#D19C2A" strokeWidth="1.7" strokeLinecap="round" />
            <circle cx="12" cy="12" r="8" stroke="#D19C2A" strokeWidth="1.7" />
          </svg>
        );
      case "community":
        return (
          <Heart className="w-6 h-6" color="#D19C2A" />
        );
      case "innovation":
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V5M12 19V21M4.9 4.9L6.3 6.3M17.7 17.7L19.1 19.1M3 12H5M19 12H21M4.9 19.1L6.3 17.7M17.7 6.3L19.1 4.9" stroke="#D19C2A" strokeWidth="1.7" strokeLinecap="round" />
            <circle cx="12" cy="12" r="3.5" stroke="#D19C2A" strokeWidth="1.7" />
          </svg>
        );
      case "excellence":
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L14.5 8.2L20 9L16 12.8L17 18.5L12 15.8L7 18.5L8 12.8L4 9L9.5 8.2L12 3Z" stroke="#D19C2A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "circular":
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7H3V3M17 17H21V21" stroke="#D19C2A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 7C5.8 4 8.5 2.8 12 2.8C16.6 2.8 20.2 6.4 20.2 11" stroke="#D19C2A" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M20 17C18.2 20 15.5 21.2 12 21.2C7.4 21.2 3.8 17.6 3.8 13" stroke="#D19C2A" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  const renderJourneyIcon = (icon: JourneyIcon) => {
    switch (icon) {
      case "begin":
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 4V20M4 12H20" stroke="#D19C2A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="8" stroke="#D19C2A" strokeWidth="1.8" />
          </svg>
        );
      case "growth":
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 16L10 11L14 15L19 9" stroke="#D19C2A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 13V9H15" stroke="#D19C2A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "create":
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 10L8 5H16L20 10L12 20L4 10Z" stroke="#D19C2A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 5L12 10L16 5" stroke="#D19C2A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "future":
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 3V6M12 18V21M3 12H6M18 12H21M5.6 5.6L7.7 7.7M16.3 16.3L18.4 18.4M5.6 18.4L7.7 16.3M16.3 7.7L18.4 5.6" stroke="#D19C2A" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="12" r="4" stroke="#D19C2A" strokeWidth="1.8" />
          </svg>
        );
      default:
        return null;
    }
  };

  const values = [
    {
      icon: "sustainability" as ValueIcon,
      title: "Sustainability",
      text: "We are committed to ethically sourcing all materials and minimizing our environmental footprint at every stage of production.",
    },
    {
      icon: "heritage" as ValueIcon,
      title: "Global Heritage",
      text: "Drawing inspiration from jewellery traditions around the world while honouring India's unparalleled goldsmithing legacy.",
    },
    {
      icon: "community" as ValueIcon,
      title: "Community First",
      text: "Supporting artisan communities through fair wages, education programmes, and preserving traditional craft knowledge.",
    },
    {
      icon: "innovation" as ValueIcon,
      title: "Innovation",
      text: "Embracing modern technology and design methodologies while staying true to handcrafted excellence.",
    },
    {
      icon: "excellence" as ValueIcon,
      title: "Excellence",
      text: "Uncompromising quality at every touchpoint, from the purity of our gold to the precision of our settings.",
    },
    {
      icon: "circular" as ValueIcon,
      title: "Circular Economy",
      text: "Our gold buy-back and recycling programme ensures precious metals continue their journey responsibly.",
    },
  ];

  const journey = [
    {
      icon: "begin" as JourneyIcon,
      tag: "WHERE IT BEGAN",
      title: "Rooted in Craft",
      text: "Our story started with a single artisan's dream — to create gold jewellery that speaks the language of the soul. From a humble workshop in Thiruvananthapuram, we learned that true beauty lies in the patience of the hand and the passion of the heart.",
      image: "/Vision/story1.svg",
      number: "01",
    },
    {
      icon: "growth" as JourneyIcon,
      tag: "HOW WE GREW",
      title: "A Legacy of Trust",
      text: "Thousands of families have placed their most precious moments in our hands — engagements, weddings, anniversaries. This trust is what drives every design, every setting, every polish. It's not jewellery; it's a promise.",
      image: "/Vision/story2.svg",
      number: "02",
    },
    {
      icon: "create" as JourneyIcon,
      tag: "WHAT WE CREATE",
      title: "Timeless Artistry",
      text: "Each collection is a conversation between heritage and modernity. Our master artisans draw from Kerala's rich cultural tapestry, weaving traditional motifs with contemporary elegance to craft pieces that transcend trends and time.",
      image: "/Vision/story3.svg",
      number: "03",
    },
    {
      icon: "future" as JourneyIcon,
      tag: "WHERE WE'RE HEADED",
      title: "Adorning the Future",
      text: "We envision a world where luxury and responsibility walk hand in hand. Through ethical sourcing, sustainable practices, and empowering the next generation of artisans, Venaxa Gold is shaping a future as brilliant as the gold we craft.",
      image: "/Vision/story4.svg",
      number: "04",
    },
  ];

  return (
    <div className="bg-[#FFF] min-h-screen">
      <section
        className="w-full py-24 sm:py-32 lg:py-44 px-4 text-center"
        style={{
          backgroundImage: "linear-gradient(rgba(28,28,28,0.45), rgba(28,28,28,0.45)), url('/Vision/Hero.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-[#D19C2A] font-manrope text-[11px] sm:text-xs font-bold tracking-[0.4em] uppercase">OUR VISION</p>
        <h1 className="mt-3 text-white font-playfairDisplay text-[34px] sm:text-[48px] lg:text-[56px] leading-tight">Our Vision</h1>
        <p className="mt-3 text-[rgba(255,255,255,0.88)] font-manrope text-sm sm:text-[15px] leading-6 max-w-[560px] mx-auto">
          Building timeless jewellery traditions through sustainability, craftsmanship, and purpose.
        </p>
      </section>

      <section className="bg-[#FAF8F4] px-4 sm:px-8 py-14 sm:py-16">
        <div className="max-w-[832px] mx-auto text-center">
          <p className="text-[#D19C2A] font-manrope text-[11px] font-bold leading-[16.8px] tracking-[0.4em]">OUR MISSION</p>
          <p className="mt-6 text-[#161616] font-playfairDisplay text-[24px] sm:text-[29px] leading-[1.6]">
            &quot;To create gold jewellery that transcends time — pieces that honour the earth, empower communities, and become treasured heirlooms for generations to come.&quot;
          </p>
          <div className="bg-[rgba(209,156,42,0.30)] w-16 h-0.5 mx-auto mt-6" />
        </div>
      </section>

      <section className="bg-[#F3EDE4] px-4 sm:px-8 lg:px-20 py-16 sm:py-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <p className="text-[#D19C2A] font-manrope text-[11px] font-bold tracking-[0.4em] uppercase">WHAT DRIVES US</p>
            <h2 className="mt-3 text-[#161616] font-playfairDisplay text-[30px] sm:text-[36px] lg:text-[40px] leading-tight">Our Core Values</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((item) => (
              <article key={item.title} className="rounded-[10px] border border-[#F3F4F6] bg-[#FFF] p-6 sm:p-7">
                <div className="w-14 h-14 rounded-[10px] bg-[#FAF8F4] flex items-center justify-center mb-5">{renderValueIcon(item.icon)}</div>
                <h3 className="text-[#2D2D42] font-playfairDisplay text-[22px] font-medium leading-[1.2]">{item.title}</h3>
                <p className="mt-3 text-[rgba(45,45,66,0.55)] font-manrope text-sm leading-[24px]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F4] px-4 sm:px-8 lg:px-20 py-16 sm:py-20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-[#D19C2A] font-manrope text-[11px] font-bold tracking-[0.4em] uppercase">SUSTAINABILITY</p>
            <h2 className="mt-3 text-[#161616] font-playfairDisplay text-[30px] sm:text-[35px] leading-tight">Luxury with a Conscience</h2>
            <p className="mt-6 text-[rgba(45,45,66,0.65)] font-manrope text-[15px] leading-[27px]">
              We believe that true luxury carries responsibility. That's why we've embarked on an ambitious journey to make Venaxa Gold a leader in sustainable jewellery practices.
            </p>
            <p className="mt-4 text-[rgba(45,45,66,0.65)] font-manrope text-[15px] leading-[27px]">
              From using recycled gold in our collections to partnering with certified ethical gemstone suppliers, every decision we make considers its impact on the planet and the communities we serve.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-[#8B0304] font-playfairDisplay text-[28px] font-medium">80%</p>
                <p className="mt-1 text-[rgba(45,45,66,0.50)] font-manrope text-[11px] font-semibold tracking-[0.1em]">RECYCLED GOLD</p>
              </div>
              <div>
                <p className="text-[#8B0304] font-playfairDisplay text-[28px] font-medium">100%</p>
                <p className="mt-1 text-[rgba(45,45,66,0.50)] font-manrope text-[11px] font-semibold tracking-[0.1em]">ETHICAL SOURCING</p>
              </div>
              <div>
                <p className="text-[#8B0304] font-playfairDisplay text-[28px] font-medium">2030</p>
                <p className="mt-1 text-[rgba(45,45,66,0.50)] font-manrope text-[11px] font-semibold tracking-[0.1em]">CARBON NEUTRAL</p>
              </div>
            </div>
          </div>
          <div className="rounded-[10px] overflow-hidden shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)]">
            <img src="/Vision/Ring.svg" alt="Sustainability" className="w-full h-[380px] sm:h-[520px] object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#1C1C1C] px-4 sm:px-8 lg:px-20 py-16 sm:py-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <p className="text-[#D19C2A] font-manrope text-[11px] font-bold tracking-[0.4em] uppercase">OUR JOURNEY</p>
            <h2 className="mt-3 text-white font-playfairDisplay text-[30px] sm:text-[40px] leading-tight">The Story Behind the Gold</h2>
            <p className="mt-4 text-[rgba(255,255,255,0.40)] font-manrope text-[15px] leading-[25px] max-w-[520px] mx-auto">
              Every great brand is built on chapters of passion, perseverance, and purpose. Here is ours.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-12">
            {journey.map((item, index) => (
              <article key={item.number} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <div className="inline-flex items-center gap-2">
                    {renderJourneyIcon(item.icon)}
                    <p className="text-[#D19C2A] font-manrope text-[10px] font-bold tracking-[0.35em] uppercase">{item.tag}</p>
                  </div>
                  <h3 className="mt-3 text-white font-playfairDisplay text-[30px] sm:text-[32px] leading-tight">{item.title}</h3>
                  <p className="mt-4 text-[rgba(255,255,255,0.50)] font-manrope text-[15px] leading-[27px]">{item.text}</p>
                  <div className="bg-[rgba(209,156,42,0.30)] w-12 h-px mt-6" />
                </div>

                <div className="relative pb-6">
                  <div className="rounded-[14px] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-[280px] sm:h-[380px] lg:h-[420px] object-cover" />
                  </div>
                  <div
                    className={`absolute bottom-5 inline-flex items-center justify-center rounded-full bg-[#8B0304] w-12 h-12 text-white font-playfairDisplay text-lg ${index % 2 === 0 ? "right-[-10px] md:right-[-20px] mt-4" : "left-[-10px] md:left-[-20px] mt-4"}`}
                  >
                    {item.number}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

     <div className="bg-[#1C1C1C]    ">
 <section
        className="w-full px-4 sm:px-8 pt-16 pb-24 sm:pt-15 sm:pb-28 mb-[-48px] sm:mb-[-20px] text-center"
        style={{
          backgroundImage: "linear-gradient(rgba(28,28,28,0.55), rgba(28,28,28,0.55)), url('/Vision/CTA.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-white font-playfairDisplay pt-[-10px] text-[30px] sm:text-[40px] font-medium leading-tight">Be Part of Our Story</h2>
        <p className="mt-4 text-white font-manrope text-[15px] leading-[25px] max-w-[448px] mx-auto">
          Join us as we shape the future of luxury jewellery with purpose and passion.
        </p>
        <button type="button" className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#D19C2A] px-8 py-[15px] text-white font-manrope text-sm font-semibold leading-[21.6px] hover:bg-[#bc8b23] transition-colors">
          CONNECT WITH US
          <span className="inline-flex items-center justify-center w-4 h-4 overflow-hidden">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.666504 5.33008H9.99416" stroke="white" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.33008 0.66626L9.99391 5.33008L5.33008 9.99391" stroke="white" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </section>
     </div>
    </div>
  );
}