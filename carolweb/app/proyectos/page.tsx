import type { Metadata } from 'next';
import ProyectosPage from '@/components/sections/Proyectos/ProyectosPage';

export const metadata: Metadata = {
  title: 'Proyectos | Carolina',
  description: 'Selección de proyectos web y móviles desarrollados por Carolina.',
};

export default function Page() {
  return <ProyectosPage />;
}
