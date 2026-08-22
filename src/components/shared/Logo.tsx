import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** "dark" para uso sobre fundos claros (texto navy) · "light" para uso sobre fundos navy (texto cream). */
  tone?: "dark" | "light";
}

/**
 * Reconstrução em código do logotipo oficial da BnB Travel (arquivo de marca:
 * /public/logo/bnb-travel-logo.svg), permitindo alternar a cor do texto por
 * contexto de fundo mantendo o arco sempre dourado — o mesmo código gráfico
 * do arquivo original não suporta variação de cor por estar rasterizado.
 */
export function Logo({ className, tone = "dark" }: LogoProps) {
  const textColor = tone === "light" ? "text-cream" : "text-navy";

  return (
    <span className={cn("inline-flex flex-col items-center leading-none", className)}>
      <span className="flex items-end">
        <span className={cn("font-display text-3xl", textColor)}>B</span>
        <svg
          width="20"
          height="26"
          viewBox="0 0 20 26"
          fill="none"
          className="mx-0.5 mb-[2px]"
          aria-hidden="true"
        >
          <path
            d="M1 25V11C1 5.477 5.477 1 11 1H9C14.523 1 19 5.477 19 11V25"
            stroke="#C6A77D"
            strokeWidth="1.6"
          />
        </svg>
        <span className={cn("font-display text-3xl", textColor)}>B</span>
      </span>
      <span
        className={cn(
          "mt-0.5 font-sans text-[0.55rem] font-medium tracking-widest2",
          textColor,
        )}
      >
        TRAVEL
      </span>
    </span>
  );
}
