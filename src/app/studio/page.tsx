import Image from "next/image";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-[#eeece6] px-6 py-24 text-[#20211f] md:px-16 md:py-32">
      <div className="grid gap-16 md:grid-cols-2 md:gap-24">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src="/images/maxene-portrait.jpg"
            alt="Maxene Wyatt D. Macasaquit"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
          />
        </div>

        <div className="flex items-center">
          <div>
            <p className="mb-6 font-sans text-xs tracking-[0.18em] uppercase text-[#73736e]">
              01 / Studio
            </p>
            <h1 className="font-serif text-6xl leading-[0.9] md:text-8xl">
              Maxene Wyatt D. Macasaquit
            </h1>
            <p className="mt-8 font-sans text-sm tracking-widest uppercase">
              B.S. Architecture | Mapúa University
            </p>
            <p className="mt-8 max-w-prose font-serif text-lg leading-relaxed">
              Focused on Community Architecture and Urban Design, my work
              explores the intersection of human empathy, cultural heritage,
              and sustainable development. From mid-rise biophilic residences
              to civic landmarks, I design spaces that prioritize breathability,
              resilience, and inclusivity.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
