import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>¿Tienes algún proyecto en mente?</h2>
        <p className={styles.subtitle}>
          Me gusta colaborar en proyectos digitales donde el diseño y la tecnología van de la mano.
        </p>
        <a
          href="https://w.app/gtadsb"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnContactar}
        >
          Contactar
        </a>
      </div>
    </section>
  );
}
