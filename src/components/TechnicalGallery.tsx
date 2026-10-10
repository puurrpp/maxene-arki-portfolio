import Image from "next/image";
import type { TechnicalDrawing } from "../data/projects";

export default function TechnicalGallery({
  technicalDrawings,
}: {
  technicalDrawings: TechnicalDrawing[];
}) {
  return (
    <div className="w-full bg-[#121212] py-24">
      <h3 className="mx-auto mb-8 max-w-7xl border-b border-gray-200 pb-4 px-4 text-sm tracking-widest uppercase text-gray-500">
        Technical Plans &amp; Sections
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-4">
        {technicalDrawings.map((drawing, index) => (
          <figure key={`${drawing.title}-${index}`}>
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#f4f4f3]">
              <Image
                src={drawing.src}
                alt={drawing.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain object-center"
              />
            </div>
            <figcaption className="mt-4 font-sans text-xs tracking-widest uppercase">
              {drawing.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
