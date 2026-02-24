'use client';

import styles from './Projects.module.css';
import { showComingSoon } from '@/components/Toast/Toast';

const projects = [
  {
    title: 'TransiLoja',
    description:
      'Prototipo de aplicación orientada a la consulta de rutas, paradas y horarios del transporte público de la ciudad de Loja. El proyecto fue desarrollado con un enfoque centrado en el usuario, priorizando la claridad de la información y la usabilidad. Participé en el diseño UX/UI, desarrollo frontend y pruebas de calidad manuales, validando flujos, funcionalidades y consistencia visual para garantizar una experiencia intuitiva y confiable.',
  },
  {
    title: 'MediHelp - Sistema Médico',
    description:
      'Sistema médico de Dashboard administrativo con gestión de citas, recetas, historiales clínicos + Aplicación móvil para pacientes con chatbot incluido junto a notificaciones y recordatorios.',
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>

        <div className={styles.list}>
          {projects.map(({ title, description }, i) => (
            <div key={title}>
              <article className={styles.projectRow}>
                {/* Imagen / preview */}
                <div className={styles.imgBox} aria-label={`Preview de ${title}`} />

                {/* Info */}
                <div className={styles.info}>
                  <h3 className={styles.projectTitle}>{title}</h3>
                  <p className={styles.projectDesc}>{description}</p>
                </div>

                {/* Botón */}
                <button onClick={showComingSoon} className={styles.btnDetalle}>Ver Detalles</button>
              </article>

              {/* Separador entre proyectos */}
              {i < projects.length - 1 && <hr className={styles.divider} />}
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className={styles.cta}>
          <button onClick={showComingSoon} className={styles.btnMas}>Ver más proyectos</button>
        </div>
      </div>
    </section>
  );
}
