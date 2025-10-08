import Image from "next/image";
import BarPage from "./punto1/reto1";
import ClickCounter from "./punto2/reto2";
import Link from "next/link";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left"> Punto 1 </h1>
        <BarPage />
        <h1 className="text-4xl font-bold text-center sm:text-left"> Punto 2 </h1>
        <ClickCounter />
        <h1 className="text-4xl font-bold text-center sm:text-left"> Punto 3 </h1>
        <Link
            href="/punto3"
            className="rounded-full border border-solid border text-white transition-colors flex items-center justify-center gap-2 hover:bg-blue-600 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            Jugar Tic-Tac
          </Link>
        <h1 className="text-4xl font-bold text-center sm:text-left"> Punto 7 </h1>
          <Link
            href="/punto7"
            className="rounded-full border border-solid border text-white transition-colors flex items-center justify-center gap-2 hover:bg-blue-600 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            Frases motivacionales
          </Link>

      </main>
    </div>
  );
}
