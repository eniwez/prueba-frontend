import { useAuthGuard } from "../hooks/useAuthGuard";

export default function HomePage() {
   useAuthGuard();
  return <div>Hello, World!</div>;
}