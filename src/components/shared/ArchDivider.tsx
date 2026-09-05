import { cn } from "@/lib/utils";

/**
 * O arco é o código gráfico central da marca BnB Travel — usado aqui como
 * divisor discreto entre seções, sempre em baixa opacidade.
 */
export function ArchDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center", className)} aria-hidden="true">
      <svg width="48" height="62" viewBox="0 0 48 62" fill="none">
        <path
          d="M2.4 60V26.4C2.4 13.145 10.855 2.4 24 2.4C37.145 2.4 45.6 13.145 45.6 26.4V60"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gold"
        />
      </svg>
    </div>
  );
}
