# NexTherm – Thermal Recovery (prototipo)

Prototipo web para el caso **Arca Continental**: eficiencia energética y recuperación térmica para generación de frío sostenible. Incluye una landing con resumen del caso y propuesta, y dos dashboards (técnico y ejecutivo) con datos de ejemplo.

## Contenido

- **Landing** (`/`): introducción, objetivos, justificación Bonos Verdes, cifras clave y enlaces a los dashboards.
- **Dashboard técnico** (`/dashboard-tecnico`): KPIs, energía recuperada vs diseño, balance energético, circuito hidráulico, producción frío vs demanda, alarmas y degradación del COP.
- **Dashboard ejecutivo** (`/dashboard-ejecutivo`): impacto energético y económico, intensidad energética, reducción CO₂, programa 12 plantas y cumplimiento Bono Verde.

Los datos mostrados son **inventados pero realistas** según el proyecto (prototipo sin backend).

## Desarrollo local

```bash
cd next_term
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). En desarrollo no se usa `basePath`, por lo que la ruta base es `/`.

## Build estático (para GitHub Pages)

```bash
cd next_term
npm install
npm run build
```

La salida está en la carpeta **`out/`**. El build usa `basePath: '/Adsorvia'` en producción para que la URL del sitio sea `https://<usuario>.github.io/Adsorvia/`.

## Publicar en GitHub Pages (Deploy from a branch)

1. En el repositorio, ve a **Settings → Pages**.
2. En **Build and deployment** > **Source** elige **Deploy from a branch**.
3. Elige la rama **gh-pages** y la carpeta **/ (root)**.
4. El workflow `.github/workflows/deploy-pages.yml` hace build de `next_term` y sube el contenido de `next_term/out` a la rama `gh-pages`. Tras cada push en `main` o `master`, se actualiza el sitio.
5. La URL del sitio será: `https://<usuario>.github.io/Adsorvia/`.

## Tecnologías

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- Recharts (gráficos)
- Export estático (`output: 'export'`) para hospedaje estático

## Paleta de colores (del documento)

- Naranja: `#FF5B04`
- Gris claro: `#ebebeb`
- Teal: `#075056`
- Oscuro: `#16232A`
