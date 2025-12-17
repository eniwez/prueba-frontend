interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
}

export function Input({
  label,
  placeholder,
  type = "text",
  error,
  ...props
}: InputProps) {
  return (
    <div className="mb-4">
      {label && <label className="block mb-1">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        {...props}
        className={`border p-4 rounded-full w-full ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-blue-500"
        } outline-none`}
      />
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
}
