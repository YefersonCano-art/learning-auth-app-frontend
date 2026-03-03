import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primario" | "secundario" | "outlined" | "danger" | "custom";
  size?: "xs" | "sm" | "lg";
  icon?: boolean;
  icono?: React.ReactNode;
  onlyIcon?: boolean;
}

export const Button = ({
  children,
  variant = "primario",
  size,
  icon = false,
  icono,
  onlyIcon = false,
  className,
  ...props
}: Props) => {
  const buttonVariants = cva(
    "transition-all duration-200 ease-out rounded-md flex items-center justify-center cursor-pointer font-medium focus:outline-none focus:ring-2 focus:ring-opacity-50 active:scale-95",
    {
      variants: {
        variant: {
          primario: "bg-emerald-700 text-textbtn text-white ",
          secundario:
            "bg-accent text-text hover:bg-accent/90 focus:ring-accent/50 border border-accent/10",
          outlined:
            "border border-gray-300 text-text hover:bg-gray-50 focus:ring-gray-300/50",
          danger:
            "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600/50",
          custom: "",
        },
        size: {
          default: onlyIcon ? "w-8 h-8" : "h-8 px-3 text-base flex gap-2",
          xs: onlyIcon ? "w-6 h-6" : "h-6 px-2 text-xs flex gap-2",
          sm: onlyIcon ? "w-9 h-9" : "h-7 px-4 text-sm flex gap-2",
          lg: onlyIcon ? "w-11 h-11" : "h-9 px-6 text-base flex gap-2",
        },
      },

      defaultVariants: {
        variant: "primario",
        size: "default",
      },
    },
  );

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {icon && <span>{icono}</span>}
      {!onlyIcon && children}
    </button>
  );
};
