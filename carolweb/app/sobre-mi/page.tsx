import type { Metadata } from 'next';
import SobreMi from '@/components/sections/SobreMi/SobreMi';

export const metadata: Metadata = {
  title: 'Sobre mí | Carolina',
  description: 'Conoce más sobre Carolina: quién soy, qué me interesa crear y cómo trabajo.',
};

export default function SobreMiPage() {
  return <SobreMi />;
}
