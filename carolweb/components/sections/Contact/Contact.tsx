import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>¿Tienes algún proyecto en mente?</h2>
        <p className={styles.subtitle}>
          Me gusta colaborar en proyectos digitales donde el diseño y la tecnología van de la mano.
        </p>
        <div className={styles.btnGroup}>
          <a
            href="https://w.app/gtadsb"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnContactar}
          >
            Contactar
          </a>
          <a
            href="/Alvarado Carolina_cv_ES.pdf"
            download="Alvarado Carolina_cv_ES.pdf"
            className={styles.btnCV}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
