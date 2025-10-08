import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">HACKATON WEB</h1>

        <h2 className="text-2xl font-semibold text-center sm:text-left">Integrantes</h2>

        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-lg">- Gabriela Zambrano Zuluaga</p>
          <p className="text-lg">- Juliana Ferreira Rojas</p>
          <p className="text-lg">- Angie Gutiérrez</p>
          <p className="text-lg">- Angel Peñaranda</p>
          <p className="text-lg">- Anderson Arevalo Mendoza</p>
        </div>

        


      </main>
    </div>
  );
}
