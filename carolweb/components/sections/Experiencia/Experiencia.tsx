'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Experiencia.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Experiencia() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current || !progressLineRef.current) return;

    // 1. Animar el título
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
        },
        duration: 0.6, 
        opacity: 1, 
        y: 0, 
        ease: 'power2.out'
      }
    );

    // 2. Animar la línea de progreso vertical según el scroll
    gsap.fromTo(progressLineRef.current,
      { scaleY: 0 },
      {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',     // Cuando el inicio del timeline llega al 70%
          end: 'bottom 70%',    // Cuando el final del timeline llega al 70%
          scrub: 1,             // Scrub suave para amarrarlo al scroll
        },
        scaleY: 1,
        ease: 'none',
        transformOrigin: 'top center'
      }
    );

    // 3. Animar cada item e iluminar su círculo cuando aparece
    const items = timelineRef.current.querySelectorAll(`.${styles.timelineItem}`);

    items.forEach((item) => {
      const dot = item.querySelector(`.${styles.timelineDot}`);
      
      // La tarjeta de contenido
      gsap.fromTo(item,
        { opacity: 0, x: -50 },
        {
          scrollTrigger: {
            trigger: item,
            start: 'top 75%', 
            toggleActions: 'play none none reverse', // Vuelve a ocultarse si subes
          },
          duration: 0.5,
          opacity: 1,
          x: 0,
          ease: 'power3.out'
        }
      );

      // El círculo se ilumina
      if (dot) {
        gsap.fromTo(dot,
          { 
            backgroundColor: 'var(--color-dark)', 
            borderColor: 'var(--color-primary)', 
            scale: 1, 
            boxShadow: '0 0 0px rgba(200, 144, 167, 0)' 
          },
          {
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
            backgroundColor: 'var(--color-primary)',
            scale: 1.3,
            boxShadow: '0 0 16px rgba(200, 144, 167, 0.8)',
            duration: 0.4,
            ease: 'back.out(1.7)'
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="experiencia" className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>
        <h2 className={styles.title} ref={titleRef}>Experiencia Laboral</h2>
        
        <div className={styles.timeline} ref={timelineRef}>
          {/* Línea de fondo tenue */}
          <div className={styles.timelineLineBg}></div>
          {/* Línea de progreso iluminada */}
          <div className={styles.timelineLineProgress} ref={progressLineRef}></div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>2025 - 2026</div>
            <div className={styles.timelineContent}>
              <h3 className={styles.jobTitle}>Clínica Medihelp</h3>
              <h4 className={styles.jobRole}>Diseño y Desarrollo Frontend</h4>
              <p>Desarrollo del diseño UX/UI de la aplicación móvil y aplicación web correspondientes a un sistema médico integral.</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>2025 - 2026</div>
            <div className={styles.timelineContent}>
              <h3 className={styles.jobTitle}>Banco de Loja</h3>
              <h4 className={styles.jobRole}>Pasante de Control de Calidad</h4>
              <p>Responsable de validar cambios e incidentes mediante pruebas funcionales, verificando la correcta resolución de problemas. Coordiné y convoqué a usuarios para la ejecución de pruebas, documenté resultados y apoyé la liberación segura de versiones, asegurando calidad, estabilidad y buena experiencia de usuario.</p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
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
  );
}
