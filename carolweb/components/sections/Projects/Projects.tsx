'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '@/data/projects';
import styles from './Projects.module.css';

// Registramos ScrollTrigger para las animaciones
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(`.${styles.card}`);

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          delay: i * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="proyectos" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Proyectos</h2>
        <p className={styles.subtitle}>Una selección de mis proyectos más recientes</p>

        <div className={styles.grid} ref={containerRef}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.content}>
                
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <h4 className={styles.projectSubtitle}>{project.subtitle}</h4>
                  </div>
                  
                  {project.id === 'transiloja' ? (
                    <a href={project.href || "#"} target="_blank" rel="noopener noreferrer" className={styles.visitLink}>
                      Ver en Drive ↗
                    </a>
                  ) : project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.visitLink}>
                      Visitar web ↗
                    </a>
                  ) : null}
                </div>

                <p className={styles.projectDesc}>{project.description}</p>
                
                <div className={styles.tags}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
