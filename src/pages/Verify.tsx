import { useNavigate, useSearchParams } from "react-router";
import { useEffect } from "react";
import { useVerify } from "../hooks/useVerify";
import { useAuth } from "../context/AuthContext";

export default function VerifyPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const { login } = useAuth();

  const verifyMutation = useVerify();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    verifyMutation.mutate(token, {
      onSuccess: (data) => {
        login(data.accessToken);
        navigate("/");
      },
      onError: () => {
        alert(`Login invalido o expirado. Por favor, inicia sesión de nuevo.`);
        navigate("/login");
      },
    });
  }, [token]);

  return (
    <div>
      <h1>Verify Page</h1>
      {verifyMutation.isPending && <p>Verificando...</p>}
      {verifyMutation.isError && (
        <p style={{ color: "red" }}>
          Error: {(verifyMutation.error as Error).message}
        </p>
      )}
      {verifyMutation.data && (
        <p>Access Token: {verifyMutation.data.accessToken}</p>
      )}
    </div>
  );
}
