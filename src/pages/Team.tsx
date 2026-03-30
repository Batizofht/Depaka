        const leadership = [
  {
    name: 'Rajan Venaxa',
    role: 'FOUNDER & CHAIRMAN',
    description:
      'With over 35 years in the jewellery industry, Rajan founded Venaxa Gold with a vision to blend traditional craftsmanship with modern luxury.',
    image: '/Team/team1.svg',
  },
  {
    name: 'Ananya Venaxa',
    role: 'CREATIVE DIRECTOR',
    description:
      "A graduate of Central Saint Martins, Ananya brings a global design perspective while staying rooted in India's rich artistic heritage.",
    image: '/Team/team2.svg',
  },
  {
    name: 'Vikram Mehta',
    role: 'HEAD OF OPERATIONS',
    description:
      'Vikram ensures every piece that leaves our atelier meets the highest standards of quality, overseeing production across all our workshops.',
    image: '/Team/team3.png',
  },
  {
    name: 'Priya Kapoor',
    role: 'HEAD OF SUSTAINABILITY',
    description:
      "Leading our sustainability initiatives, Priya ensures Venaxa Gold's commitment to ethical sourcing and environmental responsibility.",
    image: '/Team/team4.png',
  },
]

const departments = [
  {
    count: '12',
    title: 'Design Studio',
    description: 'Creative minds sketching the future of gold jewellery.',
  },
  {
    count: '35',
    title: 'Master Artisans',
    description: 'Skilled craftsmen with decades of traditional expertise.',
  },
  {
    count: '8',
    title: 'Gemologists',
    description: 'Certified experts ensuring every stone is flawless.',
  },
  {
    count: '15',
    title: 'Client Relations',
    description: 'Dedicated team providing personalised luxury service.',
  },
]

export default function Team() {
  return (
    <div className="bg-[#FFF] min-h-screen">
      <section
        className="w-full min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,28,28,0.55), rgba(28,28,28,0.55)), url('/Team/Hero.png')",
        }}
      >
        <div className="max-w-[1272px] mx-auto w-full min-h-[360px] sm:min-h-[400px] lg:min-h-[420px] px-4 sm:px-6 lg:px-14 flex flex-col items-center justify-center text-center gap-4 sm:gap-5">
          <p className="text-[#FFAE00] font-manrope text-xs font-bold tracking-[0.35em] uppercase">
            The People
          </p>
          <h1 className="text-white font-playfairDisplay text-[34px] sm:text-[44px] lg:text-5xl font-medium leading-tight">
            Meet Our Team
          </h1>
          <p className="text-[rgba(255,255,255,0.65)] font-manrope text-sm sm:text-[15px] leading-[24px] sm:leading-[25.84px] max-w-[560px]">
            The passionate minds and skilled hands behind every Venaxa Gold creation.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FAF8F4] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-14">
        <div className="max-w-[1272px] mx-auto flex flex-col items-center gap-12 sm:gap-14 lg:gap-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-[#D19C2A] font-manrope text-xs font-bold tracking-[0.35em] uppercase">
              Leadership
            </p>
            <h2 className="text-[#161616] font-playfairDisplay text-[30px] sm:text-[38px] lg:text-[40px] leading-tight">
              Our Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 w-full">
            {leadership.map((member) => (
              <article key={member.name} className="flex flex-col gap-4">
                <div className="rounded-[10px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.12)]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[340px] sm:h-[360px] object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[#161616] font-playfairDisplay text-[22px] leading-[30px]">
                    {member.name}
                  </h3>
                  <p className="text-[#8B0304] font-manrope text-xs font-semibold tracking-[0.1em] uppercase">
                    {member.role}
                  </p>
                  <p className="text-[rgba(45,45,66,0.55)] font-manrope text-sm leading-[23.12px]">
                    {member.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F3EDE4] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-14">
        <div className="max-w-[1272px] mx-auto flex flex-col items-center gap-12 sm:gap-14 lg:gap-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-[#D19C2A] font-manrope text-xs font-bold tracking-[0.35em] uppercase">
              Our Departments
            </p>
            <h2 className="text-[#161616] font-playfairDisplay text-[30px] sm:text-[38px] lg:text-[40px] leading-tight">
              A Team of 70+ Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 w-full">
            {departments.map((item) => (
              <article
                key={item.title}
                className="rounded-[10px] border border-[#F3F4F6] bg-[#FFF] px-8 py-9 flex flex-col items-center text-center gap-2"
              >
                <p className="text-[#8B0304] font-playfairDisplay text-[40px] font-medium leading-[60px]">
                  {item.count}
                </p>
                <h3 className="text-[#2D2D42] font-playfairDisplay text-base font-medium tracking-[0.1em]">
                  {item.title}
                </h3>
                <p className="text-[rgba(45,45,66,0.50)] font-manrope text-sm leading-[21.76px]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-14">
        <div className="max-w-[832px] mx-auto flex flex-col items-center text-center gap-6">
          <p className="text-[#D19C2A] font-manrope text-xs font-bold tracking-[0.35em] uppercase">
            Our Culture
          </p>
          <h2 className="text-[#161616] font-playfairDisplay text-[30px] sm:text-[38px] lg:text-[40px] leading-tight">
            Where Passion Meets Purpose
          </h2>
          <p className="text-[rgba(45,45,66,0.65)] font-manrope text-[15px] leading-[27.36px]">
            At Venaxa Gold, we foster an environment where creativity thrives and traditions are honoured. Our team is united by a shared passion for excellence and a deep respect for the art of gold jewellery making.
          </p>
          <p className="text-[rgba(45,45,66,0.65)] font-manrope text-[15px] leading-[27.36px]">
            We invest in our people through continuous training programmes, international workshops, and apprenticeships that ensure our centuries-old techniques are passed to the next generation of master craftsmen.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#1C1C1C] py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-[832px] mx-auto flex flex-col items-center text-center gap-4 sm:gap-6">
          <p className="text-[#D19C2A] font-manrope text-xs tracking-[0.35em] uppercase">Careers</p>
          <h2 className="text-white font-playfairDisplay text-[30px] sm:text-[38px] lg:text-[40px] leading-tight">
            Join the Venaxa Family
          </h2>
          <p className="text-[rgba(255,255,255,0.55)] font-manrope text-sm sm:text-[15px] leading-[25.84px] max-w-[520px]">
            We're always looking for talented individuals who share our passion for craftsmanship and excellence.
          </p>
          <button className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-[#D19C2A] px-8 py-3.5 text-[#FFF] font-manrope text-sm font-semibold">
            <span>GET IN TOUCH</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33337 7.99992H12.6667M12.6667 7.99992L8.00004 3.33325M12.6667 7.99992L8.00004 12.6666" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>
    </div>
  )
}