import { useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
const urlBummiBk = process.env.BUMMI_API;

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image
          src={logo}
          alt="Bummi AI - Logo"
          width={100}
          height={100}
          className="rounded-md"
        />
        <span className="border-spacing-1 bg-gradient-to-r from-green-400 to-slate-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent lg:text-5xl">
          Bummi AI
        </span>
      </div>
      <p className="max-w-prose text-center">
        AI Copilots tailored for retail, e-commerce, wholesale, and accounting{" "}
        <b>embedded in your SaaS</b>.
      </p>
      <Button size="lg" asChild>
        <Link href="/copilots/dashboard">Open</Link>
      </Button>
    </main>
  );
}
