import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Resenas from "@/components/Resenas";
import Problema from "@/components/Problema";
import Solucion from "@/components/Solucion";
import Servicios from "@/components/Servicios";
import Casos from "@/components/Casos";
import Reserva from "@/components/Reserva";
import Testimonio from "@/components/Testimonio";
import Consecuencias from "@/components/Consecuencias";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Resenas />
        <Problema />
        <Solucion />
        <Servicios />
        <Casos />
        <Reserva />
        <Testimonio />
        <Consecuencias />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
