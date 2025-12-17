import { CircleCheck } from "lucide-react";
import { useNavigate } from "react-router";

interface Props {
  loginToken: string;
  email: string;
}

export function LoginSuccessPage({ loginToken, email }: Props) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-y-6">
      <div className="flex justify-center items-center">
        <CircleCheck size={80} className="text-green-500" />
      </div>
      <h1 className="text-2xl font-bold">Revisa tu correo</h1>
      <p>
        Te enviamos un enlace de acceso <strong>{email}</strong>.
      </p>
      <div className="w-full max-w-md rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm">
        <p className="mb-3 text-yellow-800 font-medium"> Modo desarrollo</p>

        <p className="mb-4 text-yellow-700 ">
          Este botón simula el enlace de acceso que debería enviarse al correo {email} y expira en 10 minutos
          <br />
          <span className="mt-2 block font-mono text-xs text-yellow-800 break-all">
            {loginToken}
          </span>
        </p>

        <button
          onClick={() =>
            navigate(`/verify?token=${encodeURIComponent(loginToken)}`)
          }
          className="w-full rounded-md bg-yellow-500 px-4 py-2 text-white font-semibold hover:bg-yellow-600 transition"
        >
          Simular clic del enlace mágico
        </button>
      </div>
    </div>
  );
}
