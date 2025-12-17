import { ChevronLeftIcon, LogOut } from "lucide-react";

interface AppBarProps {
  title: string;
  onBack?: () => void;
  onLogout?: () => void;
}
export default function AppBar({ title, onBack, onLogout }: AppBarProps) {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between bg-white p-4 shadow-lg z-50">
      <div className="flex items-center">
        {onBack && (
          <button
            onClick={onBack}
            className="p-2 rounded-full mr-2"
            aria-label="Volver"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
          </button>
        )}

        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      {onLogout && (
        <button
          onClick={onLogout}
          className="p-2 rounded-full"
          aria-label="Cerrar sesión"
        >
          <LogOut className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-700" />
        </button>
      )}
    </div>
  );
}
