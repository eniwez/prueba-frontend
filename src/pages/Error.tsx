
import errorImage from "../assets/error.png";

export default function ErrorPage({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-y-6">
      <div className="flex justify-center items-center">
        <img
          src={errorImage}
          alt="Rick and Morty Error"
          className="w-auto h-80 "
        />
      </div>
      <h1 className="text-2xl font-bold">
        Oops! {message || "Algo salió mal"}
      </h1>
      <button
        onClick={() => (window.location.href = "/")}
        className="bg-black rounded-full py-2 px-4 text-white font-bold text-md"
      >
        Volver al inicio
      </button>
    </div>
  );
}
