export interface ProjectFeature {
    title: string;
    image: string; // Ruta de la imagen para el carrusel
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
        technologies: ['react', 'next', 'firebase', 'expo'], // Nombres para cargar /svg/tech-[name].svg por ej.
        keyFeatures: [
            'Seguimiento de bus en tiempo real',
            'Notificaciones en tiempo real',
            'Planificación de viaje con detalle',
            'Personalización de la aplicación móvil desde el admin web',
        ],
        gallery: [
            {
                title: 'Funcionalidad 1',
                image: '/projects/transiloja-feat1.jpg', // placeholders
            },
            {
                title: 'Funcionalidad 2',
                image: '/projects/transiloja-feat2.jpg',
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
            'Sistema médico integral que consta de un Dashboard administrativo (Web) y una Aplicación Móvil para pacientes. Permite gestionar citas, acceder a recetas digitales y llevar un historial clínico. La app móvil incluye un chatbot para asistencia médica básica, además de notificaciones push para recordatorios de medicamentos.',
        technologies: ['react', 'next', 'expo'],
        keyFeatures: [
            'Gestión integral de recetas e historial',
            'Chatbot de asistencia para pacientes',
            'Recordatorios y notificaciones automáticas',
        ],
        gallery: [
            {
                title: 'Home / Dashboard',
                image: '/projects/medihelp-feat1.jpg',
            },
        ],
    },
];
