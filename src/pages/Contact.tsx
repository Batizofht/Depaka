type ContactIconType = 'map' | 'phone' | 'email' | 'clock'

const contactDetails: {
  label: string
  value: string
  icon: ContactIconType
}[] = [
  {
    label: 'ADDRESS',
    value:
      'T C NO.9/1472, Temple Road\nSasthamangalam, Thiruvananthapuram\nKerala - 695010',
    icon: 'map',
  },
  {
    label: 'PHONE',
    value: '+91 98765 43210\n+91 22 4567 8900',
    icon: 'phone',
  },
  {
    label: 'EMAIL',
    value: 'hello@venaxagold.com\nsupport@venaxagold.com',
    icon: 'email',
  },
  {
    label: 'HOURS',
    value: 'Mon - Sat: 10:00 AM - 8:00 PM\nSun: 11:00 AM - 6:00 PM',
    icon: 'clock',
  },
]

const getContactIcon = (icon: ContactIconType) => {
  if (icon === 'map') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 16.5C9 16.5 14.25 11.625 14.25 7.5C14.25 4.6005 11.8995 2.25 9 2.25C6.1005 2.25 3.75 4.6005 3.75 7.5C3.75 11.625 9 16.5 9 16.5Z" stroke="#D19C2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" stroke="#D19C2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }

  if (icon === 'phone') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 12.6825V14.9325C16.5 15.3303 16.342 15.7118 16.0607 15.9932C15.7794 16.2745 15.3978 16.4325 15 16.4325C11.3544 16.2104 7.91185 14.6616 5.30021 12.0498C2.68856 9.43815 1.13978 5.9956 0.917725 2.35C0.917725 1.95218 1.07576 1.57064 1.35706 1.28934C1.63837 1.00804 2.0199 0.85 2.41772 0.85H4.66772C5.04622 0.846648 5.41362 0.974002 5.70828 1.2102C6.00294 1.4464 6.20661 1.77715 6.28422 2.1476C6.42884 2.86522 6.65962 3.56276 6.97147 4.225L6.97372 4.2295C7.06041 4.41817 7.09155 4.62763 7.06329 4.83351C7.03503 5.0394 6.94851 5.23295 6.81397 5.39125L5.81272 6.59375C6.81286 8.41812 8.33198 9.93725 10.1563 10.9374L11.3588 9.93625C11.5172 9.80174 11.7108 9.71525 11.9167 9.68704C12.1226 9.65882 12.3321 9.69001 12.5207 9.77675L12.5252 9.779C13.1875 10.0908 13.885 10.3216 14.6027 10.4663C14.9731 10.5439 15.3038 10.7476 15.54 11.0422C15.7762 11.3369 15.9036 11.7043 15.9002 12.0828L16.5 12.6825Z" stroke="#D19C2A" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }

  if (icon === 'email') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.25" y="3.75" width="13.5" height="10.5" rx="1.5" stroke="#D19C2A" strokeWidth="1.5"/>
        <path d="M2.25 5.25L8.16 9.3885C8.41156 9.56458 8.71111 9.65908 9.01818 9.65908C9.32525 9.65908 9.6248 9.56458 9.87635 9.3885L15.75 5.27775" stroke="#D19C2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }

  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="6.75" stroke="#D19C2A" strokeWidth="1.5"/>
      <path d="M9 5.25V9L11.25 10.5" stroke="#D19C2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#FAF8F4]">
      <section
        className="px-4 sm:px-6 lg:px-8 min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,28,28,0.55), rgba(28,28,28,0.55)), url('/Contact/Hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 text-center">
          <p className="text-[#FFAE00] font-manrope text-[11px] font-bold tracking-[0.35em] uppercase">
            Get In Touch
          </p>
          <h1 className="text-white font-playfairDisplay text-4xl sm:text-5xl font-medium leading-tight">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          <div className="flex flex-col gap-8 lg:pr-12 xl:pr-15">
            <div className="space-y-3">
              <h2 className="text-[#161616] font-playfairDisplay text-[30px] sm:text-[36px] leading-tight">
                Visit Our Flagship Store
              </h2>
              <p className="text-[rgba(45,45,66,0.55)] font-manrope text-[15px] leading-[25.84px] max-w-[560px]">
                We&apos;d love to welcome you to our showroom. Book a private
                appointment for a personalized jewellery consultation.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {contactDetails.map((item) => (
                <article
                  key={item.label}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg border border-[rgba(209,156,42,0.15)] bg-[#FAF8F4] flex items-center justify-center">
                    {getContactIcon(item.icon)}
                  </div>
                  <div>
                    <p className="text-[#D19C2A] font-manrope text-[11px] font-semibold tracking-[0.2em] mb-1">
                      {item.label}
                    </p>
                    <p className="text-[rgba(45,45,66,0.70)] font-manrope text-sm leading-[24px] max-w-[540px] whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[10px] border border-[#F3F4F6] bg-[#FFF] shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)] p-6 sm:p-8">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-[#D19C2A] font-manrope text-[11px] font-semibold tracking-[0.15em]">
                    FIRST NAME
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    className="h-11 border-b border-[rgba(209,156,42,0.20)] bg-transparent text-[#2D2D42] font-manrope text-sm outline-none focus:border-[#D19C2A]"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[#D19C2A] font-manrope text-[11px] font-semibold tracking-[0.15em]">
                    LAST NAME
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    className="h-11 border-b border-[rgba(209,156,42,0.20)] bg-transparent text-[#2D2D42] font-manrope text-sm outline-none focus:border-[#D19C2A]"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-[#D19C2A] font-manrope text-[11px] font-semibold tracking-[0.15em]">
                  EMAIL
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  className="h-11 border-b border-[rgba(209,156,42,0.20)] bg-transparent text-[#2D2D42] font-manrope text-sm outline-none focus:border-[#D19C2A]"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[#D19C2A] font-manrope text-[11px] font-semibold tracking-[0.15em]">
                  PHONE
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  className="h-11 border-b border-[rgba(209,156,42,0.20)] bg-transparent text-[#2D2D42] font-manrope text-sm outline-none focus:border-[#D19C2A]"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[#D19C2A] font-manrope text-[11px] font-semibold tracking-[0.15em]">
                  INTEREST
                </span>
                <select
                  name="interest"
                  defaultValue=""
                  className="h-11 border-b border-[rgba(209,156,42,0.20)] bg-transparent text-[#2D2D42] font-manrope text-sm outline-none focus:border-[#D19C2A]"
                >
                  <option value="" disabled>
                    Select your interest
                  </option>
                  <option value="custom">Custom Design</option>
                  <option value="bridal">Bridal Consultation</option>
                  <option value="repair">Repair & Restoration</option>
                  <option value="investment">Gold Investment</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[#D19C2A] font-manrope text-[11px] font-semibold tracking-[0.15em]">
                  MESSAGE
                </span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us how we can help you"
                  className="resize-none border-b border-[rgba(209,156,42,0.20)] bg-transparent text-[#2D2D42] font-manrope text-sm leading-6 outline-none focus:border-[#D19C2A] py-2"
                />
              </label>

              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-[#8B0304] px-6 py-4 text-[#FFF] font-manrope text-sm font-semibold tracking-[0.15em] hover:bg-[#6d0205] transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}