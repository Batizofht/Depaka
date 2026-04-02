import { useState } from 'react'

interface Slide {
  title: string
  description: string
  background: string
}

interface HeroProps {
  slides: Slide[]
}

export function Hero({ slides }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0)

  const goPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="w-full px-4 mt-3 md:mt-0 sm:px-6 lg:px-14 pt-20 sm:pt-22 lg:pt-25 pb-12 sm:pb-16 lg:pb-20">
      <div className="relative rounded-[14px] w-full min-h-[400px] sm:min-h-[480px] lg:min-h-[540px] overflow-hidden">
        {/* Background Image */}
        <img
          src="/HeroBack.svg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero background"
        />

        {/* Hero Content Layout */}
        <div className="relative z-10 flex  flex-col px-4 sm:px-8 lg:px-14 py-10 sm:py-12 lg:py-16 min-h-[400px] sm:min-h-[480px] lg:min-h-[540px]">
          {/* Top Row - Content and Arrows */}
          <div className="flex flex-col lg:flex-row justify-between items-start flex-1 gap-6">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 max-w-full lg:max-w-xl">
              <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-5">
                <h1 className="text-[#FFF] font-playfairDisplay text-[32px] sm:text-[42px] lg:text-[58px] font-medium leading-[38px] sm:leading-[48px] lg:leading-[64px]">
                  {slides[activeSlide].title}
                </h1>
                <p className="text-[rgba(255,255,255,0.70)] font-manrope text-sm sm:text-base leading-[24px] sm:leading-[28px] max-w-full sm:max-w-md">
                  {slides[activeSlide].description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-3 w-full sm:w-auto">
                <button className="cursor-pointer flex px-5 sm:px-7 py-2.5 sm:py-3 justify-center items-center rounded-lg bg-[#D19C2A] text-[#FFF] font-inter text-sm sm:text-[15px] font-semibold whitespace-nowrap w-full sm:w-auto">
                  Explore Collections
                </button>
                <button className="cursor-pointer flex px-5 sm:px-7 py-2.5 sm:py-3 justify-center items-center rounded-lg bg-[rgba(255,255,255,0.95)] text-[#1C1C1C] font-inter text-sm sm:text-[15px] font-medium whitespace-nowrap w-full sm:w-auto">
                  Book a Private Viewing
                </button>
              </div>
            </div>

            {/* Right Side - Navigation Arrows */}
            <div className="flex items-start gap-2.5 self-end mt-4 lg:mt-0">
              <button
                onClick={goPrevSlide}
                aria-label="Previous slide"
                className="flex justify-center items-center rounded border border-[rgba(0,0,0,0.05)] bg-[rgba(255,255,255,0.90)] w-8 h-8 sm:w-9 sm:h-9 cursor-pointer hover:bg-white transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.37317 11.2478L5.6239 7.49854L9.37317 3.74927" stroke="#2D2D42" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={goNextSlide}
                aria-label="Next slide"
                className="flex justify-center items-center rounded border border-[rgba(0,0,0,0.05)] bg-[rgba(255,255,255,0.90)] w-8 h-8 sm:w-9 sm:h-9 cursor-pointer hover:bg-white transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.6239 11.2478L9.37317 7.49854L5.6239 3.74927" stroke="#2D2D42" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Slide Indicators - Fixed at bottom */}
          <div className="flex items-start gap-2 mt-6 sm:mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`rounded-full h-[5px] transition-all ${
                  activeSlide === index
                    ? 'bg-[#FFF] w-8'
                    : 'bg-[rgba(255,255,255,0.30)] w-4'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Model Image - Hidden on mobile, shown on larger screens */}
        <img
          src="/Pics/Hero girl.svg"
          className="hidden lg:block absolute right-[5%] xl:right-[10%] bottom-0 w-[350px] xl:w-[500px] h-auto max-h-[600px] object-contain pointer-events-none"
          alt="Hero Girl"
        />
      </div>

      {/* Stats Card - Overlaps hero using negative margin */}
      <div className="relative  z-20 -mt-6 sm:-mt-8 lg:-mt-10 flex flex-wrap sm:flex-nowrap justify-center items-start rounded-[14px] border border-[rgba(243,244,246,0.80)] bg-[#FFF] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.04),0_8px_10px_-6px_rgba(0,0,0,0.04)] max-w-[1272px] mx-5 lg:mx-5 2xl:mx-auto">
        <div className="flex flex-col items-center gap-1 py-5 sm:py-7 px-2 sm:px-4 border-r border-[#F3F4F6] w-1/2 sm:w-1/4">
          <p className="text-[#8B0304] font-playfairDisplay text-[24px] sm:text-[32px] font-medium">15+</p>
          <p className="text-[rgba(45,45,66,0.40)] font-manrope text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-center">YEARS OF HERITAGE</p>
        </div>
        <div className="flex flex-col items-center gap-1 py-5 sm:py-7 px-2 sm:px-4 border-r-0 sm:border-r  border-[#F3F4F6] w-1/2 sm:w-1/4">
          <p className="text-[#8B0304] font-playfairDisplay text-[24px] sm:text-[32px] font-medium">10K+</p>
          <p className="text-[rgba(45,45,66,0.40)] font-manrope text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-center">UNIQUE DESIGNS</p>
        </div>
        <div className="flex flex-col items-center gap-1 py-5 sm:py-7 px-2 sm:px-4 border-r border-[#F3F4F6] w-1/2 sm:w-1/4 border-t sm:border-t-0">
          <p className="text-[#8B0304] font-playfairDisplay text-[24px] sm:text-[32px] font-medium">50+</p>
          <p className="text-[rgba(45,45,66,0.40)] font-manrope text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-center">MASTER ARTISANS</p>
        </div>
        <div className="flex flex-col items-center gap-1 py-5 sm:py-7 px-2 sm:px-4 w-1/2 sm:w-1/4 border-t border-[#F3F4F6] sm:border-t-0">
          <p className="text-[#8B0304] font-playfairDisplay text-[24px] sm:text-[32px] font-medium">25K+</p>
          <p className="text-[rgba(45,45,66,0.40)] font-manrope text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-center">HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}
