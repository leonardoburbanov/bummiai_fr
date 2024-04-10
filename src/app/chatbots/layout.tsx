import NavBar from "@/components/NavBar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />

      <main className="m-auto max-w-7xl p-2">
        <div className="grid">
          <Card className="mt-5 mb-1 p-1 bg-slate-100">
            <CardHeader>
              <CardTitle className="text-zinc-700">Facturapp</CardTitle>
            </CardHeader>
            <CardDescription className="text-zinc-500">
            </CardDescription>
          </Card>
        </div>
        {children}
      </main>
    </>
  );
}
