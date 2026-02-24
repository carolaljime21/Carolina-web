'use client';

import { useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi-completo' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [active, setActive] = useState('Inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    label: string,
    href: string
  ) => {
    e.preventDefault();
    setActive(label);
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      {/* ── Burger button (solo mobile) ── */}
      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* ── Nav ── */}
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={`${styles.link} ${active === label ? styles.active : ''}`}
            onClick={(e) => handleClick(e, label, href)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
