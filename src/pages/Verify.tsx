import { useNavigate, useSearchParams } from "react-router";
import { useEffect } from "react";
import { useVerify } from "../hooks/useVerify";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/Loading";

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
        navigate("/error");
      },
    });
  }, [token]);

  return <Loading />;
}
