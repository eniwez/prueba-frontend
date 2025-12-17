import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import backgroundLogin from "../assets/background-login.jpg";
import logoImage from "../assets/logo.png";
import { loginSchema, type LoginFormData } from "../api/auth.api";
import { LoginSuccessPage } from "./LoginSuccess";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const loginMutation = useLogin();

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  if (loginMutation.isSuccess && loginMutation.data) {
    return (
      <LoginSuccessPage
        email={loginMutation.variables?.email ?? ""}
        loginToken={loginMutation.data.loginToken}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="flex justify-center items-center mb-10">
            <img
              src={logoImage}
              alt="Rick and Morty"
              className="w-auto h-30 "
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              placeholder="example@gmail.com"
              {...register("email")}
              error={errors.email?.message}
            />
            <Button
              type="submit"
              loading={loginMutation.isPending}
              className="w-full"
            >
              Ingresar
            </Button>
          </form>
        </div>
      </div>
      <div
        className="hidden md:block md:w-6/10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundLogin})`,
        }}
      ></div>
    </div>
  );
}
