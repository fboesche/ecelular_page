import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Electrónica Celular",
  tagline: "Verdaderas Soluciones",
  description: "Desarrollamos soluciones integrales en tecnología para gestionar y optimizar cualquier proceso. Tomaturnos, Medidores de agua ultrasonicos, radiocomunicaciones, Internet de las Cosas (IoT) y mas…. Comience a explorar y comuníquese con nuestro equipo de ventas para obtener calidad y confiabilidad superiores..",
  description_short: "Desarrollamos soluciones integrales en tecnología para gestionar y optimizar cualquier proceso. Tomaturnos, medidores de agua, radiocomunicaciones, Internet de las Cosas (IoT) y mas…",
  url: "https://screwfast.uk",
  author: "Emil Gulamov",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
};
