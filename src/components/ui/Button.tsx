interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primario" | "secundario" | "outlined" | "danger" | "custom";
  size?: "small" | "large" | "extra-large";
  icon?: boolean;
  icono?: React.ReactNode;
  onlyIcon?: boolean;
}

export const Button = ({
  children,
  variant = "primario",
  size = "large",
  icon = false,
  icono,
  onlyIcon = false,
  className = "",
  ...props
}: Props) => {
  const baseStyles =
    "transition-all duration-200 ease-out rounded-md flex items-center justify-center cursor-pointer font-medium focus:outline-none focus:ring-2 focus:ring-opacity-50 active:scale-95";

  // Tamaños siguiendo estándares MIT Touch Lab
  const sizeVariants = {
    small: onlyIcon ? "w-8 h-8" : "h-8 px-3 text-sm",
    large: onlyIcon ? "w-9 h-9" : "h-9 px-4 text-base",
    "extra-large": onlyIcon ? "w-11 h-11" : "h-11 px-6 text-lg",
  };

  const spacing = onlyIcon ? "" : "gap-2";

  const variants = {
    primario: "bg-emerald-700 text-textbtn text-white ",
    secundario:
      "bg-accent text-text hover:bg-accent/90 focus:ring-accent/50 border border-accent/10",
    outlined:
      "bg-transparent text-primary border border-primary hover:bg-primary/5 focus:ring-primary/50",
    danger:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500/50 border border-red-500/10",
    custom: "",
  };

  return (
    <button
      className={`${baseStyles} ${sizeVariants[size]} ${variants[variant]} ${spacing} ${className}`}
      {...props}
    >
      {icon && <span>{icono}</span>}
      {!onlyIcon && children}
    </button>
  );
};
