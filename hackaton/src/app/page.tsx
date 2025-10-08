import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/punto3"
            className="rounded-full border border-solid border-green-500 bg-green-500 text-white transition-colors flex items-center justify-center gap-2 hover:bg-green-600 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            Jugar Tic-Tac-Toe
          </Link>
          <Link
            href="/punto7"
            className="rounded-full border border-solid border-orange-500 bg-orange-500 text-white transition-colors flex items-center justify-center gap-2 hover:bg-orange-600 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
           Ver Quotes Inspiradoras
          </Link>
        </div>
  );
}
