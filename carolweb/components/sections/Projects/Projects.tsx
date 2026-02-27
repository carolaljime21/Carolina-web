'use client';

import { useRouter } from 'next/navigation';
import styles from './Projects.module.css';
import { showComingSoon } from '@/components/ui/Toast/Toast';

const projects = [
  {
    id: 'transiloja',
    title: 'TransiLoja',
    description:
      'Prototipo de aplicación orientada a la consulta de rutas, paradas y horarios del transporte público de la ciudad de Loja. El proyecto fue desarrollado con un enfoque centrado en el usuario, priorizando la claridad de la información y la usabilidad. Participé en el diseño UX/UI, desarrollo frontend y pruebas de calidad manuales, validando flujos, funcionalidades y consistencia visual para garantizar una experiencia intuitiva y confiable.',
  },
  {
    id: 'medihelp',
    title: 'MediHelp - Sistema Médico',
    description:
      'Sistema médico de Dashboard administrativo con gestión de citas, recetas, historiales clínicos + Aplicación móvil para pacientes con chatbot incluido junto a notificaciones y recordatorios.',
  },
];

export default function Projects() {
  const router = useRouter();
  return (
    <section id="proyectos" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>

        <div className={styles.list}>
          {projects.map(({ id, title, description }, i) => (
            <div key={title}>
              <article className={styles.projectRow}>
                <div className={styles.imgBox} aria-label={`Preview de ${title}`} />
                <div className={styles.info}>
                  <h3 className={styles.projectTitle}>{title}</h3>
                  <p className={styles.projectDesc}>{description}</p>
                </div>
                <button onClick={() => router.push(`/proyectos?id=${id}`)} className={styles.btnDetalle}>Ver Detalles</button>
              </article>
              {i < projects.length - 1 && <hr className={styles.divider} />}
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <button onClick={() => router.push('/proyectos')} className={styles.btnMas}>Ver más proyectos</button>
        </div>
      </div>
    </section>
  );
}
