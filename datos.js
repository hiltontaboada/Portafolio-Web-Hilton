/* ═══════════════════════════════════════════════════════════
   HILTON TABOADA JR. — BASE DE DATOS DE PROYECTOS
   datos.js  — se carga en index.html Y en proyecto.html
   ═══════════════════════════════════════════════════════════ */

const PROYECTOS = {

  "talk-english": {
    titulo:      "Talk English",
    categoria:   "Branding",
    año:         "2023",
    cliente:     "Talk English Academy",
    servicios:   ["Identidad Visual", "Diseño de Logo", "Material Impreso", "Social Media Kit"],
    descripcion: "Talk English es una academia de inglés nueva ubicada en Sucre, Bolivia. El proyecto consistió en el desarrollo completo de su identidad visual, desde la conceptualización del logotipo hasta la aplicación en todos los materiales de comunicación.",
    desafio:     "La academia necesitaba una imagen profesional y moderna que transmitiera confianza y dinamismo, diferenciándose de otras academias de idiomas en la región.",
    solucion:    "Se desarrolló una identidad basada en tipografía y una paleta de colores vibrante. El sistema visual incluye logo, variantes, colores corporativos, tipografías y guía de uso.",
    imagen_hero: "assets/proyectos/Talk - English/Portada talk.png",
    galeria: [
      { src: "assets/proyectos/Talk - English/Perfil Talk.png",      titulo: "Logotipo principal",      desc: "Versión principal del logo" },
      { src: "assets/proyectos/Talk - English/logos talk.png", titulo: "Variantes del logo",      desc: "Versiones positivo, negativo y monocromo" },
      { src: "assets/proyectos/Talk - English/paleta talk.jpg",   titulo: "Paleta de colores",       desc: "Colores corporativos y tipografías" },
      { src: "assets/proyectos/Talk - English/post.png",   titulo: "Tarjeta de presentación", desc: "Aplicación en material impreso" },
      { src: "assets/proyectos/Talk - English/brochure.png",    titulo: "Kit de redes sociales",   desc: "Templates para Instagram y Facebook", ancho: "wide" },
      { src: "assets/proyectos/Talk - English/boleto talk.jpg",    titulo: "Mockup aplicación",       desc: "Vista general del sistema de marca",   ancho: "full" },
    ],
  },

  "martel-king": {
    titulo:      "Martel King Hostal",
    categoria:   "Branding",
    año:         "2025",
    cliente:     "Hostal Martel King",
    servicios:   ["Identidad Visual", "Señalética", "Diseño de Menú", "Social Media"],
    descripcion: "Hostal boutique ubicado en Iquique Chile. El proyecto abarcó el rediseño completo de su marca e identidad visual, con aplicación en redes sociales, material de bienvenida y presencia digital.",
    desafio:     "El hostal tenía una imagen desactualizada que no reflejaba la calidad de sus instalaciones. Necesitaban una identidad premium y elegante.",
    solucion:    "Se diseñó una identidad visual sofisticada con inspiración en la arquitectura colonial de Sucre, usando una paleta neutra y tipografía serif.",
    imagen_hero: "assets/proyectos/martel/Portada Martel.png",
    galeria: [
      { src: "assets/proyectos/Martel/Martel Logo Perfil.png",       titulo: "Logotipo",              desc: "Identidad visual principal" },
      { src: "assets/proyectos/Martel/Martel - Paleta.png",  titulo: "Papelería corporativa", desc: "Tarjetas, sobres y membrete" },
      { src: "assets/proyectos/Martel/Vacaciones - Martel.png", titulo: "Post Facebook", desc: "Aplicación en social media" },
      { src: "assets/proyectos/Martel/martel info.png",       titulo: "Menú",                  desc: "Diseño de carta de servicios" },
      { src: "assets/proyectos/Martel/Portada Martel.png",     titulo: "Redes sociales",        desc: "Publicaciones y stories", ancho: "wide" },
    ],
  },


  "elevate": {
    titulo:      "Elevate Dream's Agency",
    categoria:   "Branding",
    año:         "2024",
    cliente:     "Elevate Dream's Agency",
    servicios:   ["Arte Publicitario", "Diseño Gráfico", "Campañas Digitales"],
    descripcion: "Desarrollo de piezas publicitarias para los clientes de la agencia Elevate Dream's. Colaboración en diseño gráfico y producción de contenido visual para diversas marcas.",
    desafio:     "Cada cliente tenía necesidades distintas, requiriendo versatilidad y adaptación rápida a diferentes estilos visuales.",
    solucion:    "Se desarrollaron sistemas visuales únicos para cada cliente, manteniendo coherencia interna y diferenciación entre marcas.",
    imagen_hero: "assets/proyectos/elevate/Portada Elevate.png",
    galeria: [
      { src: "assets/proyectos/elevate/Perfil Elevate.png", titulo: "Arte publicitario 1", desc: "Campaña para cliente A" },
      { src: "assets/proyectos/elevate/Paleta Elevate.jpg", titulo: "Arte publicitario 2", desc: "Campaña para cliente B" },
      { src: "assets/proyectos/elevate/post 1.png", titulo: "Arte publicitario 3", desc: "Campaña para cliente C" },
      { src: "assets/proyectos/elevate/elevate versiones.png", titulo: "Versiones de Imagotipo", desc: "Diseño Brand", ancho: "wide" },
    ],
  },

  "antena-2000": {
    titulo:      "Radio Antena 2000",
    categoria:   "Social Media",
    año:         "2018–2020",
    cliente:     "Radio Antena 2000",
    servicios:   ["Community Manager", "Diseño Digital", "Gestión de Redes", "Producción Radial"],
    descripcion: "Gestión de redes sociales y diseño de contenido digital para Radio Antena 2000, una de las emisoras más escuchadas de Sucre. Producción y conducción del programa juvenil Capisound.",
    desafio:     "La radio necesitaba fortalecer su presencia digital y conectar con audiencias jóvenes a través de redes sociales.",
    solucion:    "Se desarrolló una estrategia de contenido multimedia que complementaba la programación radial con contenido digital atractivo y dinámico.",
    imagen_hero: "assets/proyectos/radio/portada.png",
    galeria: [
      { src: "assets/proyectos/radio/logo.png",     titulo: "Posts informativos", desc: "Noticias y programación" },
      { src: "assets/proyectos/radio/25mayo.png", titulo: "Capisound",          desc: "Programa juvenil conducido" },
      { src: "assets/proyectos/radio/gif.gif",   titulo: "Eventos",            desc: "Cobertura de eventos" },
      { src: "assets/proyectos/radio/ULTIMO.png",titulo: "Año Nuevo",          desc: "Organización fiesta 2018–2019", ancho: "wide" },
    ],
  },

  "wilber": {
    titulo:      "Wilber & Hnos. S.R.L.",
    categoria:   "Social Media",
    año:         "2020",
    cliente:     "Wilber & Hnos. S.R.L.",
    servicios:   ["Diseño de Posts", "Community Manager", "Contenido Facebook"],
    descripcion: "Diseño y gestión de contenido para redes sociales de Wilber & Hnos., empresa de transporte internacional. Posts informativos, promocionales y de imagen corporativa.",
    desafio:     "La empresa necesitaba digitalizar su comunicación y llegar a nuevos clientes a través de plataformas digitales.",
    solucion:    "Se creó contenido visual profesional adaptado al sector de transporte, destacando confiabilidad, cobertura y servicios.",
    imagen_hero: "assets/proyectos/wilber/Portada Wilber.png",
    galeria: [
      { src: "assets/proyectos/Wilber/wilberlogo.jpg", titulo: "Post corporativo",  desc: "Imagen institucional" },
      { src: "assets/proyectos/Wilber/Requerimiento Personal.png", titulo: "Post de servicio",  desc: "Comunicación de rutas" },
      { src: "assets/proyectos/Wilber/Taza wilber.png", titulo: "Post promocional",  desc: "Ofertas y promociones", ancho: "wide" },
      { src: "assets/proyectos/Wilber/Polera Wilber.png", titulo: "Post promocional",  desc: "Ofertas y promociones", },
    ],
  },

  "tecba": {
    titulo:      "TECBA - Tecnológico Boliviano Alemán",
    categoria:   "Social Media",
    año:         "2020",
    cliente:     "Tecnológico Boliviano Alemán",
    servicios:   ["Diseño de Posts", "Community Manager", "Sociale Media", "Marketing Digital"],
    descripcion: "Diseño y gestión de contenido para redes sociales de TECBA., empresa líder en educación técnica en Bolivia. Posts informativos, promocionales y de imagen institucional para sus Redes Sociales.",
    desafio:     "La empresa necesitaba digitalizar su comunicación y llegar a nuevos clientes a través de plataformas digitales.",
    solucion:    "Se creó contenido visual profesional adaptado al sector de transporte, destacando confiabilidad, cobertura y servicios.",
    imagen_hero: "assets/proyectos/TECBA/hero.jpg",
    galeria: [
      { src: "assets/proyectos/TECBA/post1.jpg", titulo: "Post corporativo",  desc: "Imagen institucional" },
      { src: "assets/proyectos/TECBA/post2.jpg", titulo: "Post de servicio",  desc: "Comunicación de rutas" },
      { src: "assets/proyectos/TECBA/post3.jpg", titulo: "Post promocional",  desc: "Ofertas y promociones", ancho: "wide" },
      { src: "assets/proyectos/TECBA/post4.jpg", titulo: "Post promocional",  desc: "Ofertas y promociones", },
    ],
  },
  /* ══════════════════════════════════════════════════════════
     PLANTILLA PARA NUEVO PROYECTO — copia esto y pega abajo:

  "id-proyecto": {
    titulo:      "Nombre del Cliente",
    categoria:   "Branding | Social Media | Web | Multimedia",
    año:         "20XX",
    cliente:     "Nombre completo",
    servicios:   ["Servicio 1", "Servicio 2"],
    descripcion: "Descripción general...",
    desafio:     "El problema o necesidad...",
    solucion:    "Cómo lo resolviste...",
    imagen_hero: "assets/proyectos/id-proyecto/hero.jpg",
    galeria: [
      { src: "assets/proyectos/id-proyecto/img1.jpg", titulo: "Título", desc: "Descripción" },
      { src: "assets/proyectos/id-proyecto/img2.jpg", titulo: "Título", desc: "Descripción", ancho: "wide" },
      { src: "assets/proyectos/id-proyecto/img3.jpg", titulo: "Título", desc: "Descripción", ancho: "full" },
    ],
  },
  ══════════════════════════════════════════════════════════ */

};
