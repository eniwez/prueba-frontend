import { useForm } from "react-hook-form";
import { useAuth } from "./context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();

  const { register, handleSubmit } = useForm<LoginFormData>();

  interface LoginFormData {
    email: string;
  }

  const onSubmit = (data: LoginFormData): void => {
    login("mi-token-de-prueba");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" {...register("email")} />
      <button type="submit">Enviar</button>
    </form>
  );
}
