'use client';

import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Ocultar la pantalla de carga al terminar la animación (2.5s + 0.5s fade)
    const timer = setTimeout(() => {
      setHidden(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.overlay} ${hidden ? styles.hidden : ''}`}>
      <p className={styles.label}>Entrando al portal</p>

      <span className={styles.loader} />

      <div className={styles.dots} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
