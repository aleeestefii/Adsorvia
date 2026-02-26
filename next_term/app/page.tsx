import Image from "next/image";
import Link from "next/link";
import CasoPropuesta from "./components/CasoPropuesta";

export default function Home() {
  return (
    <div className="bg-[#ebebeb]/40">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#16232A] px-4 py-20 text-white md:py-28">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto max-w-6xl md:px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="max-w-xl text-center lg:text-left">
              <span className="inline-block rounded-full border border-[#FF5B04]/60 bg-[#FF5B04]/10 px-4 py-1.5 text-sm font-medium text-[#FF5B04]">
                Eficiencia energética industrial
              </span>
              <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Recuperación térmica para frío sostenible
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#ebebeb] md:text-xl">
                Transformamos el calor residual de procesos industriales en capacidad de enfriamiento útil, reduciendo consumo eléctrico y emisiones en plantas como las de Arca Continental.
              </p>
              <p className="mt-4 text-base text-[#ebebeb]/80">
                Monitoreo en tiempo real, impacto medible y alineado a Bonos Verdes.
              </p>
            </div>
            <div className="shrink-0">
              <Image
                src="/logo-full.png"
                alt="NexTherm – Thermal Recovery"
                width={300}
                height={110}
                className="drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <CasoPropuesta />
      </section>

      <section
        id="dashboards"
        className="border-t border-[#ebebeb] bg-white px-4 py-12 md:px-6 md:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[#16232A] md:text-3xl">
            Dashboards
          </h2>
          <p className="mt-2 text-[#075056]">
            Accede a las vistas técnica y ejecutiva del sistema.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Link
              href="/dashboard-tecnico"
              className="flex min-h-[120px] flex-col rounded-xl border-2 border-[#ebebeb] bg-white p-6 shadow-sm transition hover:border-[#FF5B04] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
            >
              <span className="text-lg font-semibold text-[#16232A]">
                Dashboard técnico
              </span>
              <span className="mt-2 text-sm text-[#075056]">
                Para ingenieros y operadores: KPIs en tiempo real, energía
                recuperada vs diseño, balance energético, circuito hidráulico,
                alarmas y degradación del COP.
              </span>
              <span className="mt-4 inline-flex items-center text-[#FF5B04] font-medium">
                Abrir
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
            <Link
              href="/dashboard-ejecutivo"
              className="flex min-h-[120px] flex-col rounded-xl border-2 border-[#ebebeb] bg-white p-6 shadow-sm transition hover:border-[#FF5B04] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF5B04]"
            >
              <span className="text-lg font-semibold text-[#16232A]">
                Dashboard ejecutivo
              </span>
              <span className="mt-2 text-sm text-[#075056]">
                Para dirección y ESG: impacto energético y económico, reducción
                CO₂, programa 12 plantas y cumplimiento Bono Verde.
              </span>
              <span className="mt-4 inline-flex items-center text-[#FF5B04] font-medium">
                Abrir
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
