'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './Hero.module.css';
import { showComingSoon } from '@/components/ui/Toast/Toast';

export default function Hero() {
  const router = useRouter();
  return (
    <section id="inicio" className={styles.hero}>

      {/* ── Hero principal ── */}
      <div className={styles.inner}>
        {/* Texto */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            Creo experiencias digitales donde el diseño y la tecnología se encuentran.
          </h1> 
          <p className={styles.subtitle}>
            Soy Carolina, ingeniera en Ciencias de la Computación. Desarrollo proyectos
            web y móviles con un enfoque en experiencia de usuario, funcionalidad y estética.
          </p>
          <div className={styles.buttons}>
            <button onClick={() => router.push('/proyectos')} className={styles.btnPrimary}>Ver proyectos</button>
            <a href="#contacto" className={styles.btnSecondary}>Contáctame</a>
          </div>
        </div>

        {/* Foto */}
        <div className={styles.photoWrapper}>
          <Image
            src="/carolina.jpg"
            alt="Foto de Carolina"
            width={320}
            height={320}
            className={styles.photo}
            priority
          />
        </div>
      </div>

      {/* ── Sobre mí ── */}
      <div className={styles.sobreMi}>
        {/* Título decorativo */}
        <div className={styles.sobreTitulo}>
          <span className={styles.lineaDeco} />
          <h2>Sobre mí</h2>
          <span className={styles.lineaDeco} />
        </div>

        {/* Textos */}
        <div className={styles.sobreTextos}>
          <p>
            Me interesa crear soluciones digitales claras, funcionales y visualmente atractivas.<br />
            Disfruto trabajar en proyectos donde el código no solo funcione, sino que también se sienta bien al usarlo.
          </p>
          <p>
            Actualmente me enfoco en desarrollo web, móvil y proyectos digitales creativos.
          </p>
        </div>

        <button onClick={() => router.push('/sobre-mi')} className={styles.btnPrimary}>Más sobre mí</button>
      </div>

    </section>
  );
}
