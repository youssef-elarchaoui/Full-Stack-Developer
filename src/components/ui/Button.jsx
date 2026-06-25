import { motion } from "framer-motion";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-amber)]";

const variants = {
  primary:
    "bg-gradient-to-r from-[var(--color-amber)] to-[var(--color-amber-soft)] text-[#181008] hover:brightness-110 shadow-[0_0_0_1px_rgba(255,138,61,0.4),0_8px_30px_-8px_rgba(255,138,61,0.45)]",
  secondary:
    "bg-[var(--color-surface)] text-[var(--color-cream)] border border-[var(--color-border)] hover:border-[var(--color-amber)]/60 hover:text-[var(--color-amber-soft)]",
  ghost:
    "bg-transparent text-[var(--color-muted)] hover:text-[var(--color-cream)]",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  as = "a",
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  iconClassName = "",
  className = "",
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={16} strokeWidth={2} className={iconClassName} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={16} strokeWidth={2} className={iconClassName} />}
    </>
  );

  const MotionTag = motion[as === "a" ? "a" : "button"];

  return (
    <MotionTag
      href={as === "a" ? href : undefined}
      onClick={onClick}
      type={as === "button" ? type : undefined}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...props}
    >
      {content}
    </MotionTag>
  );
}
