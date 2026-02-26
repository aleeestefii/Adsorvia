"use client";

import { useState } from "react";

const cifrasClave = [
  { label: "Intensidad energética", valor: "0.24 MJ/L", sub: "de bebida" },
  { label: "Energía total México", valor: "~530 GWh/año", sub: "estimada" },
  { label: "12 plantas", valor: "~55%", sub: "volumen nacional" },
  { label: "Calor residual/planta", valor: "~4.74 GWh/año", sub: "estimado" },
  { label: "Chiller adsorción", valor: "50–100 kW", sub: "COP diseño 0.5" },
  { label: "CAPEX por planta", valor: "1.1 – 1.7 MUSD", sub: "" },
  { label: "Programa 12 plantas", valor: "13.9 – 21.1 MUSD", sub: "CAPEX consolidado" },
];

export default function CasoPropuesta() {
  const [verMasOpen, setVerMasOpen] = useState(false);

  return (
    <div id="caso" className="scroll-mt-6">
      <div className="mb-10">
        <span className="text-sm font-medium uppercase tracking-wider text-[#FF5B04]">
          Contexto
        </span>
        <h2 className="mt-2 text-2xl font-bold text-[#16232A] md:text-3xl lg:text-4xl">
          Caso y propuesta
        </h2>
        <p className="mt-3 max-w-2xl text-[#075056]">
          Resumen del proyecto de eficiencia energética y recuperación térmica para Arca Continental México.
        </p>
      </div>

      <div className="space-y-8">
        {/* Introducción - card */}
        <article className="rounded-2xl border border-[#ebebeb] bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#075056]/10 text-[#075056] font-semibold">1</span>
            <h3 className="text-xl font-semibold text-[#16232A]">
              Introducción
            </h3>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#16232A]">
            Arca Continental genera calor residual en calderas, compresores y
            procesos térmicos que normalmente se pierde al ambiente. En paralelo,
            sus plantas consumen electricidad para enfriamiento industrial. La
            propuesta es implementar, de forma escalable en plantas seleccionadas
            en México, un sistema de enfriamiento por adsorción de silicagel
            que transforme ese calor desperdiciado en frío útil, reduciendo el
            uso de compresores eléctricos y las emisiones asociadas.
          </p>
        </article>

        {/* Objetivos - card */}
        <article className="rounded-2xl border border-[#ebebeb] bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#075056]/10 text-[#075056] font-semibold">2</span>
            <h3 className="text-xl font-semibold text-[#16232A]">
              Objetivos del proyecto
            </h3>
          </div>
          <ul className="mt-4 space-y-3 text-[#16232A]">
            {[
              "Recuperar calor residual disponible en plantas seleccionadas.",
              "Convertir calor residual en capacidad de enfriamiento (kW/TR) mediante sistemas de adsorción.",
              "Reducir el consumo eléctrico asociado a enfriamiento por compresión mecánica.",
              "Disminuir emisiones indirectas (Scope 2) mediante sustitución parcial de chillers eléctricos.",
              "Medir kWh evitados, tCO₂e evitadas, TR instaladas y disponibilidad.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5B04]" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Justificación Bonos Verdes - card */}
        <article className="rounded-2xl border border-[#ebebeb] bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#075056]/10 text-[#075056] font-semibold">3</span>
            <h3 className="text-xl font-semibold text-[#16232A]">
              Justificación Bonos Verdes
            </h3>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#16232A]">
            El proyecto clasifica en <strong>Eficiencia Energética</strong> bajo marcos como los
            Green Bond Principles (ICMA) y guías mexicanas para Bonos Verdes:
            inversión en activos con beneficios ambientales medibles, verificables
            y reportables (ahorro energético, reducción de emisiones, mejora de
            indicadores de desempeño energético).
          </p>
        </article>

        {/* Cifras clave - grid de highlights */}
        <article className="rounded-2xl border border-[#ebebeb] bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF5B04]/10 text-[#FF5B04] font-semibold">4</span>
            <h3 className="text-xl font-semibold text-[#16232A]">
              Cifras clave
            </h3>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cifrasClave.map((c) => (
              <div
                key={c.label}
                className="rounded-xl border border-[#ebebeb] bg-[#ebebeb]/30 p-4"
              >
                <p className="text-sm font-medium text-[#075056]">{c.label}</p>
                <p className="mt-1 text-lg font-bold text-[#16232A]">{c.valor}</p>
                {c.sub && <p className="mt-0.5 text-xs text-[#075056]/80">{c.sub}</p>}
              </div>
            ))}
          </div>
        </article>

        {/* Ver más - acordeón */}
        <div className="rounded-2xl border border-[#ebebeb] bg-white shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={() => setVerMasOpen(!verMasOpen)}
            className="flex w-full min-h-[52px] items-center justify-between gap-4 px-6 py-4 text-left transition hover:bg-[#ebebeb]/40 focus:outline-none focus:ring-2 focus:ring-[#FF5B04] focus:ring-inset"
          >
            <span className="font-semibold text-[#16232A]">
              {verMasOpen ? "Ocultar detalle" : "Ver más (costos, certificaciones, OPEX)"}
            </span>
            <svg
              className={`h-5 w-5 shrink-0 text-[#075056] transition ${verMasOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {verMasOpen && (
            <div className="border-t border-[#ebebeb] bg-[#ebebeb]/20 px-6 py-5">
              <div className="grid gap-5 md:grid-cols-1">
                <div>
                  <p className="font-medium text-[#16232A]">Costos por área</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#16232A]">
                    Recuperación de calor (100–165 kUSD), almacenamiento (45–75 kUSD), chiller adsorción (195–325 kUSD), circuitos hidráulicos (100–170 kUSD), instrumentación (80–130 kUSD), eléctrico (40–75 kUSD), obras civiles (45–85 kUSD), ingeniería y puesta en marcha (110–175 kUSD), gestión, QA/QC, HSE y pruebas piloto (190–325 kUSD).
                  </p>
                </div>
                <div>
                  <p className="font-medium text-[#16232A]">Certificaciones y MRV</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#16232A]">
                    Alineación ISO 50001, ISO 14001, marco Bonos Verdes y verificación externa; costo considerado para el programa ≈ 650 kUSD.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-[#16232A]">OPEX financiado (5 años)</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#16232A]">
                    18–30 kUSD/año por planta (mantenimiento, calibración, monitoreo); total programa 1.1–1.8 MUSD a 5 años.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
