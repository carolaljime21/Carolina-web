'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Code, FolderOpen, Mail } from 'lucide-react';
import gsap from 'gsap';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Inicio', href: '#inicio', icon: Home },
  { label: 'Experiencia', href: '#experiencia', icon: Briefcase },
  { label: 'Habilidades', href: '#habilidades', icon: Code },
  { label: 'Proyectos', href: '#proyectos', icon: FolderOpen },
  { label: 'Contacto', href: '#contacto', icon: Mail },
];

export default function Header() {
  const pathname = usePathname();
  const [sectionActive, setSectionActive] = useState('Inicio');
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );
    }
  }, []);

  // Update active section based on intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const link = navLinks.find(l => l.href === `#${id}`);
            if (link) setSectionActive(link.label);
          }
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    label: string,
    href: string
  ) => {
    e.preventDefault();
    const id = href.substring(1);
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    setSectionActive(label);
  };

  return (
    <header className={styles.header} ref={headerRef}>
      <nav className={styles.nav}>
        {navLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            className={`${styles.link} ${sectionActive === label ? styles.active : ''}`}
            onClick={(e) => handleClick(e, label, href)}
            title={label}
          >
            <span className={styles.iconWrapper}>
              <Icon size={24} strokeWidth={2} />
            </span>
            <span className={styles.label}>{label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
