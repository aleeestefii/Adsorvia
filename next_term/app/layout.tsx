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
  const blockGoogleFontsScript = `
(function() {
  var createElement = document.createElement.bind(document);
  document.createElement = function(tagName) {
    var el = createElement(tagName);
    if (tagName.toLowerCase() === 'link') {
      var origSetAttribute = el.setAttribute.bind(el);
      el.setAttribute = function(name, value) {
        if (name === 'href' && typeof value === 'string' && value.indexOf('fonts.googleapis.com') !== -1) return;
        return origSetAttribute(name, value);
      };
      var desc = Object.getOwnPropertyDescriptor(HTMLLinkElement.prototype, 'href');
      if (desc && desc.set) {
        var origSet = desc.set;
        Object.defineProperty(el, 'href', {
          set: function(v) {
            if (typeof v === 'string' && v.indexOf('fonts.googleapis.com') !== -1) return;
            origSet.call(this, v);
          },
          get: desc.get,
          configurable: true,
          enumerable: desc.enumerable
        });
      }
    }
    return el;
  };
})();
`;

  return (
    <html lang="es">
      <head>
        <script dangerouslySetInnerHTML={{ __html: blockGoogleFontsScript }} />
      </head>
      <body className="flex min-h-screen flex-col antialiased font-app">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
