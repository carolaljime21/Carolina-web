import styles from './Habilidades.module.css';

export default function Habilidades() {
  return (
    <section id="habilidades" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Mis Habilidades</h2>
        
        <div className={styles.skillsGrid}>
          <span className={styles.skillTag}>Diseño UX/UI</span>
          <span className={styles.skillTag}>Desarrollo de Software (Web, Móvil, Frontend)</span>
          <span className={styles.skillTag}>Comunicación</span>
          <span className={styles.skillTag}>Trabajo en equipo</span>
          <span className={styles.skillTag}>Bases de desarrollo en videojuegos (Unreal Engine)</span>
        </div>
      </div>
    </section>
  );
}
