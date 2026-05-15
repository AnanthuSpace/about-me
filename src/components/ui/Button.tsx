import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/cn";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 text-white shadow-[0_0_30px_-5px_rgba(139,92,246,0.55)] hover:shadow-[0_0_45px_-5px_rgba(6,182,212,0.7)]",
  ghost:
    "border border-white/15 bg-white/5 text-white backdrop-blur-md hover:border-white/30 hover:bg-white/10",
  outline:
    "border border-violet-400/40 bg-transparent text-violet-200 hover:bg-violet-500/10",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm sm:px-6 sm:py-3",
  lg: "px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base",
};

const baseClasses =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 disabled:pointer-events-none disabled:opacity-50";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<HTMLMotionProps<"button">, keyof CommonProps> & { as?: "button" };

type ButtonAsAnchor = CommonProps &
  Omit<HTMLMotionProps<"a">, keyof CommonProps> & {
    as: "a";
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...rest }, ref) => {
    const classes = cn(baseClasses, variants[variant], sizes[size], className);

    if (rest.as === "a") {
      const { as: _as, ...anchorProps } = rest as ButtonAsAnchor;
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={classes}
          {...(anchorProps as HTMLMotionProps<"a">)}
        >
          {children}
        </motion.a>
      );
    }

    const { as: _as, ...buttonProps } = rest as ButtonAsButton & {
      type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    };

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
        {...(buttonProps as HTMLMotionProps<"button">)}
      >
        {children}
      </motion.button>
    );
  },
);
Button.displayName = "Button";

export default Button;

export type { AnchorHTMLAttributes, ButtonHTMLAttributes };
