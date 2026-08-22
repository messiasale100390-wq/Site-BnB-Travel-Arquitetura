import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionEyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("label-eyebrow", className)}>{children}</p>;
}
