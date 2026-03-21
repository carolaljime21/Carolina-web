import type { Metadata } from 'next';
import ContactPage from '@/components/sections/ContactPage/ContactPage';

export const metadata: Metadata = {
  title: 'Contacto | Carolina',
  description: 'Ponte en contacto con Carolina Alvarado: correo, GitHub y LinkedIn.',
};

export default function ContactoPage() {
  return <ContactPage />;
}
