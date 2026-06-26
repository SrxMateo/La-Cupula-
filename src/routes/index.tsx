import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  Martini,
  MapPin,
  Music2,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Instagram,
  Facebook,
  MessageCircle,
  Ticket,
} from "lucide-react";
import heroImage from "@/assets/la-cupula-hero.jpg";
import laCupulaLogo from "@/assets/la-cupula-logo.png";
import galeriaImage1 from "@/assets/la-cupula-galeria-1.jpg";
import galeriaImage2 from "@/assets/la-cupula-galeria-2.jpg";
import galeriaImage3 from "@/assets/la-cupula-galeria-3.jpg";
import galeriaImage4 from "@/assets/la-cupula-galeria-4.jpg";

const WHATSAPP_RESERVA =
  "https://wa.me/51923864473?text=Hola%20La%20C%C3%BApula,%20quiero%20reservar%20un%20box%20para%20este%20fin%20de%20semana";
const WHATSAPP_LISTA =
  "https://wa.me/51923864473?text=Hola%20La%20C%C3%BApula,%20quiero%20estar%20en%20lista%20para%20ingreso%20libre";
const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps?q=-10.6671919,-76.257609&z=18&output=embed";
const GOOGLE_MAPS_STREET_VIEW =
  "http://google.com/maps/@-10.6671919,-76.257609,3a,75y,167.42h,84.33t/data=!3m7!1e1!3m5!1s6v0ia4Uh_rlHKT1YAEWOUQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D5.667900645294381%26panoid%3D6v0ia4Uh_rlHKT1YAEWOUQ%26yaw%3D167.41573170167223!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDYyMy4wIKXMDSoASAFQAw%3D%3D";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Cúpula | Discoteca en Cerro de Pasco" },
      {
        name: "description",
        content:
          "Discoteca La Cúpula en Cerro de Pasco: eventos, conciertos en vivo y reserva de boxes VIP por WhatsApp.",
      },
      { property: "og:title", content: "La Cúpula | Las mejores noches en Cerro de Pasco" },
      {
        property: "og:description",
        content:
          "Más de 5 años siendo el punto de encuentro definitivo con música en vivo, seguridad y ambiente exclusivo.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:title", content: "La Cúpula | Discoteca en Cerro de Pasco" },
      {
        name: "twitter:description",
        content: "Reserva tu box VIP por WhatsApp y vive la mejor noche en Cerro de Pasco.",
      },
      { name: "twitter:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="club-background bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#inicio" className="inline-flex items-center">
            <img
              src={laCupulaLogo}
              alt="Logo de La Cúpula"
              className="h-10 w-auto object-contain"
              loading="lazy"
            />
          </a>
          <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
            <a href="#nosotros" className="transition-colors hover:text-foreground">
              Nosotros
            </a>
            <a href="#eventos" className="transition-colors hover:text-foreground">
              Eventos
            </a>
            <a href="#galeria" className="transition-colors hover:text-foreground">
              Galería
            </a>
            <a href="#ubicacion" className="transition-colors hover:text-foreground">
              Ubicación
            </a>
          </nav>
          <a href={WHATSAPP_RESERVA} target="_blank" rel="noreferrer" className="btn-neon">
            Reserva tu Box
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative isolate min-h-[78vh] overflow-hidden border-b border-border/50">
          <img
            src={heroImage}
            alt="Personas disfrutando de una noche de fiesta en La Cúpula"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="hero-stage relative mx-auto flex min-h-[78vh] max-w-6xl items-center px-4 py-14 sm:px-6">
            <div className="max-w-2xl space-y-5">
              <p className="glow-pill inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> Cerro de Pasco, Perú
              </p>
              <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                <span className="text-primary">LA CÚPULA</span> enciende las mejores noches en Cerro de
                Pasco.
              </h1>
              <h2 className="text-pretty text-base text-muted-foreground sm:text-lg">
                Más de 5 años siendo el punto de encuentro definitivo. Un ambiente amplio, seguro y
                con la mejor música en vivo.
              </h2>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#eventos" className="btn-neon-secondary">
                  Ver Próximos Eventos
                </a>
                <a href={WHATSAPP_LISTA} target="_blank" rel="noreferrer" className="btn-ghost-neon">
                  Estás en Lista (Ingreso Libre)
                </a>
              </div>
              <div className="mt-3 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { label: "Noches activas", value: "Jue-Sáb" },
                  { label: "Calificación", value: "4.0/5" },
                  { label: "Experiencia", value: "+5 años" },
                ].map((item) => (
                  <div key={item.label} className="metric-chip">
                    <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="nosotros" className="section-shell section-band">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-6">
              <div>
                <p className="section-kicker">Social Proof</p>
                <h2 className="section-title">Respaldados por más de 100 opiniones reales.</h2>
              </div>
              <div className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-card px-4 py-2 text-sm">
                <Star className="h-4 w-4 fill-current text-primary" />
                <Star className="h-4 w-4 fill-current text-primary" />
                <Star className="h-4 w-4 fill-current text-primary" />
                <Star className="h-4 w-4 fill-current text-primary" />
                <span className="ml-2 text-foreground">4.0/5</span>
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  quote:
                    "Excelente lugar para disfrutar y pasar el tiempo con amigos. Buena atención, ambiente amplio y seguro.",
                  author: "Elias M.",
                },
                {
                  quote: "Pequeño, muy acogedor y con un servicio impecable.",
                  author: "Walter C.",
                },
                {
                  quote: "El mejor ambiente para conciertos en vivo. Increíble.",
                  author: "Melanie V.",
                },
              ].map((review) => (
                <article key={review.author} className="surface-panel space-y-4">
                  <div className="flex items-center gap-1 text-primary">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">“{review.quote}”</p>
                  <p className="text-sm font-medium text-foreground">{review.author}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="eventos" className="section-shell border-y border-border/50 bg-card/35">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-kicker">Eventos</p>
            <h2 className="section-title">Agenda de noches imperdibles</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { day: "Jueves", title: "Noche de DJs Residentes" },
                { day: "Viernes", title: "Concierto en Vivo" },
                { day: "Sábado", title: "Fiesta Premium + After" },
              ].map((event) => (
                <article key={event.title} className="surface-panel flex items-start gap-3">
                  <CalendarDays className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">{event.day}</p>
                    <p className="font-medium text-foreground">{event.title}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="section-shell section-band border-y border-border/50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-kicker">Galería</p>
            <h2 className="section-title">Así se vive una noche en La Cúpula</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  src: galeriaImage1,
                  alt: "Vista de la barra principal con luces neón en La Cúpula",
                },
                {
                  src: galeriaImage2,
                  alt: "Área de pista iluminada en ambiente nocturno de La Cúpula",
                },
                {
                  src: galeriaImage3,
                  alt: "DJ en cabina con público bailando durante un evento en La Cúpula",
                },
                {
                  src: galeriaImage4,
                  alt: "Zona VIP con sofás y botellas en La Cúpula",
                },
              ].map((image) => (
                <figure key={image.alt} className="gallery-card">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={1280}
                    height={853}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="section-shell section-band">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-kicker">¿Por qué elegir La Cúpula?</p>
            <h2 className="section-title">Una experiencia completa en cada visita</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                {
                  icon: Sparkles,
                  title: "Ambiente Exclusivo",
                  text: "Diseño acogedor pero con el espacio perfecto para bailar y disfrutar sin agobios.",
                },
                {
                  icon: Martini,
                  title: "Barra Premium",
                  text: "Coctelería de autor y los mejores tragos a precios justos.",
                },
                {
                  icon: ShieldCheck,
                  title: "Seguridad Garantizada",
                  text: "Filtro estricto y personal capacitado para que solo te preocupes por pasarla bien.",
                },
                {
                  icon: Music2,
                  title: "Música y Conciertos",
                  text: "Desde DJs residentes hasta los mejores conciertos en vivo de la región.",
                },
              ].map((feature) => (
                <article key={feature.title} className="surface-panel flex items-start gap-3">
                  <feature.icon className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell border-y border-border/50 bg-card/35">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-kicker">Reserva de Boxes</p>
            <h2 className="section-title">Vive la experiencia VIP.</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Celebra tu cumpleaños, aniversario o simplemente el fin de semana con atención
              personalizada y los mejores licores en tu zona exclusiva.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Box Clásico",
                  details: "Ideal para grupos pequeños que buscan una noche cómoda y bien atendida.",
                },
                {
                  name: "Box Cumpleañero",
                  details:
                    "Decoración especial y beneficios para festejar con tu grupo en primera fila.",
                },
                {
                  name: "Box Premium",
                  details:
                    "Ubicación privilegiada, atención dedicada y selección superior de licores.",
                },
              ].map((box) => (
                <article key={box.name} className="surface-panel space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1 text-xs text-muted-foreground">
                    <Users className="h-3.5 w-3.5" /> VIP
                  </div>
                  <h3 className="text-lg font-medium text-foreground">{box.name}</h3>
                  <p className="text-sm text-muted-foreground">{box.details}</p>
                </article>
              ))}
            </div>
            <a
              href={WHATSAPP_RESERVA}
              target="_blank"
              rel="noreferrer"
              className="btn-neon mt-8 inline-flex"
            >
              <Ticket className="h-4 w-4" />
              Cotizar mi Box por WhatsApp
            </a>
          </div>
        </section>

        <section id="terminos" className="section-shell section-band border-y border-border/50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-kicker">Legal</p>
            <h2 className="section-title">Términos y condiciones</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <article className="surface-panel">
                <h3 className="text-lg font-medium text-foreground">Condiciones de ingreso y reserva</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>- El ingreso está sujeto a control de seguridad y aforo.</li>
                  <li>- Las reservas de boxes se confirman por WhatsApp con anticipación.</li>
                  <li>- El horario y programación pueden variar por eventos especiales.</li>
                  <li>- Todo asistente acepta las normas internas de convivencia y seguridad.</li>
                </ul>
              </article>
              <article className="surface-panel">
                <h3 className="text-lg font-medium text-foreground">Política anti-copia y derechos de autor</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Todo el contenido de esta web, incluyendo marca, logotipo, fotografías, textos y
                  diseño visual, es propiedad de La Cúpula o se usa con autorización. Está prohibida
                  su copia, reproducción, distribución o uso comercial total o parcial sin permiso
                  previo por escrito.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer id="ubicacion" className="section-shell section-band pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
          <div className="surface-panel overflow-hidden p-0">
            <iframe
              title="Mapa de La Cúpula en Cerro de Pasco"
              src={GOOGLE_MAPS_EMBED}
              className="h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="surface-panel">
            <h2 className="section-title">Ubicación y contacto</h2>
            <div className="mt-5 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                Jr. Gamaniel Blanco 400, Cerro De Pasco 19001, Perú.
              </p>
              <p className="flex items-start gap-2">
                <CalendarDays className="mt-0.5 h-4 w-4 text-primary" />
                Jueves a Sábado | 9:00 PM - Cierre.
              </p>
              <p className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 text-primary" />
                +51 923 864 473.
              </p>
            </div>
            <div className="mt-6 flex gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="social-icon"
              >
                <Music2 className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            <a
              href={GOOGLE_MAPS_STREET_VIEW}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-neon mt-6 inline-flex"
            >
              Ver fachada en Street View
            </a>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_RESERVA}
        target="_blank"
        rel="noreferrer"
        aria-label="Reservar por WhatsApp"
        className="whatsapp-float"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
