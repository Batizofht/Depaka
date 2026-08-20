import { Hero } from '../components/Hero'
import Testimonials from '../components/Testimonials'

export default function Home() {
  const heroSlides = [
    {
      title: 'Premium Gold & Silver Trading',
      description:
        'At Venaxa Gold, we deliver certified precious metals with uncompromising purity. Build wealth with trust and transparency.',
      background: '/Image(1).png',
    },
    {
      title: 'Your Trusted Precious Metals Partner',
      description:
        'From investment-grade bullion to artisan-crafted pieces, discover authentic precious metals sourced from world-class refineries.',
      background: '/Homepage.png',
    },
    {
      title: 'Legacy Built on Quality',
      description:
        ' Three decades of expertise in precious metals trading. Every transaction verified, every bar certified, every promise kept.',
      background: '/Homepage(1).png',
    },
  ]

  return (
    <div className="bg-[#FFF] min-h-screen">
      <Hero slides={heroSlides} />





        <div className="px-4 sm:px-6 lg:px-[84px] w-full max-w-[1272px] mt-[-60px]  md:mt-[-100px] mx-auto py-12  sm:py-16 lg:py-20">
        <div className="flex flex-col items-center gap-3 mb-8 sm:mb-12">
          <p className="text-[rgba(45,45,66,0.60)] font-manrope text-xs font-bold tracking-[0.2em] uppercase text-center">
            Our Product Range
          </p>
          <h2 className="text-[#161616] font-playfairDisplay text-[28px] sm:text-[36px] lg:text-[42px] leading-[34px] sm:leading-[42px] lg:leading-[49.92px] text-center">
            Premium Precious Metals Solutions
          </h2>
        </div>

        {/* Top Row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
          {/* Gold Bars */}
          <div className="relative rounded-[14px] overflow-hidden h-[250px] sm:h-[280px] lg:h-[310px] group">
            <img
              src="/Pics/Goldbars.svg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Gold Bars"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(34, 28, 30, 0.9)] via-[rgba(107,29,58,0.20)] to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <h3 className="text-[#FFF] font-playfairDisplay text-[20px] sm:text-[23px] font-medium leading-[30px] sm:leading-[34.8px] mb-1.5">
                Gold Bars
              </h3>
              <p className="text-[rgba(255,255,255,0.90)] font-manrope text-sm font-light leading-[20px] sm:leading-[21.82px]">
                Certified investment-grade gold bars with guaranteed purity.
              </p>
            </div>
          </div>

          {/* Gold Coins */}
          <div className="relative rounded-[14px] overflow-hidden h-[250px] sm:h-[280px] lg:h-[310px] group">
            <img
              src="/Pics/Goldcoins.svg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Gold Coins"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(34, 28, 30, 0.9)] via-[rgba(107,29,58,0.20)] to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <h3 className="text-[#FFF] font-playfairDisplay text-[20px] sm:text-[23px] font-medium leading-[30px] sm:leading-[34.8px] mb-1.5">
                Gold Coins
              </h3>
              <p className="text-[rgba(255,255,255,0.90)] font-manrope text-sm font-light leading-[20px] sm:leading-[21.82px]">
                Rare and collectible coins for collectors and investors.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {/* Silver Bars */}
          <div className="relative rounded-[14px] overflow-hidden h-[250px] sm:h-[280px] lg:h-[310px] group">
            <img
              src="/Pics/silverbars.svg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Silver Bars"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(34, 28, 30, 0.9)] via-[rgba(107,29,58,0.20)] to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <h3 className="text-[#FFF] font-playfairDisplay text-[20px] sm:text-[23px] font-medium leading-[30px] sm:leading-[34.8px] mb-1.5">
                Silver Bars
              </h3>
              <p className="text-[rgba(255,255,255,0.90)] font-manrope text-sm font-light leading-[20px] sm:leading-[21.82px]">
                Pure silver bullion for diversified precious metals portfolio.
              </p>
            </div>
          </div>

          {/* Silver Coins */}
          <div className="relative rounded-[14px] overflow-hidden h-[250px] sm:h-[280px] lg:h-[310px] group">
            <img
              src="/Pics/silvercoins.svg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Silver Coins"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(34, 28, 30, 0.9)] via-[rgba(107,29,58,0.20)] to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <h3 className="text-[#FFF] font-playfairDisplay text-[20px] sm:text-[23px] font-medium leading-[30px] sm:leading-[34.8px] mb-1.5">
                Silver Coins
              </h3>
              <p className="text-[rgba(255,255,255,0.90)] font-manrope text-sm font-light leading-[20px] sm:leading-[21.82px]">
                Artisan-minted coins combining heritage with investment value.
              </p>
            </div>
          </div>

          {/* Customized Solutions */}
          <div className="relative rounded-[14px] overflow-hidden h-[250px] sm:h-[280px] lg:h-[310px] group sm:col-span-2 lg:col-span-1">
            <img
              src="/Pics/GoldDesign.svg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Custom Bullion"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(34, 28, 30, 0.9)] via-[rgba(107,29,58,0.20)] to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <h3 className="text-[#FFF] font-playfairDisplay text-[20px] sm:text-[23px] font-medium leading-[30px] sm:leading-[34.8px] mb-1.5">
                Custom Solutions
              </h3>
              <p className="text-[rgba(255,255,255,0.90)] font-manrope text-sm font-light leading-[20px] sm:leading-[21.82px]">
                Tailored investment packages for unique portfolio needs.
              </p>
            </div>
          </div>
        </div>
      </div>
 

      <div className="flex flex-col lg:flex-row pt-0 px-4 sm:px-6 lg:px-[84px] pb-16 sm:pb-20 lg:pb-24 justify-center items-center gap-10 lg:gap-20 bg-[#FFF] w-full">
        {/* Left Side - Images */}
        <div className="w-full lg:w-[596px] h-auto lg:h-[520px] relative">
          <div className="grid grid-cols-2 gap-3 lg:gap-4 w-full">
            {/* Main large image */}
            <div className="col-span-1 row-span-2 rounded-[14px] overflow-hidden h-[300px] sm:h-[400px] lg:h-[520px]">
              <img
                src="/Pics/heritage/GOLDTRUST.svg"
                className="w-full h-full object-cover"
                alt="Heritage main"
              />
            </div>
            {/* Top right small image */}
            <div className="rounded-[14px] overflow-hidden h-[145px] sm:h-[195px] lg:h-[252px]">
              <img
                src="/Pics/heritage/img2.svg"
                className="w-full h-full object-cover"
                alt="Heritage 1"
              />
            </div>
            {/* Bottom right small image */}
            <div className="rounded-[14px] overflow-hidden h-[145px] sm:h-[195px] lg:h-[252px]">
              <img
                src="/Pics/heritage/img1.svg"
                className="w-full h-full object-cover"
                alt="Heritage 2"
              />
            </div>
          </div>
          {/* Years badge */}
          <div className="absolute -left-2 sm:-left-4  bottom-[-20px]  flex flex-col items-start gap-1 rounded-[14px] bg-[#8B0304] shadow-lg p-3 sm:p-5">
            <p className="text-[#FFF] font-playfairDisplay text-[24px] sm:text-[30px] lg:text-[35px] font-medium leading-tight">15+</p>
            <div className="flex flex-col">
              <p className="text-[rgba(255,255,255,0.70)] font-manrope text-[10px] sm:text-xs font-medium tracking-[0.08em]">YEARS OF</p>
              <p className="text-[rgba(255,255,255,0.70)] font-manrope text-[10px] sm:text-xs font-medium tracking-[0.08em]">HERITAGE</p>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[596px] flex flex-col items-start gap-4 sm:gap-6">
          {/* Label */}
          <p className="text-[rgba(45,45,66,0.60)] font-manrope text-xs font-bold tracking-[0.2em] uppercase">
            Our Legacy
          </p>

          {/* Title */}
          <div className="flex flex-col items-start">
            <h2 className="text-[#161616] font-playfairDisplay text-[28px] sm:text-[36px] lg:text-[42px] leading-[34px] sm:leading-[42px] lg:leading-[49.92px]">
              Pure Gold, Pure Trust,
            </h2>
            <h2 className="text-[#161616] font-playfairDisplay text-[28px] sm:text-[36px] lg:text-[42px] leading-[34px] sm:leading-[42px] lg:leading-[49.92px]">
              Pure Excellence
            </h2>
          </div>

          {/* Description */}
          <p className="text-[rgba(45,45,66,0.55)] font-manrope text-sm sm:text-[15px] leading-[24px] sm:leading-[28.42px]">
            From a modest precious metals trading house in Thiruvananthapuram, Venaxa Gold has evolved into a premier dealer trusted by thousands of investors and collectors across India. Our master traders combine traditional expertise with modern market analysis to source the finest certified bullion and investment-grade precious metals from world-class refineries.
          </p>

          {/* Features List */}
          <div className="flex flex-col items-start gap-3 sm:gap-5 mt-2 w-full">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex justify-center items-center rounded-[10px] border border-[rgba(209,156,42,0.15)] bg-[#FAF8F4] w-10 h-10 shrink-0">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.4695 0.637207H11.9662L14.7984 4.88556L7.71785 14.0903L0.637268 4.88556L3.4695 0.637207Z" stroke="#D19C2A" strokeWidth="1.2745" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[rgba(45,45,66,0.70)] font-manrope text-sm sm:text-[15px] leading-[22.08px]">
                BIS Certified, 99.9% Pure Precious Metals
              </p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex justify-center items-center rounded-[10px] border border-[rgba(209,156,42,0.15)] bg-[#FAF8F4] w-10 h-10 shrink-0">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1612 9.20473C14.1612 12.745 11.683 14.5152 8.73745 15.5418C8.58321 15.5941 8.41566 15.5916 8.26305 15.5348C5.31045 14.5152 2.83224 12.745 2.83224 9.20473V4.24832C2.83224 4.06053 2.90684 3.88044 3.03963 3.74765C3.17242 3.61486 3.35251 3.54026 3.5403 3.54026C4.95642 3.54026 6.72656 2.69059 7.95859 1.61435C8.10859 1.48619 8.29941 1.41577 8.49671 1.41577C8.69401 1.41577 8.88483 1.48619 9.03483 1.61435C10.2739 2.69767 12.037 3.54026 13.4531 3.54026C13.6409 3.54026 13.821 3.61486 13.9538 3.74765C14.0866 3.88044 14.1612 4.06053 14.1612 4.24832V9.20473Z" stroke="#D19C2A" strokeWidth="1.2745" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[rgba(45,45,66,0.70)] font-manrope text-sm sm:text-[15px] leading-[22.08px]">
                Secure Storage & Authenticity Guarantee
              </p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex justify-center items-center rounded-[10px] border border-[rgba(209,156,42,0.15)] bg-[#FAF8F4] w-10 h-10 shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 6.66667V5.33333C14 4.97971 13.8595 4.64057 13.6095 4.39052C13.3594 4.14048 13.0203 4 12.6667 4H8L6.66667 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V11.3333" stroke="#D19C2A" strokeWidth="1.2745" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[rgba(45,45,66,0.70)] font-manrope text-sm sm:text-[15px] leading-[22.08px]">
                Competitive Pricing with Transparent Market Rates
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="cursor-pointer flex items-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 rounded-[10px] bg-[#8B0304] text-white font-manrope text-sm font-semibold hover:bg-[#6d0205] transition-colors mt-2">
            <span>Explore Our Story</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33337 7.99992H12.6667M12.6667 7.99992L8.00004 3.33325M12.6667 7.99992L8.00004 12.6666" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-[84px] w-full  min-h-[400px] sm:min-h-[450px] lg:h-[468px] overflow-hidden mx-auto">
        <img
          src="/cta.svg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Investment Opportunities"
        />
        <div className="absolute inset-0 bg-[rgba(28,28,28,0.55)]"></div>
        <div className="relative z-10 w-full h-full">
          <div className="w-full  md:w-[1152px] xl:max-w-[1272px] mx-auto h-full flex items-center py-12 sm:py-16 px-6 md:px-0">
            <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-full sm:max-w-[576px]">
              <p className="text-[#D19C2A] font-manrope text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                Premium Investment Plans
              </p>
              <h2 className="text-[#FFF] font-playfairDisplay text-[32px] sm:text-[40px] lg:text-5xl leading-[38px] sm:leading-[48px] lg:leading-[56px]">
                Invest in Gold, Secure Your Future
              </h2>
              <p className="text-[#FFF] font-manrope text-sm sm:text-[15px] leading-[24px] sm:leading-[26.6px] max-w-full sm:max-w-[407px]">
                Explore our expertly curated investment plans designed for wealth preservation and long-term financial growth.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mt-2">
                <button className="cursor-pointer flex px-5 sm:px-7 py-3 justify-center items-center rounded-lg bg-[#D19C2A] text-[#FFF] font-inter text-sm sm:text-[15px] font-semibold whitespace-nowrap w-full sm:w-auto">
                  Explore Investment Plans
                </button>
                <div className="inline-flex items-center gap-3 whitespace-nowrap w-full sm:w-auto">
                  <button className="cursor-pointer inline-flex w-12 h-12 items-center justify-center rounded-full border border-[rgba(255,255,255,0.30)] text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors shrink-0">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
                    >
                      <path
                        d="M3.49849 1.74927L11.6616 6.99701L3.49849 12.2447V1.74927Z"
                        fill="white"
                        stroke="white"
                        strokeOpacity="0.8"
                        strokeWidth="1.16616"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <span className="text-[rgba(255,255,255,0.80)] font-manrope text-sm font-medium whitespace-nowrap">Watch Overview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex pt-16 sm:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-[84px] pb-16 sm:pb-20 lg:pb-24 flex-col items-center gap-10 sm:gap-12 lg:gap-14 w-full bg-white">
        <div className="flex flex-col items-center gap-3">
          <p className="text-[rgba(45,45,66,0.60)] font-manrope text-xs font-bold tracking-[0.2em] uppercase text-center">
            The Venaxa Advantage
          </p>
          <h2 className="text-[#161616] font-playfairDisplay text-[28px] sm:text-[36px] lg:text-[42px] leading-[34px] sm:leading-[42px] lg:leading-[49.92px] text-center">
            Why Investors Trust Venaxa Gold
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full max-w-[1272px]">
          <div className="rounded-[14px] border border-[#F3F4F6] bg-white p-6 sm:p-8 flex flex-col items-center gap-4 sm:gap-5">
            <div className="flex justify-center items-center rounded-[14px] bg-[rgba(209,156,42,0.05)] w-14 h-14">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#D19C2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <h3 className="text-[#2D2D42] font-playfairDisplay text-lg font-medium text-center">
                Certified Purity
              </h3>
              <p className="text-[rgba(45,45,66,0.50)] font-manrope text-sm leading-6 text-center">
                Every bar verified with international certification guaranteeing 99.9% precious metal purity.
              </p>
            </div>
          </div>
          <div className="rounded-[14px] border border-[#F3F4F6] bg-white p-6 sm:p-8 flex flex-col items-center gap-4 sm:gap-5">
            <div className="flex justify-center items-center rounded-[14px] bg-[#FDFAF4] w-14 h-14">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#D19C2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <h3 className="text-[#2D2D42] font-playfairDisplay text-lg font-medium text-center">
                Expert Trading
              </h3>
              <p className="text-[rgba(45,45,66,0.50)] font-manrope text-sm leading-6 text-center">
                Three decades of market expertise ensures competitive pricing and strategic investment guidance.
              </p>
            </div>
          </div>
          <div className="rounded-[14px] border border-[#F3F4F6] bg-white p-6 sm:p-8 flex flex-col items-center gap-4 sm:gap-5">
            <div className="flex justify-center items-center rounded-[14px] bg-[rgba(209,156,42,0.05)] w-14 h-14">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#D19C2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <h3 className="text-[#2D2D42] font-playfairDisplay text-lg font-medium text-center">
                Secure Transactions
              </h3>
              <p className="text-[rgba(45,45,66,0.50)] font-manrope text-sm leading-6 text-center">
                Complete transparency with secure documentation and authenticated delivery on all orders.
              </p>
            </div>
          </div>
          <div className="rounded-[14px] border border-[#F3F4F6] bg-white p-6 sm:p-8 flex flex-col items-center gap-4 sm:gap-5">
            <div className="flex justify-center items-center rounded-[14px] bg-[#FDFAF4] w-14 h-14">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="#D19C2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <h3 className="text-[#2D2D42] font-playfairDisplay text-lg font-medium text-center">
                Fast Logistics
              </h3>
              <p className="text-[rgba(45,45,66,0.50)] font-manrope text-sm leading-6 text-center">
                Insured delivery with real-time tracking ensuring safe, timely arrival of your precious metals.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials - No horizontal padding, just vertical */}
      <div className="flex pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 flex-col items-center gap-10 sm:gap-12 lg:gap-14 w-full bg-white">
        <Testimonials />
      </div>

      {/* Stay Connected - Proper width containment */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16 w-full">
        <div
          className="rounded-2xl max-w-[1272px] mx-auto overflow-hidden"
          style={{
            backgroundImage: "url('/HeroBack1.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col items-center gap-4 sm:gap-6 py-10 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-20">
            <p className="text-[#D19C2A] font-manrope text-xs font-bold tracking-[0.25em] uppercase text-center">Stay Connected</p>
            <h2 className="text-white font-playfairDisplay text-[28px] sm:text-[36px] lg:text-[42px] leading-[34px] sm:leading-[42px] lg:leading-[62.4px] text-center">Join the Venaxa Family</h2>
            <p className="text-[rgba(255,255,255,0.50)] font-manrope text-sm sm:text-[15px] leading-[24px] sm:leading-[25.84px] text-center max-w-[512px]">
              Be the first to know about new collections, exclusive offers, and styling tips from our design team.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 w-full max-w-[448px]">
              <input type="email" placeholder="Your email address" className="flex-1 py-3 sm:py-3.5 px-4 sm:px-5 rounded-[10px] border border-[rgba(255,255,255,0.20)] bg-[rgba(223,223,223,0.30)] text-white font-manrope text-sm placeholder:text-[rgba(255,255,255,0.30)] outline-none focus:border-[#D19C2A] transition-colors" />
              <button className="cursor-pointer flex justify-center items-center rounded-[10px] bg-[#D19C2A] py-3 sm:py-3.5 px-6 sm:px-8 text-white font-manrope text-sm font-semibold hover:bg-[#b8860b] transition-colors whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}