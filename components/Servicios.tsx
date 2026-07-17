"use client";
const TAGS = ["Ortodoncia invisible", "·", "Implantes", "·", "Diseño de sonrisa", "·", "Blanqueamiento", "·", "Estética dental", "·", "Odontopediatría", "·", "Endodoncia", "·"];
export default function Servicios() {
  return (
    <div className="w-full overflow-hidden bg-coral text-cream py-4 select-none">
      <div className="flex whitespace-nowrap animate-marquee-fast will-change-transform">
        {[0, 1].map((k) => (
          <div key={k} className="flex items-center shrink-0">
            {TAGS.map((t, i) => (
              <span key={i} className="mx-4 font-display font-bold text-xl md:text-2xl">{t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
