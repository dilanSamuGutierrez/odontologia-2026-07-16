export default function Footer() {
  return (
    <footer className="relative bg-ink text-cream px-5 md:px-10 pt-16 pb-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
              SVANE<span className="text-coral">.</span>
            </div>
            <p className="mt-4 max-w-sm text-cream/60 leading-relaxed">
              Odontología de diseño escandinavo. Sonrisas cuidadas con calma, criterio y tecnología.
            </p>
          </div>
          <div>
            <h4 className="text-coral text-xs uppercase tracking-[0.2em] mb-4">Clínica</h4>
            <ul className="space-y-2 text-cream/60 text-sm">
              <li><a href="#casos" className="hover:text-cream">Casos reales</a></li>
              <li><a href="#solucion" className="hover:text-cream">Cómo trabajamos</a></li>
              <li><a href="#faq" className="hover:text-cream">Preguntas</a></li>
              <li><a href="#reserva" className="hover:text-cream">Pedir cita</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-coral text-xs uppercase tracking-[0.2em] mb-4">Visítanos</h4>
            <ul className="space-y-2 text-cream/60 text-sm">
              <li>Calle Serrano 45, Madrid</li>
              <li>+34 600 111 222</li>
              <li>hola@svane.dental</li>
              <li>Lun–Vie · 9:00–20:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-3 text-cream/40 text-xs">
          <p>© {new Date().getFullYear()} SVANE Dental. Prototipo demostrativo.</p>
          <p>Diseño &amp; desarrollo — DILNIC STUDIO</p>
        </div>
      </div>
    </footer>
  );
}
