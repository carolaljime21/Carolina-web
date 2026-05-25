export interface ProjectFeature {
    title: string;
    description?: string; // Descripción de la funcionalidad (panel derecho del modal)
    image?: string; // Ruta de la imagen para el carrusel
    video?: string; // Ruta del video para el carrusel
    device?: 'mobile' | 'web';
    mediaList?: { type: 'image' | 'video', url: string, device?: 'mobile' | 'web' }[]; // Para mostrar múltiple media lado a lado
}

export interface ProjectData {
    id: string; // Único, para la URL ?id=slug
    title: string;
    subtitle: string;
    description: string; // Descripción corta (Card)
    extendedDescription: string; // Descripción completa (Modal)
    image?: string; // Preview card
    href?: string; // Enlace externo
    technologies: string[]; // Nombres de los SVGs (ej. 'react', 'next')
    keyFeatures: string[]; // Puntos clave (texto)
    gallery: ProjectFeature[]; // Carrusel de imágenes
}

export const projectsData: ProjectData[] = [
    {
        id: 'transiloja',
        title: 'TransiLoja',
        subtitle: 'Prototipo funcional  Web + Móvil',
        description:
            'Prototipo de solución tecnológica enfocada a la mejora de experiencia de usuario tras la consulta de rutas y horarios del transporte público de Loja.',
        extendedDescription:
            'TransiLoja es un prototipo de solución tecnológica enfocada a la mejora de experiencia de usuario que se usa para la consulta de rutas y horarios del transporte público de la ciudad de Loja. Un proyecto desarrollado como trabajo de titulación.',
        image: '/transiLoja/logoTransiLoja.png',
        technologies: ['react', 'next', 'firebase', 'expo'], // Nombres para cargar /svg/tech-[name].svg por ej.
        keyFeatures: [
            'Notificaciones en tiempo real - Web + Móvil',
            'Planificación de viaje con detalle - Móvil',
            'Personalización de la aplicación móvil desde el admin web - Web + Móvil',
            'Gestión de datos: Conductores, Usuarios, Rutas, Paradas, Viajes, Buses - Web',
            'Importación de datos - Web',
        ],
        gallery: [
            {
                title: 'Seguimiento de bus en tiempo real - Móvil',
                description: 'Visualiza en tiempo real la posición exacta de cada bus en el mapa, con datos de velocidad y estado. Planifica tu viaje con información actualizada al instante para saber exactamente cuándo llegará tu bus.',
                video: '/transiLoja/funcionalidad1-SegimientoBus.mp4',
                device: 'mobile'
            },
            {
                title: 'Notificaciones push del sistema Móvil + Web',
                description: 'Recibe alertas instantáneas sobre el estado del servicio, incidencias y horarios. El sistema envía notificaciones push tanto a la app móvil del pasajero como al panel web de administración, manteniéndolos siempre informados.',
                mediaList: [
                    { type: 'video', url: '/transiLoja/funcionalidad2 - Movil - Notificaciones push.mp4', device: 'mobile' },
                    { type: 'image', url: '/transiLoja/gestionNotificaciones.png', device: 'web' }
                ]
            },
            {
                title: 'Planificación de viaje con detalle - Móvil',
                description: 'Ingresa tu punto de destino y la app calcula la mejor ruta disponible. Muestra paradas, tiempo estimado de llegada y todas las opciones de recorrido para que puedas elegir la más conveniente antes de salir.',
                video: '/transiLoja/Móvil - Planificación de viajes.mp4',
                device: 'mobile'
            },
            {
                title: 'Modo Offline - Móvil',
                description: 'Accede a información de rutas y paradas aún sin conexión a internet. Los datos esenciales se almacenan localmente, garantizando una experiencia fluida y útil en cualquier condición de conectividad.',
                video: '/transiLoja/Móvil - Modo Offline.mp4',
                device: 'mobile'
            }
        ],
    },
    {
        id: 'medihelp',
        title: 'MediHelp',
        subtitle: 'Sistema Médico  Web + Móvil',
        description:
            'Dashboard administrativo con gestión de citas, recetas e historiales clínicos, más app móvil para pacientes con chatbot, notificaciones y recordatorios.',
        extendedDescription:
            'Sistema médico integral que consta de un Dashboard administrativo (Web) y una Aplicación Móvil para pacientes. Permite gestionar citas, acceder a recetas digitales y llevar un historial clínico. La aplicación web está disponible en producción. La app móvil, que incluye un chatbot integrado para asistencia a pacientes y notificaciones push para recordatorios de medicamentos, estará próximamente disponible en las tiendas de aplicaciones. Por tratarse de un proyecto real en producción, no es posible mostrar más detalles para mantener la privacidad del sistema y sus usuarios.',
        image: '/medihelp/medihelp-logo.png',
        href: 'https://www.medihelp.lat/',
        technologies: ['react', 'next', 'expo'],
        keyFeatures: [
            'Gestión integral de citas, recetas e historial clínico',
            'Chatbot integrado de asistencia para pacientes (app móvil)',
            'Recordatorios y notificaciones push automáticas',
            'App móvil próximamente en tiendas de aplicaciones',
        ],
        gallery: [],
    },
    {
        id: 'nyxteam',
        title: 'NyxTeam',
        subtitle: 'Plataforma Web — Proyecto Académico',
        description:
            'Plataforma que conecta emprendedores, colaboradores, mentores e inversionistas para hacer realidad proyectos e ideas.',
        extendedDescription:
            'NyxTeam es una plataforma integral que conecta emprendedores con el talento que necesitan: colaboradores, mentores e inversionistas. Permite publicar ideas, encontrar perfiles alineados a cada visión y formar equipos multidisciplinarios. Es un proyecto académico desarrollado con Next.js y Firebase; algunos errores menores son intencionales, ya que el sistema fue limitado para controlar el consumo de lecturas de Firebase y evitar costos adicionales.',
        href: 'https://nyx-team.vercel.app/proyectos',
        technologies: ['next', 'firebase'],
        keyFeatures: [
            'Publica tu idea — comparte tu proyecto y el talento que necesitas',
            'Encuentra talento — conecta con colaboradores, mentores e inversionistas',
            'Forma tu equipo — equipo multidisciplinario con las habilidades perfectas',
            'Haz realidad tu proyecto — ejecuta con el equipo ideal y accede a recursos',
        ],
        gallery: [],
    },

    {
        id: 'myKumo',
        title: 'My Kumo',
        subtitle: 'Web Meterológica con Avatar 3D',
        description:
            'My Kumo es un dashboard del clima con diseño glassmorphism y actualizaciones en tiempo real. Incluye detección de ubicación inteligente, fondos dinámicos según el estado del clima y un avatar 3D integrado con animaciones fluidas. Llamado de APIs para datos meteorológicos, geolocalización y banderas de países.',
        extendedDescription:
            '',
        href: 'https://my-kumo.vercel.app/',
        technologies: ['react', 'three.js', 'GSAP', 'open-meteo', 'flags-api', 'lenis'],
        keyFeatures: [],
        gallery: [],
    },
];
