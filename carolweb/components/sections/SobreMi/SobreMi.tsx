import Image from 'next/image';
import styles from './SobreMi.module.css';

export default function SobreMi() {
  return (
    <main className={styles.page}>

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

    </main>
  );
}
