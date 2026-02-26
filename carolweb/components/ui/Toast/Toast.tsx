'use client';

import { useEffect, useState } from 'react';
import styles from './Toast.module.css';

export type ToastHandle = { show: () => void };

let _show: (() => void) | null = null;

/** Llama esto desde cualquier botón: showComingSoon() */
export function showComingSoon() {
  _show?.();
}

export default function Toast() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    _show = () => {
      setExiting(false);
      setVisible(true);
      setTimeout(() => setExiting(true), 2800);
      setTimeout(() => setVisible(false), 3300);
    };
    return () => { _show = null; };
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.toast} ${exiting ? styles.exit : styles.enter}`} role="status">
      <span className={styles.icon}>🛠️</span>
      <span>Aún me encuentro trabajando en esto, ¡pronto lo verás!</span>
    </div>
  );
}
