"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { dark } from "@clerk/themes";
import ThemeToggleButton from "@/components/ThemeToogleButton";
import { useTheme } from "next-themes";

export default function NavBar() {
  const { theme } = useTheme();

  return (
    <>
      <div className="p-4 shadow">
        <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <Link href="#" className="flex items-center gap-1">
            <Image
              src={logo}
              alt="Bummi AI - Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="ml-2 border-spacing-1 bg-gradient-to-r from-green-400 to-slate-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent lg:text-2xl">
              Bummi AI
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            />
            <ThemeToggleButton />
            <Button>
              <Plus size={20} className="mr-2" />
              Add Data Product
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
