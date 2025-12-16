import { useAuthGuard } from "./hooks/useAuthGuard";

export default function App() {
   useAuthGuard();
  return <div>Hello, World!</div>;
}