"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import AIChatBox from "./AIChatBox";
import { Button } from "./ui/button";
import Link from "next/link";

interface ClientCardProps {
  client: {
    name: string;
  };
}

export default function ClientCard({ client }: ClientCardProps) {
  return (
    <>
      <Card className="cursor-pointer hover:shadow-lg transition-shadow dark:hover:shadow-md dark:hover:shadow-zinc-400">
        <CardHeader>
          <CardTitle className="text-2xl">Cliente: {client.name}</CardTitle>
          <CardDescription>
            Distribución de productos varios.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="m-5 flex flex-col gap-4">
          <Button size="lg" asChild>
              <Link href="/copilots/data_copilots/alcechnos">Open</Link>
            </Button>
            
          </div>
        </CardContent>
      </Card>
    </>
  );
}
