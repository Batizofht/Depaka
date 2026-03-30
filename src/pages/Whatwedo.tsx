export default function WhatWeDo() {
  type ServiceIcon =
    | "bespoke"
    | "bridal"
    | "gemstone"
    | "heritage"
    | "restoration"
    | "investment";

  const renderServiceIcon = (icon: ServiceIcon) => {
    switch (icon) {
      case "bespoke":
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 20L20 4M7 4H20V17" stroke="#D19C2A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "bridal":
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L14.5 9L20 9.8L16 13.6L17 19L12 16.3L7 19L8 13.6L4 9.8L9.5 9L12 4Z" stroke="#D19C2A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "gemstone":
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 10L8 5H16L20 10L12 20L4 10Z" stroke="#D19C2A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 5L12 10L16 5" stroke="#D19C2A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "heritage":
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 18L19 6M9 6H19V16" stroke="#D19C2A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.5 21H20.5" stroke="#D19C2A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "restoration":
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7H19M7 7V5M17 7V5M6 7L8 19H16L18 7" stroke="#D19C2A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "investment":
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20M7.5 8C7.5 6.9 8.6 6 10 6H14C15.4 6 16.5 6.9 16.5 8C16.5 9.1 15.4 10 14 10H10C8.6 10 7.5 10.9 7.5 12C7.5 13.1 8.6 14 10 14H14C15.4 14 16.5 14.9 16.5 16C16.5 17.1 15.4 18 14 18H10C8.6 18 7.5 17.1 7.5 16" stroke="#D19C2A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  const services = [
    {
      icon: "bespoke" as ServiceIcon,
      title: "Bespoke Design",
      description:
        "Work directly with our designers to create a one-of-a-kind piece that captures your personal story. From initial sketch to final polish, every detail is tailored to you.",
    },
    {
      icon: "bridal" as ServiceIcon,
      title: "Bridal & Occasion",
      description:
        "Complete bridal jewellery sets and occasion pieces designed to make your most memorable moments truly shine. Consultations available by appointment.",
    },
    {
      icon: "gemstone" as ServiceIcon,
      title: "Gemstone Sourcing",
      description:
        "We source the finest ethically-procured gemstones from trusted suppliers worldwide, ensuring every stone meets our strict quality and authenticity standards.",
    },
    {
      icon: "heritage" as ServiceIcon,
      title: "Heritage Craftsmanship",
      description:
        "Our artisans practice traditional techniques including Kundan, Meenakari, and filigree work, preserving India's rich jewellery-making heritage.",
    },
    {
      icon: "restoration" as ServiceIcon,
      title: "Restoration & Repair",
      description:
        "Breathe new life into cherished heirloom pieces. Our restoration experts carefully repair, refinish, and restore vintage jewellery to its original glory.",
    },
    {
      icon: "investment" as ServiceIcon,
      title: "Gold Investment",
      description:
        "Expert guidance on gold as an investment. We offer certified gold coins, bars, and collectable pieces that hold enduring value.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      text: "We listen to your vision and understand your style, occasion, and budget.",
      image: "/Whatwedo/Image1.svg",
      reverse: false,
    },
    {
      number: "02",
      title: "Design",
      text: "Our designers create detailed sketches and 3D renders for your approval.",
      image: "/Whatwedo/Image2.svg",
      reverse: true,
    },
    {
      number: "03",
      title: "Crafting",
      text: "Master artisans bring the design to life using time-honoured techniques.",
      image: "/Whatwedo/Image4.svg",
      reverse: false,
    },
    {
      number: "04",
      title: "Finishing",
      text: "Each piece undergoes rigorous quality checks and hand-polishing.",
      image: "/Whatwedo/Image3.svg",
      reverse: true,
    },
  ];

  return (
    <div className="bg-[#FFF] min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[320px] sm:h-[440px] lg:h-[560px] overflow-hidden">
        <img
          src="/Whatwedo/Hero.svg"
          alt="What We Do Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(28,28,28,0.40)]" />
        <div className="relative z-10 h-full flex items-center justify-center px-4 text-center">
          <div>
            <p className="text-[#D19C2A] font-manrope text-[11px] sm:text-xs font-bold tracking-[0.4em] uppercase">
              OUR SERVICES
            </p>
            <h1 className="mt-3 text-white font-playfairDisplay text-[34px] sm:text-[48px] lg:text-[56px] leading-tight">
              What We Do
            </h1>
            <p className="mt-3 text-[rgba(255,255,255,0.88)] font-manrope text-sm sm:text-[15px] leading-6 max-w-[540px] mx-auto">
              Crafting timeless jewellery with precision, heritage, and modern design.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#FAF8F4] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <p className="text-[#D19C2A] font-manrope text-[11px] font-bold tracking-[0.4em] uppercase">
              OUR SERVICES
            </p>
            <h2 className="mt-3 text-[#161616] font-playfairDisplay text-[30px] sm:text-[36px] lg:text-[40px] leading-tight">
              Expertise at Every Step
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[10px] border border-[#F3F4F6] bg-[#FFF] p-6 sm:p-7"
              >
                <div className="w-14 h-14 rounded-[10px] bg-[#FAF8F4] flex items-center justify-center mb-5">
                  {renderServiceIcon(service.icon)}
                </div>
                <h3 className="text-[#2D2D42] font-playfairDisplay text-[22px] font-medium leading-[1.2]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[rgba(45,45,66,0.55)] font-manrope text-sm leading-[24px]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F3EDE4] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <p className="text-[#D19C2A] font-manrope text-[11px] font-bold tracking-[0.4em] uppercase">
              FROM START TO FINISH
            </p>
            <h2 className="mt-3 text-[#161616] font-playfairDisplay text-[30px] sm:text-[36px] lg:text-[40px] leading-tight">
              Our Process
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-10 sm:gap-12">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className={`flex flex-col ${step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-6 lg:gap-12`}
              >
                <div className="w-full lg:w-1/2 rounded-[25px] overflow-hidden bg-transparent">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="block w-full h-[260px] sm:h-[320px] lg:h-[365px] object-cover [clip-path:inset(4px_round_25px)]"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <p className="text-[rgba(209,156,42,0.30)] font-playfairDisplay text-[48px] sm:text-[56px] font-medium leading-none">
                    {step.number}
                  </p>
                  <h3 className="mt-3 text-[#161616] font-playfairDisplay text-[26px] sm:text-[30px] font-medium leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[rgba(45,45,66,0.55)] font-manrope text-sm sm:text-[15px] leading-[27px] max-w-[520px]">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ready To Begin CTA */}
      <section className="bg-[#FAF8F4] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-28">
        <div className="max-w-[1408px] mx-auto flex flex-col items-center text-center">
          <p className="text-[#D19C2A] font-manrope text-[11px] font-bold leading-[16.8px] tracking-[0.4em] uppercase">
            READY TO BEGIN?
          </p>
          <h2 className="mt-3 text-[#161616] font-playfairDisplay text-[30px] sm:text-[36px] lg:text-[40px] leading-tight max-w-[588px]">
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="mt-4 text-[rgba(45,45,66,0.55)] font-manrope text-sm sm:text-[15px] leading-[25.84px] max-w-[448px]">
            Book a consultation with our design team and bring your vision to life.
          </p>
          <button
            type="button"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#8B0304] px-8 py-[15px] min-w-[250px] text-white font-manrope text-sm font-semibold leading-[21.6px] hover:bg-[#760203] transition-colors"
          >
            BOOK A CONSULTATION
            <span className="inline-flex items-center justify-center w-4 h-4 overflow-hidden">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.666504 5.33008H9.99416" stroke="white" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.33008 0.66626L9.99391 5.33008L5.33008 9.99391" stroke="white" strokeWidth="1.33252" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}