import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Emma Lindberg",
    role: "Grundare & Hälsocoach",
    description: "Med över 15 års erfarenhet inom holistisk hälsa leder Emma vårt center med passion och expertis."
  },
  {
    name: "Johan Eriksson",
    role: "Yogainstruktör",
    description: "Certifierad yogalärare med specialisering i Hatha och Vinyasa yoga."
  },
  {
    name: "Sofia Andersson",
    role: "Nutritionist",
    description: "Legitimerad dietist med fokus på funktionell näringslära."
  }
];

const values = [
  {
    title: "Helhetssyn",
    description: "Vi ser hela människan - kropp, sinne och själ - som en odelbar enhet."
  },
  {
    title: "Personligt bemötande",
    description: "Varje besökare är unik och förtjänar en skräddarsydd upplevelse."
  },
  {
    title: "Vetenskaplig grund",
    description: "Vi kombinerar traditionell visdom med modern forskning."
  },
  {
    title: "Hållbarhet",
    description: "Vi värnar om både människor och planet i allt vi gör."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pexels-pixabay-355863.jpg"
            alt="Peaceful wellness environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-sage-900/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Om oss</span>
          <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-6 leading-tight">
            Vår historia
          </h1>
          <div className="w-20 h-px bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-sage-100/90 font-light max-w-2xl mx-auto">
            Serenity grundades med en vision - att skapa en fristad där
            varje besökare kan finna lugn, balans och förnyad energi.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm tracking-[0.3em] uppercase">Vår berättelse</span>
              <h2 className="text-4xl font-light text-sage-800 mt-4 mb-8 leading-tight">
                En resa mot
                <span className="block text-sage-600">holistisk hälsa</span>
              </h2>
              <div className="w-20 h-px bg-gold mb-8"></div>

              <div className="space-y-6 text-sage-600 leading-relaxed">
                <p>
                  Serenity Health Center föddes ur en personlig resa. Vår grundare, Emma Lindberg,
                  upplevde själv kraften i att kombinera traditionell visdom med modern vetenskap
                  när hon återhämtade sig från utmattning.
                </p>
                <p>
                  Idag är vi ett team av passionerade experter som brinner för att dela denna
                  kunskap. Vi tror att sann hälsa kommer inifrån och att varje människa har
                  förmågan att läka och växa.
                </p>
                <p>
                  Vår filosofi grundar sig i respekt för kroppens egen visdom. Genom att
                  lyssna inåt och skapa rätt förutsättningar kan vi alla uppnå optimal hälsa
                  och välbefinnande.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden">
                <Image
                  src="/pexels-elly-fairytale-3822621.jpg"
                  alt="Our wellness center"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold/30 rounded-sm -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-sage-100 rounded-sm -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Våra värderingar</span>
            <h2 className="text-4xl font-light text-sage-800 mt-4">Vad vi står för</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-sage-100 to-sage-200 flex items-center justify-center">
                  <span className="text-2xl font-light text-sage-700">{index + 1}</span>
                </div>
                <h3 className="text-lg font-medium text-sage-800 mb-3">{value.title}</h3>
                <p className="text-sage-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-cream to-sage-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Vårt team</span>
            <h2 className="text-4xl font-light text-sage-800 mt-4 mb-4">Möt experterna</h2>
            <p className="text-sage-600 max-w-2xl mx-auto">
              Vårt team av certifierade specialister är dedikerade till din hälsoresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-sm border border-sage-100 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-sage-200 to-sage-300 flex items-center justify-center">
                  <span className="text-3xl font-light text-sage-700">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-sage-800 mb-1">{member.name}</h3>
                <p className="text-gold text-sm mb-4 tracking-wide">{member.role}</p>
                <p className="text-sage-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-96">
        <Image
          src="/fruits.jpg"
          alt="Healthy nutrition"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-semibold text-white mb-4">
                Näring är grunden för välmående
              </h3>
              <p className="text-white/90 font-medium">
                Vi tror på kraften i riktig mat och naturliga ingredienser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-gold text-sm tracking-[0.3em] uppercase">Kontakta oss</span>
              <h2 className="text-4xl font-light text-sage-800 mt-4 mb-8">
                Vi finns här för dig
              </h2>
              <div className="w-20 h-px bg-gold mb-8"></div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sage-800 font-medium mb-1">Besöksadress</h4>
                    <p className="text-sage-600">Lugna Gatan 123</p>
                    <p className="text-sage-600">123 45 Stockholm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sage-800 font-medium mb-1">E-post</h4>
                    <p className="text-sage-600">info@serenity.se</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sage-800 font-medium mb-1">Telefon</h4>
                    <p className="text-sage-600">08-123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sage-800 font-medium mb-1">Öppettider</h4>
                    <p className="text-sage-600">Måndag - Fredag: 08:00 - 20:00</p>
                    <p className="text-sage-600">Lördag: 09:00 - 17:00</p>
                    <p className="text-sage-600">Söndag: Stängt</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sage-50 p-10 rounded-sm">
              <h3 className="text-2xl font-light text-sage-800 mb-6">Skicka ett meddelande</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-sage-700 mb-2">Namn</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-sage-200 rounded-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="Ditt namn"
                  />
                </div>
                <div>
                  <label className="block text-sm text-sage-700 mb-2">E-post</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-sage-200 rounded-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="din@email.se"
                  />
                </div>
                <div>
                  <label className="block text-sm text-sage-700 mb-2">Meddelande</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-sage-200 rounded-sm focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Hur kan vi hjälpa dig?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-sage-700 text-white text-sm font-semibold tracking-wider uppercase hover:bg-sage-800 transition-all duration-300 shadow-md"
                >
                  Skicka meddelande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sage-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-gold text-sm tracking-[0.3em] uppercase">Börja idag</span>
          <h2 className="text-4xl font-light text-white mt-4 mb-6">
            Redo att ta första steget?
          </h2>
          <p className="text-sage-300 mb-10 max-w-2xl mx-auto">
            Boka en kostnadsfri konsultation och låt oss tillsammans skapa en plan
            för din optimala hälsa.
          </p>
          <Link
            href="/services"
            className="inline-block px-12 py-5 bg-gold text-sage-900 text-sm font-medium tracking-wider uppercase hover:bg-gold-light transition-all duration-300"
          >
            Se våra tjänster
          </Link>
        </div>
      </section>
    </div>
  );
}
