interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
}

export function Button({ loading, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded bg-blue-500 text-white ${
        loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
      }`}
      disabled={loading || props.disabled}
    >
      {loading ? "Enviando..." : children}
    </button>
  );
}
