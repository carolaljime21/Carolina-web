'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ProjectCard from '@/components/ui/ProjectCard/ProjectCard';
import ProjectModal from '@/components/ui/ProjectModal/ProjectModal';
import { showComingSoon } from '@/components/ui/Toast/Toast';
import { projectsData, ProjectData } from '@/data/projects';
import styles from './ProyectosPage.module.css';

function ProyectosContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const idParam = searchParams.get('id');

  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Sync state with URL
  useEffect(() => {
    if (idParam) {
      const proj = projectsData.find(p => p.id === idParam);
      if (proj) setSelectedProject(proj);
    } else {
      setSelectedProject(null);
    }
  }, [idParam]);

  const closeModal = () => {
    setSelectedProject(null);
    // Remove query param without scrolling
    router.replace('/proyectos', { scroll: false });
  };

  return (
    <>
      <div className={styles.inner}>

        {/* ── Encabezado ── */}
        <div className={styles.header}>
          <h1 className={styles.title}>Mis proyectos</h1>
          <p className={styles.subtitle}>
            Una selección de proyectos donde aplico diseño, desarrollo y criterio técnico
            para crear soluciones digitales funcionales y claras.
          </p>
        </div>

        {/* ── Grid de cards ── */}
        <div className={styles.grid}>
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id} 
              id={project.id}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              image={project.image}
              href={project.href}
              onClick={() => router.push(`/proyectos?id=${project.id}`, { scroll: false })} 
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <div className={styles.cta}>
          <button onClick={showComingSoon} className={styles.btnMas}>
            Ver más proyectos
          </button>
        </div>

      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
}

export default function ProyectosPage() {
  return (
    <main className={styles.page}>
      <Suspense fallback={<div className={styles.inner}>Cargando proyectos...</div>}>
        <ProyectosContent />
      </Suspense>
    </main>
  );
}

