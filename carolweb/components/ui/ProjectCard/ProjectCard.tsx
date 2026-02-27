'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './ProjectCard.module.css';
import { showComingSoon } from '@/components/ui/Toast/Toast';

export interface ProjectCardProps {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;         // ruta a /public — opcional
  href?: string;          // link externo — opcional
  onClick?: () => void;   // Opción para abrir modal directo
}

export default function ProjectCard({
  id,
  title,
  subtitle,
  description,
  image,
  href,
  onClick,
}: ProjectCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (id) {
      router.push(`/proyectos?id=${id}`, { scroll: false });
    } else if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      showComingSoon();
    }
  };

  return (
    <article className={styles.card}>
      {/* ── Imagen / placeholder ── */}
      <div className={styles.imgWrapper}>
        {image ? (
          <Image
            src={image}
            alt={`Preview de ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.img}
          />
        ) : (
          <div className={styles.imgPlaceholder} aria-label={`Preview de ${title}`} />
        )}
      </div>

      {/* ── Contenido ── */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
      </div>

      {/* ── Botón ── */}
      <button onClick={handleClick} className={styles.btn}>
        Ver Detalles
      </button>
    </article>
  );
}
