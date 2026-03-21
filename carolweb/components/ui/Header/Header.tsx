'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Inicio',     href: '/#inicio',    anchor: '#inicio' },
  { label: 'Sobre mí',  href: '/sobre-mi',   anchor: null },
  { label: 'Proyectos', href: '/proyectos', anchor: null },
  { label: 'Contacto',  href: '/contacto',   anchor: null },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [sectionActive, setSectionActive] = useState('Inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  // Si el pathname cambia a /sobre-mi reseteamos sectionActive a 'Inicio'
  // para que al volver a / quede correctamente en Inicio
  useEffect(() => {
    if (pathname === '/') setSectionActive('Inicio');
  }, [pathname]);

  const getActive = () => {
    if (pathname === '/sobre-mi') return 'Sobre mí';
    if (pathname === '/proyectos') return 'Proyectos';
    if (pathname === '/contacto') return 'Contacto';
    return sectionActive;
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    label: string,
    href: string,
    anchor: string | null
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    if (anchor) {
      // Link de sección: navegar a / y luego hacer scroll
      if (pathname !== '/') {
        router.push('/');
        // El scroll lo hará el navegador con el hash, usamos un timeout para esperar el render
        setTimeout(() => {
          const target = document.querySelector(anchor);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const target = document.querySelector(anchor);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
      setSectionActive(label);
    } else {
      // Link de página (Sobre mí)
      router.push(href);
    }
  };

  const active = getActive();

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
        {navLinks.map(({ label, href, anchor }) => (
          <a
            key={label}
            href={href}
            className={`${styles.link} ${active === label ? styles.active : ''}`}
            onClick={(e) => handleClick(e, label, href, anchor)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

