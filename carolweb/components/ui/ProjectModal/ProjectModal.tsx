'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ProjectModal.module.css';
import { ProjectData } from '@/data/projects';
import TechIcon from '@/components/ui/TechIcon/TechIcon';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cerrar al apretar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  // Resetear el índice del carrusel cuando cambia el proyecto
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!project) return null;

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        
        {/* ── Header con X ── */}
        <div className={styles.header}>
          <h2 className={styles.title}>{project.title}</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar modal">
            ×
          </button>
        </div>

        {/* ── Contenido Escroleable ── */}
        <div className={styles.contentScroll}>
          
          {/* Subtítulo y Descripción */}
          <div className={styles.textSection}>
            <h3 className={styles.subtitle}>{project.subtitle}</h3>
            <p className={styles.description}>{project.extendedDescription}</p>
          </div>

          {/* Tecnologías (Círculos) */}
          {project.technologies && project.technologies.length > 0 && (
            <div className={styles.techSection}>
              {project.technologies.map(tech => (
                <TechIcon key={tech} name={tech} />
              ))}
            </div>
          )}

          {/* Carrusel */}
          {project.gallery && project.gallery.length > 0 && (
            <div className={styles.carouselSection}>
              <h4 className={styles.carouselTitle}>{project.gallery[currentImageIndex].title}</h4>
              
              <div className={styles.carouselInteractive}>
                {project.gallery.length > 1 && (
                  <button className={styles.arrowBtn} onClick={handlePrev}>‹</button>
                )}
                
                <div className={styles.imageWrapper}>
                  <Image 
                    src={project.gallery[currentImageIndex].image}
                    alt={project.gallery[currentImageIndex].title}
                    fill
                    className={styles.carouselImg}
                  />
                </div>

                {project.gallery.length > 1 && (
                  <button className={styles.arrowBtn} onClick={handleNext}>›</button>
                )}
              </div>
            </div>
          )}

          {/* Funcionalidades Clave */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className={styles.featuresSection}>
              <h4 className={styles.featuresTitle}>Funcionalidades:</h4>
              <ul className={styles.featuresList}>
                {project.keyFeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
