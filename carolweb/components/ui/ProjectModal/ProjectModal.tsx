'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import styles from './ProjectModal.module.css';
import { ProjectData } from '@/data/projects';
import TechIcon from '@/components/ui/TechIcon/TechIcon';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

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

  const getDeviceClass = (device?: 'mobile' | 'web') => {
    if (device === 'mobile') return styles.mediaMobile;
    if (device === 'web') return styles.mediaWeb;
    return styles.mediaDefault;
  };

  const currentSlide = project.gallery[currentImageIndex];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* ── Botón cerrar (esquina) ── */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar modal">
          ×
        </button>

        {/* ── Contenido scrolleable ── */}
        <div className={styles.contentScroll}>

          {/* ── Bloque superior centrado ── */}
          <div className={styles.topBlock}>
            <h2 className={styles.title}>{project.title}</h2>
            <div className={styles.divider} />
            <h3 className={styles.subtitle}>{project.subtitle}</h3>
            <p className={styles.shortDesc}>{project.description}</p>
            <p className={styles.description}>{project.extendedDescription}</p>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visitBtn}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Visitar sitio web
              </a>
            )}
            {project.technologies && project.technologies.length > 0 && (
              <div className={styles.techSection}>
                {project.technologies.map(tech => (
                  <TechIcon key={tech} name={tech} />
                ))}
              </div>
            )}
          </div>

          {/* ── Bloque inferior: media + descripción ── */}
          {project.gallery && project.gallery.length > 0 && (
            <div className={styles.bottomBlock}>

              {/* Columna izquierda: video/imagen con flechas */}
              <div className={styles.mediaCol}>
                {project.gallery.length > 1 && (
                  <button className={styles.arrowBtn} onClick={handlePrev}>‹</button>
                )}

                <div className={styles.mediaArea}>
                  {currentSlide.mediaList ? (
                    <div className={styles.mediaListWrapper}>
                      {currentSlide.mediaList.map((media, idx) => (
                        <div key={idx} className={`${styles.mediaItem} ${getDeviceClass(media.device)}`}>
                          {media.type === 'video' ? (
                            <video
                              src={media.url}
                              controls autoPlay muted loop
                              style={{ objectFit: 'contain', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                            />
                          ) : (
                            <Zoom>
                              <Image src={media.url} alt={`Media ${idx}`} fill
                                style={{ objectFit: 'contain' }} />
                            </Zoom>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={`${styles.imageWrapper} ${getDeviceClass(currentSlide.device)}`}>
                      {currentSlide.video ? (
                        <video
                          src={currentSlide.video}
                          controls autoPlay muted loop
                          style={{ objectFit: 'contain', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                        />
                      ) : currentSlide.image && (
                        <Zoom>
                          <Image src={currentSlide.image} alt={currentSlide.title} fill
                            style={{ objectFit: 'contain' }} />
                        </Zoom>
                      )}
                    </div>
                  )}
                </div>

                {project.gallery.length > 1 && (
                  <button className={styles.arrowBtn} onClick={handleNext}>›</button>
                )}
              </div>

              {/* Columna derecha: título + descripción de la funcionalidad */}
              <div className={styles.featureCol}>
                <h4 className={styles.featureTitle}>{currentSlide.title}</h4>
                {currentSlide.description && (
                  <p className={styles.featureDesc}>{currentSlide.description}</p>
                )}
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
