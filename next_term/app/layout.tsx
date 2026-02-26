import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const basePath = process.env.NODE_ENV === "production" ? "/Adsorvia" : "";

export const metadata: Metadata = {
  title: "NexTherm – Thermal Recovery",
  description:
    "Eficiencia energética y recuperación térmica para generación de frío sostenible. Prototipo Arca Continental.",
  icons: { icon: `${basePath}/logo-icon.png` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Permite fuentes de Google si algún script las solicita (p. ej. en GitHub Pages) */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:;"
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased font-app">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
