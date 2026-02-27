import Image from 'next/image';
import styles from './SobreMi.module.css';

export default function SobreMi() {
  return (
    <main className={styles.page}>
      
      {/* ── Encabezado Principal ── */}
      <div className={styles.header}>
        <h1 className={styles.title}>Sobre mí</h1>
        <a href="#experiencia" className={styles.experienceBtn}>
          Mi experiencia laboral ↓
        </a>
      </div>

      {/* ══ BLOQUE 1: ¿Quién soy? (izquierda) + íconos (derecha) ══ */}
      <section className={styles.block}>
        <div className={styles.blockInner}>
          <div className={styles.textSide}>
            <h2 className={styles.blockTitle}>¿Quién soy?</h2>
            <div className={styles.textBody}>
              <p>
                Soy ingeniera en Ciencias de la Computación con interés en el desarrollo de
                soluciones digitales que combinan tecnología, diseño y experiencia de usuario.
              </p>
              <p>
                Me gusta crear productos donde el código no solo funcione correctamente,
                sino que también sea claro, usable y visualmente coherente.
              </p>
              <p>
                Me gusta mucho dejar fluir mi creatividad, y es de donde nació mi deseo de
                desarrollar aplicaciones gamificadas e interactivas.
              </p>
            </div>
          </div>

          <div className={styles.iconsSide}>
            <Image
              src="/svg/tecno.svg"
              alt="Ilustración de tecnologías"
              width={420}
              height={311}
              className={styles.illustration}
            />
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ══ BLOQUE 2: ¿Qué me interesa crear? (imagen izquierda + texto derecha) ══ */}
      <section className={`${styles.block} ${styles.blockWithImage} ${styles.blockImageLeft}`}>
        <div className={styles.blockInner}>
          <div className={styles.imageSide}>
            <Image
              src="/svg/quiensoy.svg"
              alt="Ilustración de qué me interesa crear"
              width={460}
              height={348}
              className={styles.illustration}
            />
          </div>
          <div className={`${styles.textSide} ${styles.textSideRight}`}>
            <h2 className={`${styles.blockTitle} ${styles.titleRight}`}>¿Qué me interesa crear?</h2>
            <div className={`${styles.textBody} ${styles.textRight}`}>
              <p>
                Disfruto trabajar en proyectos web y móviles que buscan resolver problemas
                reales a través de interfaces bien pensadas y estructuras lógicas.
              </p>
              <p>
                Me atraen especialmente los proyectos donde puedo unir programación y
                diseño para construir experiencias digitales intuitivas y agradables de usar.
              </p>
              <p>
                Además, exploro proyectos creativos e interactivos como una forma de
                ampliar mi pensamiento técnico y mi creatividad, incluyendo una
                introducción al desarrollo de videojuegos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ══ BLOQUE 3: ¿Cómo trabajo? (texto izquierda + imagen derecha) ══ */}
      <section className={`${styles.block} ${styles.blockWithImage}`}>
        <div className={styles.blockInner}>
          <div className={styles.textSide}>
            <h2 className={styles.blockTitle}>¿Cómo trabajo?</h2>
            <div className={styles.textBody}>
              <p>
                Suelo comenzar entendiendo el problema antes de escribir código,
                analizando la información y la experiencia que tendrá el usuario final.
              </p>
              <p>
                Trabajo de manera iterativa, pasando entre diseño y desarrollo, buscando
                soluciones simples, claras y funcionales.
              </p>
              <p>
                Valoro el orden, la comunicación y la mejora continua en cada proyecto que
                desarrollo.
              </p>
            </div>
          </div>
          <div className={styles.imageSide}>
            <Image
              src="/svg/comotrabajo.svg"
              alt="Ilustración de cómo trabajo"
              width={420}
              height={311}
              className={styles.illustration}
            />
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ══ BLOQUE 4: ¿En qué me enfoco actualmente? (imagen izquierda + texto derecha) ══ */}
      <section className={`${styles.block} ${styles.blockWithImage} ${styles.blockImageLeft}`}>
        <div className={styles.blockInner}>
          <div className={styles.imageSide}>
            <Image
              src="/svg/focus.svg"
              alt="Ilustración de en qué me enfoco"
              width={420}
              height={311}
              className={styles.illustration}
            />
          </div>
          <div className={`${styles.textSide} ${styles.textSideRight}`}>
            <h2 className={`${styles.blockTitle} ${styles.titleRight}`}>¿En qué me enfoco actualmente?</h2>
            <div className={`${styles.textBody} ${styles.textRight}`}>
              <p>
                Disfruto trabajar en proyectos web y móviles que buscan resolver problemas
                reales a través de interfaces bien pensadas y estructuras lógicas.
              </p>
              <p>
                Me atraen especialmente los proyectos donde puedo unir programación y
                diseño para construir experiencias digitales intuitivas y agradables de usar.
              </p>
              <p>
                Además, exploro proyectos creativos e interactivos como una forma de
                ampliar mi pensamiento técnico y mi creatividad, incluyendo una
                introducción al desarrollo de videojuegos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ══ BLOQUE 5: Experiencia Laboral ══ */}
      <section id="experiencia" className={styles.experienceSection}>
        <div className={styles.blockInner}>
          <h2 className={styles.sectionHeading}>Experiencia Laboral</h2>
          
          <div className={styles.timeline}>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2025 - 2026</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.jobTitle}>Clínica Medihelp</h3>
                <h4 className={styles.jobRole}>Diseño y Desarrollo Frontend</h4>
                <p>Desarrollo del diseño UX/UI de la aplicación móvil y aplicación web correspondientes a un sistema médico integral.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2025 - 2026</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.jobTitle}>Banco de Loja</h3>
                <h4 className={styles.jobRole}>Pasante de Control de Calidad</h4>
                <p>Responsable de validar cambios e incidentes mediante pruebas funcionales, verificando la correcta resolución de problemas. Coordiné y convoqué a usuarios para la ejecución de pruebas, documenté resultados y apoyé la liberación segura de versiones, asegurando calidad, estabilidad y buena experiencia de usuario.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2025 - 2025</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.jobTitle}>Universidad Técnica Particular de Loja</h3>
                <h4 className={styles.jobRole}>Pasante de Investigación</h4>
                <p>Investigación para la creación de un marco de referencia relacionado a la gestión de la calidad de las universidades.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ══ BLOQUE 6: Mis Habilidades ══ */}
      <section className={styles.skillsSection}>
        <div className={styles.blockInner}>
          <h2 className={styles.sectionHeading}>Mis habilidades</h2>
          
          <div className={styles.skillsGrid}>
            <span className={styles.skillTag}>Diseño UX/UI</span>
            <span className={styles.skillTag}>Desarrollo de Software (Web, Móvil, Frontend)</span>
            <span className={styles.skillTag}>Comunicación</span>
            <span className={styles.skillTag}>Trabajo en equipo</span>
            <span className={styles.skillTag}>Bases de desarrollo en videojuegos (Unreal Engine)</span>
          </div>
        </div>
      </section>

    </main>
  );
}
