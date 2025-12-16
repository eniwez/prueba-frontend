import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";

export function useAuthGuard() {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    const loggedIn = Boolean(token);
    const publicPaths = ["/login", "/verify"];

    if (loggedIn && location.pathname === "/login") {
      navigate("/", { replace: true });
    }

    if (!loggedIn && !publicPaths.includes(location.pathname)) {
      navigate("/login", { replace: true });
    }
  }, [token, location.pathname, navigate, isLoading]);
}
