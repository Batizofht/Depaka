import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Bride, Mumbai",
    quote: "The bridal set from Venaxa Gold made my wedding day absolutely magical. The craftsmanship is beyond anything I've ever seen.",
    image: "/Tests/Mainpic_one.svg",
    avatar: "/Tests/Mainpic_one.svg"
  },
  {
    id: 2,
    name: "Anita Desai",
    role: "Collector, Delhi",
    quote: "Every piece I own from Venaxa tells a story. Their attention to detail and heritage designs are unmatched in the industry.",
    image: "/Tests/Mainpic_one.svg",
    avatar: "/Tests/Mainpic_one.svg"
  },
  {
    id: 3,
    name: "Meera Patel",
    role: "Fashion Designer",
    quote: "As a designer myself, I appreciate the artistry. Venaxa pieces are not just jewelry, they are wearable art.",
    image: "/Tests/Mainpic_one.svg",
    avatar: "/Tests/Mainpic_one.svg"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-14 w-full max-w-[1272px] px-4 sm:px-6 lg:px-0">
      {/* Main Content - Image Left, Content Right */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 xl:gap-20 w-full">
        {/* Left Side - Image */}
        <div className="relative w-full lg:w-[50%] xl:w-[596px] h-[350px] sm:h-[450px] lg:h-[600px] shrink-0">
          <div className="w-full h-full rounded-[14px] overflow-hidden">
            <img
              src={current.image}
              className="w-full h-full object-cover"
              alt={current.name}
            />
          </div>
          {/* Quote Icon Badge */}
          <div className="absolute -top-3 sm:-top-4 -left-2 sm:-left-4 flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 rounded-[10px] sm:rounded-[14px] bg-[#D19C2A] shadow-lg">
            <svg
              width="16"
              height="16"
              viewBox="0 0 9 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-5 sm:h-5"
            >
              <path
                d="M2.99941 0.999756C2.46908 0.999756 1.96047 1.21043 1.58547 1.58543C1.21047 1.96043 0.999802 2.46904 0.999802 2.99937V8.9982C0.999802 9.52853 1.21047 10.0371 1.58547 10.4121C1.96047 10.7871 2.46908 10.9978 2.99941 10.9978C3.26458 10.9978 3.51888 11.1032 3.70638 11.2907C3.89388 11.4782 3.99922 11.7325 3.99922 11.9976V12.9974C3.99922 13.5278 3.78855 14.0364 3.41355 14.4114C3.03855 14.7864 2.52994 14.997 1.99961 14.997C1.73444 14.997 1.48014 15.1024 1.29264 15.2899C1.10514 15.4774 0.999802 15.7317 0.999802 15.9968V17.9965C0.999802 18.2616 1.10514 18.5159 1.29264 18.7034C1.48014 18.8909 1.73444 18.9963 1.99961 18.9963C3.5906 18.9963 5.11643 18.3642 6.24143 17.2392C7.36643 16.1142 7.99844 14.5884 7.99844 12.9974V2.99937C7.99844 2.46904 7.78777 1.96043 7.41277 1.58543C7.03777 1.21043 6.52916 0.999756 5.99883 0.999756H2.99941Z"
                fill="white"
                stroke="white"
                strokeWidth="1.99961"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Right Side - Content with Header */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-[50%] xl:w-[596px]">
          {/* Header */}
          <div className="flex flex-col items-start gap-2 sm:gap-3">
            <p className="text-[rgba(45,45,66,0.60)] font-manrope text-xs font-bold tracking-[0.2em] uppercase">
              Testimonials
            </p>
            <h2 className="text-[#161616] font-playfairDisplay text-[28px] sm:text-[36px] lg:text-[42px] leading-[34px] sm:leading-[42px] lg:leading-[49.92px]">
              What Our Clients Say
            </h2>
          </div>

          {/* Stars */}
          <div className="flex items-start gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.67867 1.529C7.70787 1.47001 7.75297 1.42035 7.80889 1.38563C7.86481 1.35092 7.92932 1.33252 7.99514 1.33252C8.06096 1.33252 8.12547 1.35092 8.1814 1.38563C8.23732 1.42035 8.28242 1.47001 8.31162 1.529L9.85068 4.64643C9.95207 4.85162 10.1017 5.02914 10.2868 5.16375C10.4719 5.29837 10.6869 5.38606 10.9134 5.4193L14.3553 5.92299C14.4205 5.93244 14.4818 5.95995 14.5322 6.00241C14.5826 6.04487 14.6201 6.10058 14.6404 6.16325C14.6608 6.22592 14.6633 6.29304 14.6475 6.35702C14.6317 6.421 14.5983 6.47929 14.5512 6.52529L12.062 8.94915C11.8978 9.10912 11.775 9.30659 11.7041 9.52455C11.6332 9.74252 11.6163 9.97445 11.6549 10.2004L12.2426 13.625C12.2541 13.6902 12.247 13.7573 12.2222 13.8186C12.1974 13.88 12.1559 13.9332 12.1023 13.9721C12.0488 14.011 11.9854 14.0341 11.9193 14.0387C11.8533 14.0432 11.7873 14.0292 11.7289 13.9981L8.65208 12.3804C8.44935 12.2739 8.22379 12.2183 7.99481 12.2183C7.76583 12.2183 7.54028 12.2739 7.33754 12.3804L4.26141 13.9981C4.203 14.029 4.13709 14.0429 4.07116 14.0382C4.00524 14.0335 3.94195 14.0104 3.8885 13.9716C3.83505 13.9327 3.79359 13.8796 3.76882 13.8183C3.74405 13.7571 3.73697 13.6901 3.74839 13.625L4.33537 10.2011C4.37414 9.97501 4.35734 9.74293 4.28642 9.52483C4.2155 9.30673 4.09259 9.10916 3.92828 8.94915L1.43913 6.52596C1.39156 6.48001 1.35784 6.42162 1.34183 6.35744C1.32582 6.29327 1.32816 6.22588 1.34857 6.16297C1.36899 6.10006 1.40666 6.04414 1.4573 6.0016C1.50795 5.95905 1.56952 5.93158 1.63501 5.92232L5.07625 5.4193C5.30295 5.38632 5.51824 5.29874 5.70359 5.16411C5.88894 5.02948 6.0388 4.85182 6.14027 4.64643L7.67867 1.529Z"
                  fill="#D19C2A"
                  stroke="#D19C2A"
                  strokeWidth="1.33252"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <p className="text-[rgba(45,45,66,0.70)] font-playfairDisplay text-lg sm:text-[21px] leading-[28px] sm:leading-[34.32px]">
            &quot;{current.quote}&quot;
          </p>

          {/* Author Info */}
          <div className="flex flex-col items-start gap-0.5">
            <p className="text-[#161616] font-manrope text-base font-bold leading-6">
              {current.name}
            </p>
            <p className="text-[rgba(45,45,66,0.45)] font-manrope text-sm leading-[20.4px]">
              {current.role}
            </p>
          </div>

          {/* Avatar Navigation */}
          <div className="flex items-center gap-3 sm:gap-4 pt-6 sm:pt-8">
            {testimonials.map((t, index) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full overflow-hidden border-[1.91px] transition-all ${
                  index === currentIndex
                    ? 'border-[#8B0304] w-10 h-10 sm:w-[53px] sm:h-[53px]'
                    : 'border-transparent opacity-50 w-9 h-9 sm:w-12 sm:h-12'
                }`}
              >
                <img
                  src={t.avatar}
                  className="w-full h-full object-cover"
                  alt={t.name}
                />
              </button>
            ))}

            {/* Navigation Arrows */}
            <div className="flex items-start gap-2 ml-auto">
              <button
                onClick={prevSlide}
                className="flex justify-center items-center rounded-full border border-[#E5E7EB] w-9 h-9 sm:w-10 sm:h-10 hover:bg-gray-50 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99391 11.9927L5.99634 7.99513L9.99391 3.99756"
                    stroke="#2A2118"
                    strokeWidth="1.33252"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="flex justify-center items-center rounded-full border border-[#E5E7EB] w-9 h-9 sm:w-10 sm:h-10 hover:bg-gray-50 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.99634 11.9927L9.99391 7.99513L5.99634 3.99756"
                    stroke="#2A2118"
                    strokeWidth="1.33252"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
