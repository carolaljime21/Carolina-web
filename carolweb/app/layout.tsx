import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/ui/LoadingScreen/LoadingScreen";
import Header from "@/components/ui/Header/Header";
import Toast from "@/components/ui/Toast/Toast";
import LenisProvider from "@/components/ui/LenisProvider/LenisProvider";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carolina | Portafolio",
  description: "Portafolio profesional de Carolina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="antialiased">
        <LenisProvider>
          <LoadingScreen />
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Toast />

        </LenisProvider>
      </body>
    </html>
  );
}

