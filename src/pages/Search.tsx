import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import AppBar from "../components/AppBar";
import { useAuth } from "../hooks/useAuth";
import {
  searchCharacterSchema,
  type SearchCharacterFormData,
} from "../api/character.api";
import { useSearchCharacters } from "../hooks/useSearchCharacters";
import SearchCharacterCard from "../components/SearchCharacterCard";
import Loading from "../components/Loading";

export default function SearchPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchCharacterFormData>({
    resolver: zodResolver(searchCharacterSchema),
  });

  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, error } = useSearchCharacters(searchTerm);

  const onSubmit = (data: SearchCharacterFormData) => {
    if (data.name.length >= 2) {
      setSearchTerm(data.name);
    }
  };

  const handleLogOut = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <AppBar
        title="Buscar"
        onBack={() => navigate(-1)}
        onLogout={handleLogOut}
      />

      <div className="max-w-md mx-auto mt-30 px-2 pb-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Buscar personaje..."
            {...register("name")}
            error={errors.name?.message}
          />
          <Button type="submit" className="w-full">
            Buscar
          </Button>
        </form>

        {isLoading && <Loading />}
        {error && (
          <p className="mt-4 text-red-500">Error al buscar personajes</p>
        )}
        {!isLoading && !error && searchTerm && data?.length === 0 && (
          <p className="mt-4 text-gray-500">No se encontraron resultados</p>
        )}

        <div className="flex flex-col gap-3 mt-4">
          {data?.map((character) => (
            <SearchCharacterCard
              key={character._id}
              character={character}
            />
          ))}
        </div>
      </div>
    </>
  );
}