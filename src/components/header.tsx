"use client";

import ThemeToggle from "@/components/ThemeToggle/theme-toggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import ThemeToggleButton from "./ThemeToogleButton";

export default function Header() {
  const { theme } = useTheme();
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden lg:block">
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
        </div>
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
            }}
          />
        </div>
      </nav>
    </div>
  );
}
