import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

const Badge = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-md",
      className,
    )}
    {...props}
  >
    {children}
  </span>
);

export default Badge;
