interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
}

export function Button({ loading, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`py-4 w-full rounded-full bg-blue-500 text-lg text-white font-bold ${
        loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
      }`}
      disabled={loading || props.disabled}
    >
      {loading ? "Enviando..." : children}
    </button>
  );
}
