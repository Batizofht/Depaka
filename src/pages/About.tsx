export default function About() {
  return (
    <div className="bg-[#FFF] min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[500px] overflow-hidden">
        <img
          src="/About/Hero.svg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="About Hero"
        />
        <div className="absolute inset-0 bg-[rgba(28,28,28,0.40)]"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 text-center">
          <p className="text-[#D19C2A] font-manrope text-xs font-bold tracking-[0.25em] uppercase mb-4">
            About Us
          </p>
        </div>
      </div>

      {/* Our Heritage Section - Text Left, Image Right */}
      <section className="bg-[#FAF8F4] w-full">
        <div className="w-full max-w-[1272px] mx-auto px-6 md:px-0 flex flex-col lg:flex-row pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 lg:pb-28 justify-center items-stretch gap-10 lg:gap-16">
        {/* Left - Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 sm:gap-5 order-2 lg:order-1 justify-center">
          <p className="text-[#D19C2A] font-manrope text-[11px] font-bold tracking-[0.4em] uppercase">
            OUR HERITAGE
          </p>
          <h2 className="text-[#161616] font-playfairDisplay text-[28px] sm:text-[32px] lg:text-[35px] leading-[34px] sm:leading-[40px] lg:leading-[52.8px]">
            A Legacy of Gold, A Promise of Excellence
          </h2>
          <div className="flex flex-col items-start gap-4">
            <p className="text-[rgba(45,45,66,0.65)] font-manrope text-sm lg:text-[15px] leading-[24px] lg:leading-[27.36px]">
              Founded in 1987 by the Venaxa family, our journey began with a simple belief: that gold jewellery should be more than an accessory — it should be an heirloom that carries stories across generations.
            </p>
            <p className="text-[rgba(45,45,66,0.65)] font-manrope text-sm lg:text-[15px] leading-[24px] lg:leading-[27.36px]">
              From a small workshop in Thiruvananthapuram's historic jewellery quarter, we have grown into one of Kerala's most trusted names in fine gold jewellery, now with showrooms across Kerala and beyond.
            </p>
            <p className="text-[rgba(45,45,66,0.65)] font-manrope text-sm lg:text-[15px] leading-[24px] lg:leading-[27.36px]">
              Our master artisans blend centuries-old techniques with contemporary design sensibilities to create pieces that are both timeless and modern. Every creation that leaves our atelier undergoes rigorous quality checks, ensuring that the gold purity, gemstone authenticity, and craftsmanship meet the highest standards.
            </p>
          </div>
        </div>

        {/* Right - Image with decorative square */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
          <div className="rounded-[20px] overflow-hidden h-[560px] sm:h-[640px] lg:h-[700px] [clip-path:inset(4px_0_0_0_round_20px)]">
            <img
              src="/About/Secondsection.svg"
              className="block w-full h-full object-cover"
              alt="Our Heritage"
            />
          </div>
          {/* Gold decorative square */}
          <div className="hidden lg:block border-2 absolute left-[-10px]  bottom-[-20px] rounded-[10px] border-2 border-[rgba(184,134,11,0.15)] w-42 h-42 xl:w-48 xl:h-48"></div>
        </div>
        </div>
      </section>

      {/* Stats Section - 35+, 10K+, 50+, 25K+ */}
      <section className="bg-[#F3EDE4] w-full">
        <div className="w-full max-w-[1272px] mx-auto px-6 md:px-0 flex flex-wrap sm:flex-nowrap py-16 sm:py-20 justify-between items-center gap-4 sm:gap-12 lg:gap-12">
        <div className="flex flex-col items-center gap-2 w-[45%] sm:w-auto">
          <p className="text-[#8B0304] font-playfairDisplay text-[36px] sm:text-[44px] lg:text-5xl font-medium leading-[48px] sm:leading-[56px] lg:leading-[72px] text-center">
            35+
          </p>
          <p className="text-[rgba(45,45,66,0.50)] font-manrope text-[10px] sm:text-xs font-semibold text-center tracking-[0.15em] uppercase">
            Years of Heritage
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 w-[45%] sm:w-auto">
          <p className="text-[#8B0304] font-playfairDisplay text-[36px] sm:text-[44px] lg:text-5xl font-medium leading-[48px] sm:leading-[56px] lg:leading-[72px] text-center">
            10K+
          </p>
          <p className="text-[rgba(45,45,66,0.50)] font-manrope text-[10px] sm:text-xs font-semibold text-center tracking-[0.15em] uppercase">
            Designs Created
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 w-[45%] sm:w-auto">
          <p className="text-[#8B0304] font-playfairDisplay text-[36px] sm:text-[44px] lg:text-5xl font-medium leading-[48px] sm:leading-[56px] lg:leading-[72px] text-center">
            50+
          </p>
          <p className="text-[rgba(45,45,66,0.50)] font-manrope text-[10px] sm:text-xs font-semibold text-center tracking-[0.15em] uppercase">
            Master Artisans
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 w-[45%] sm:w-auto">
          <p className="text-[#8B0304] font-playfairDisplay text-[36px] sm:text-[44px] lg:text-5xl font-medium leading-[48px] sm:leading-[56px] lg:leading-[72px] text-center">
            25K+
          </p>
          <p className="text-[rgba(45,45,66,0.50)] font-manrope text-[10px] sm:text-xs font-semibold text-center tracking-[0.15em] uppercase">
            Happy Clients
          </p>
        </div>
        </div>
      </section>

      {/* Gold That Tells a Story - Image Left, Text Right */}
      <section className="bg-[#FFF] w-full">
        <div className="w-full max-w-[1272px] mx-auto px-6 md:px-0 flex flex-col lg:flex-row pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 lg:pb-28 justify-center items-stretch gap-10 lg:gap-16">
        {/* Left - Image */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-[14px] overflow-hidden">
            <img
              src="/About/Thirdsection.svg"
              className="w-full h-[300px] sm:h-[400px] lg:h-[420px] object-cover"
              alt="Gold That Tells a Story"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 sm:gap-5 justify-center">
          <p className="text-[#D19C2A] font-manrope text-[11px] font-bold tracking-[0.4em] uppercase">
            OUR PHILOSOPHY
          </p>
          <h2 className="text-[#161616] font-playfairDisplay text-[28px] sm:text-[32px] lg:text-[35px] leading-[34px] sm:leading-[40px] lg:leading-[52.8px]">
            Gold That Tells a Story
          </h2>
          <div className="flex flex-col items-start gap-4">
            <p className="text-[rgba(45,45,66,0.65)] font-manrope text-sm lg:text-[15px] leading-[24px] lg:leading-[27.36px]">
              We believe that jewellery is deeply personal. It marks life's most precious moments — engagements, weddings, milestones, and quiet celebrations of self. That's why every piece we create is designed not just to adorn, but to resonate.
            </p>
            <p className="text-[rgba(45,45,66,0.65)] font-manrope text-sm lg:text-[15px] leading-[24px] lg:leading-[27.36px]">
              Our design philosophy draws from India's incredible diversity of artistic traditions while embracing global trends, resulting in pieces that feel both rooted and contemporary.
            </p>
          </div>
          <div className="flex items-center gap-6 mt-2">
            <a href="/what-we-do" className="flex items-center gap-2 text-[#8B0304] font-manrope text-sm font-semibold tracking-[0.05em] hover:underline">
              WHAT WE DO
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="#8B0304" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="/vision" className="flex items-center gap-2 text-[#8B0304] font-manrope text-sm font-semibold tracking-[0.05em] hover:underline">
              OUR VISION
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="#8B0304" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}