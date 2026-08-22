import { cn } from "@/lib/utils";

/**
 * O arco é o código gráfico central da marca BnB Travel — usado aqui como
 * divisor discreto entre seções, sempre em baixa opacidade.
 */
export function ArchDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center", className)} aria-hidden="true">
      <svg width="64" height="40" viewBox="0 0 64 40" fill="none">
        <path
          d="M2 38V20C2 9.5 10.5 1 21 1H43C53.5 1 62 9.5 62 20V38"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gold"
        />
      </svg>
    </div>
  );
}
