import { useNavigate } from "react-router";
import AppBar from "../components/AppBar";
import { useAuth } from "../context/AuthContext";
import { useTopCharacter } from "../hooks/useTopCharacter";
import Loading from "../components/Loading";
import ErrorPage from "./Error";
import CharacterCard from "../components/CharacterCard";
import { ThumbsUpIcon } from "lucide-react";

export default function TopPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const { data, isLoading, error } = useTopCharacter();

  const handleLogOut = () => {
    logout();
    navigate("/login");
  };

  if (isLoading) return <Loading />;
  if (error || !data) return <ErrorPage />;
  return (
    <>
      <AppBar
        title="Mas votado"
        onBack={() => navigate(-1)}
        onLogout={handleLogOut}
      />
      <div className="max-w-md mx-auto mt-30 px-2 flex flex-col items-center gap-4">
        <CharacterCard image={data.image} name={data.name} />

        <div className="flex items-center gap-2 bg-white/90 px-4 py-2 border border-gray-100 rounded-full shadow-xl  transform transition-transform duration-300 ease-in-out hover:scale-105">
          <ThumbsUpIcon size={24} className="text-green-500" />
          <span className="text-lg font-bold text-gray-800">{data.likes}</span>
          <span className="text-sm text-gray-500">likes</span>
        </div>
      </div>
    </>
  );
}
