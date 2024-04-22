import NavBar from "@/components/NavBar";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>

      <main className="m-auto max-w-7xl p-4">
        <div className="grid">
            <Card className="mt-1 mb-5 p-5 bg-slate-100">
                <CardTitle className="text-zinc-700">
                    alcechnos
                </CardTitle>
                <CardDescription className="text-zinc-500">
                    Distribución de productos varios.
                </CardDescription>
            </Card>
        </div>
        {children}
      </main>
    </>
  );
}
