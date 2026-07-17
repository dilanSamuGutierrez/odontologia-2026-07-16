// Cada `alt` es un BRIEF de producción para la foto real que reemplazará el placeholder.
const U = "https://images.unsplash.com/";
export const img = (id: string, w = 1600) =>
  `${U}photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  heroFloat: img("1606811841689-23dfddce3e95", 1200),
  problemPeek1: img("1588776814546-1ffcf47267a5", 900),
  problemPeek2: img("1609840114035-3c981b782dfe", 900),
  problemPeek3: img("1601046668428-94ea13437736", 900),
  problemPeek4: img("1622253692010-333f2da6031d", 900),
  clinicBand: img("1629909613654-28e377c37b09", 2200),
  caseA1: img("1598256989800-fe5f95da9787", 1000),
  caseB1: img("1606811841689-23dfddce3e95", 1000),
  caseA2: img("1601046668428-94ea13437736", 1000),
  caseB2: img("1612349317150-e413f6a5b16d", 1000),
  caseA3: img("1622253692010-333f2da6031d", 1000),
  caseB3: img("1588776814546-1ffcf47267a5", 1000),
  ctaBack: img("1629909613654-28e377c37b09", 2000)
};

export const ALT = {
  heroFloat: "BRIEF: foto vertical recortada — sonrisa natural y luminosa de mujer joven en primer plano, dientes perfectos, luz suave difusa de estudio, tono cálido neutro, fondo limpio, expresión relajada",
  problemPeek1: "BRIEF: foto — paciente mirando su boca en un espejo de mano con gesto de preocupación, luz clínica suave, tono frío, primer plano",
  problemPeek2: "BRIEF: foto — instrumental dental ordenado sobre bandeja metálica, macro, luz limpia lateral, tono acero y blanco",
  problemPeek3: "BRIEF: foto — dentista explicando una radiografía en pantalla a un paciente, plano medio, luz natural de ventana, ambiente cálido",
  problemPeek4: "BRIEF: foto — manos de odontólogo con guantes durante revisión, primer plano, luz suave, foco en detalle técnico",
  clinicBand: "BRIEF: foto panorámica a sangre completa — interior de clínica dental de diseño escandinavo, madera clara, plantas, sillón moderno, luz natural abundante, tonos crema y verde salvia, ambiente calmado tipo spa",
  caseA1: "BRIEF: foto ANTES — sonrisa con dientes ligeramente apiñados y tono amarillento, luz uniforme frontal, encuadre boca-mentón",
  caseB1: "BRIEF: foto DESPUÉS — la misma sonrisa alineada y blanca tras tratamiento, luz uniforme frontal idéntica, encuadre igual para comparación",
  caseA2: "BRIEF: foto ANTES — dentadura con espacio interdental y desgaste, plano frontal clínico, luz neutra",
  caseB2: "BRIEF: foto DESPUÉS — dentadura restaurada y homogénea, plano frontal clínico idéntico, luz neutra",
  caseA3: "BRIEF: foto ANTES — sonrisa con encía irregular, plano de boca, luz frontal plana",
  caseB3: "BRIEF: foto DESPUÉS — sonrisa con contorno gingival armónico, mismo plano y luz, para slider comparativo",
  ctaBack: "BRIEF: foto a sangre completa muy atenuada de fondo — recepción de clínica dental luminosa y minimalista, luz natural, tonos crema, desenfocada para servir de textura tras el bloque de color"
};

export const NAV = [
  { label: "Casos", href: "#casos" },
  { label: "Método", href: "#solucion" },
  { label: "Opiniones", href: "#testimonio" },
  { label: "Reservar", href: "#reserva" }
];
