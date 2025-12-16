import { Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useAuthGuard } from "../hooks/useAuthGuard";
import Loading from "../components/Loading";

function AuthLayout() {
  const { isLoading } = useAuth();
  useAuthGuard();

  if (isLoading) {
    return <Loading />;
  }

  return <Outlet />;
}

export default AuthLayout;
