// app/page.tsx
import DarkModeToggle from "@/components/DarkModeToggle"; 

export default function Page() {
  return (
    <main className="p-6 space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Dark Mode Toggle</h1>
        <DarkModeToggle />
      </header>
      <p>Activa el modo oscuro para ver el cambio de color.</p>
    </main>
  );
}
