/*
 * Container — canonical layout wrapper.
 *
 * Every section on the site must use this component.
 * It enforces consistent horizontal padding and max-width constraints
 * so no section applies its own ad-hoc padding or max-width.
 *
 * Variants:
 *   default  → max-width 1200px  (page container)
 *   prose    → max-width 680px   (readable text columns — Tailwind max-w-prose ≈ 65ch)
 *   narrow   → max-width 480px   (forms, tight containers)
 *
 * Horizontal padding scale (mobile-first):
 *   < 640px   → px-6   (24px — --space-5)
 *   640–1024px → px-8  (32px — --space-6)
 *   > 1024px  → px-12  (48px — --space-7)
 */

type ContainerVariant = "default" | "prose" | "narrow";

interface ContainerProps {
  children: React.ReactNode;
  variant?: ContainerVariant;
  className?: string;
  as?: React.ElementType;
}

const variantClass: Record<ContainerVariant, string> = {
  default: "max-w-content",
  prose:   "max-w-prose",
  narrow:  "max-w-narrow",
};

export default function Container({
  children,
  variant = "default",
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={[
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        variantClass[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
