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
            <a href="#proyectos" className={styles.btnPrimary}>Ver proyectos</a>
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

    </section>
  );
}
