import Header from "@/components/header";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <main className="w-full">{children}</main>
      </div>
    </>
  );
}