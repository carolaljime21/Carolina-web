import styles from './Services.module.css';

const services = [
  {
    title: 'Diseño de Interfaces UX/UI',
    description:
      'Diseño de interfaces intuitivas y visualmente coherentes, enfocadas en experiencia de usuario, usabilidad y claridad.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="4" y="8" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <line x1="18" y1="28" x2="18" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="12" y1="34" x2="24" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="30" y="22" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <line x1="33" y1="27" x2="41" y2="27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="33" y1="31" x2="39" y2="31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Desarrollo Web',
    description:
      'Desarrollo de páginas, sitios y aplicaciones web modernas, funcionales y adaptables a distintos dispositivos.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="4" y="8" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <line x1="4" y1="16" x2="44" y2="16" stroke="currentColor" strokeWidth="2.5" />
        <polyline points="20,34 20,22 28,22 28,34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="24" y1="22" x2="24" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <polyline points="20,17 24,13 28,17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Desarrollo Móvil',
    description:
      'Prototipos y aplicaciones móviles centradas en la experiencia del usuario y la correcta presentación de la información.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="14" y="4" width="20" height="40" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <line x1="14" y1="12" x2="34" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="14" y1="36" x2="34" y2="36" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="41" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Proyectos Creativos',
    description:
      'Exploración de proyectos interactivos y experimentales, incluyendo introducción al desarrollo de videojuegos.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="14" width="36" height="22" rx="5" stroke="currentColor" strokeWidth="2.5" />
        <line x1="17" y1="21" x2="17" y2="29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="13" y1="25" x2="21" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="31" cy="22" r="1.8" fill="currentColor" />
        <circle cx="35" cy="26" r="1.8" fill="currentColor" />
        <circle cx="31" cy="30" r="1.8" fill="currentColor" />
        <circle cx="27" cy="26" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Mi área de trabajo</h2>

        <div className={styles.grid}>
          {services.map(({ title, description, icon }) => (
            <article key={title} className={styles.card}>
              <div className={styles.iconWrap}>{icon}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
