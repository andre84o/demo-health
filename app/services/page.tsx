import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Hälsobedömning",
    description: "En grundläggande genomgång av din nuvarande hälsostatus för att identifiera dina behov och mål.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Anpassad hälsoanalys",
    description: "En djupgående analys skräddarsydd för din unika fysiologi och livsstil.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Näring & Kost",
    description: "Expertråd kring kost och nutrition för att optimera din energi och ditt välmående.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Personliga måltidsplaner",
    description: "Skräddarsydda recept och scheman som passar din vardag och dina smakpreferenser.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Personlig coachning",
    description: "Motiverande samtal och strategier för att hjälpa dig hålla kursen mot dina hälsomål.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Yoga & Meditation",
    description: "Gruppklasser och privatlektioner för att stärka kroppen och lugna sinnet.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
];

const packages = [
  {
    name: "Introduktion",
    price: "1 500 kr",
    description: "Perfekt för dig som vill prova på",
    features: [
      "Initial hälsobedömning",
      "1 personlig konsultation",
      "Grundläggande kostråd",
      "1 yoga-session"
    ],
    highlighted: false
  },
  {
    name: "Balans",
    price: "4 500 kr",
    description: "Vår mest populära",
    features: [
      "Djupgående hälsoanalys",
      "4 personliga konsultationer",
      "Personlig måltidsplan",
      "8 yoga-sessioner",
      "Meditationsguide"
    ],
    highlighted: true
  },
  {
    name: "Transformation",
    price: "9 500 kr",
    description: "För total förändring",
    features: [
      "Komplett hälsoanalys",
      "12 personliga konsultationer",
      "Skräddarsydd måltidsplan",
      "Obegränsade yoga-sessioner",
      "Veckovis uppföljning",
      "Prioriterad bokning"
    ],
    highlighted: false
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pexels-lucaspezeta-2529371.jpg"
            alt="Peaceful wellness environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-sage-900/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Våra tjänster</span>
          <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6 leading-tight">
            Skräddarsydd vård för
            <span className="block">ditt välbefinnande</span>
          </h1>
          <div className="w-20 h-px bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-sage-100/90 font-light max-w-2xl mx-auto">
            Vi erbjuder ett helhetsgrepp kring din hälsa med fokus på
            både kropp och själ.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Vad vi erbjuder</span>
            <h2 className="text-4xl font-light text-sage-800 mt-4">Våra behandlingar</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-10 rounded-sm border border-sage-100 hover:border-gold/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-sage-50 flex items-center justify-center text-sage-600 group-hover:bg-sage-600 group-hover:text-white transition-all duration-300 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-sage-800 mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break Section */}
      <section className="relative h-96 my-8">
        <Image
          src="/pexels-mtyutina-814264.jpg"
          alt="Relaxation and wellness"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-lg">
              <h3 className="text-3xl font-semibold text-white mb-4">
                "Hälsa är inte bara frånvaro av sjukdom, det är fullständig harmoni."
              </h3>
              <p className="text-white/80 text-sm tracking-wider uppercase font-medium">— Vår filosofi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Paket</span>
            <h2 className="text-4xl font-light text-sage-800 mt-4 mb-4">Välj ditt program</h2>
            <p className="text-sage-600 max-w-2xl mx-auto">
              Oavsett var du befinner dig på din hälsoresa har vi ett paket som passar dig.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-10 rounded-sm transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-sage-800 text-white scale-105 shadow-2xl'
                    : 'bg-white border border-sage-100 hover:shadow-lg'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-sage-900 text-xs font-medium px-4 py-1 tracking-wider uppercase">
                      Populärast
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-light mb-2 ${pkg.highlighted ? 'text-white' : 'text-sage-800'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-4 ${pkg.highlighted ? 'text-sage-300' : 'text-sage-500'}`}>
                    {pkg.description}
                  </p>
                  <div className={`text-4xl font-light ${pkg.highlighted ? 'text-gold' : 'text-sage-800'}`}>
                    {pkg.price}
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${pkg.highlighted ? 'text-gold' : 'text-sage-500'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${pkg.highlighted ? 'text-sage-200' : 'text-sage-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/about"
                  className={`block w-full py-4 text-center text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                    pkg.highlighted
                      ? 'bg-gold text-sage-900 hover:bg-gold-light'
                      : 'border border-sage-300 text-sage-700 hover:bg-sage-800 hover:text-white hover:border-sage-800'
                  }`}
                >
                  Välj paket
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sage-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Osäker?</span>
          <h2 className="text-4xl font-light text-white mt-4 mb-6">
            Boka en kostnadsfri konsultation
          </h2>
          <p className="text-sage-300 mb-10 max-w-2xl mx-auto">
            Låt oss prata om dina behov och tillsammans hitta den bästa vägen framåt.
            Ingen förpliktelse, bara ett öppet samtal om din hälsa.
          </p>
          <Link
            href="/about"
            className="inline-block px-12 py-5 bg-gold text-sage-900 text-sm font-medium tracking-wider uppercase hover:bg-gold-light transition-all duration-300"
          >
            Boka samtal
          </Link>
        </div>
      </section>
    </div>
  );
}
