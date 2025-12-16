import { useForm } from "react-hook-form";
import { loginSchema, useLogin, type LoginFormData } from "../hooks/useLogin";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const loginMutation = useLogin();
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data, {
      onSuccess: (response) => {
        alert(`Simulacion de envio de magic link al correo: ${data.email}`);
        navigate(`/verify?token=${encodeURIComponent(response.loginToken)}`);
      },
      onError: () => {
        alert("Oops! Algo salió mal, por favor inténtalo de nuevo.");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Email"
        {...register("email")}
        error={errors.email?.message}
      />

      <Button type="submit" loading={loginMutation.isPending}>
        Enviar
      </Button>
    </form>
  );
}
