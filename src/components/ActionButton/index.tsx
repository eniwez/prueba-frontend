import type { ReactNode } from "react";

interface ActionButtonProps {
  onClick?: () => void;
  bgColor: string;
  size?: "sm" | "lg";
  children: ReactNode;
}

export function ActionButton({
  onClick,
  bgColor,
  size = "lg",
  children,
}: ActionButtonProps) {
  const sizes = size === "lg" ? "w-20 h-20" : "w-16 h-16";

  return (
    <button
      onClick={onClick}
      className={`${sizes} rounded-full ${bgColor} shadow-lg
        flex items-center justify-center
        hover:scale-110 transition`}
    >
      {children}
    </button>
  );
}
