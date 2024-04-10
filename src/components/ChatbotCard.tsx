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

interface ChatBotProps {
  chatbot: {
    name: string;
  };
}

export default function ChatBotCard({ chatbot }: ChatBotProps) {
    const [chatBoxOpen, setChatBoxOpen] = useState(false)
  return (
    <>
      <Card className="cursor-pointer hover:shadow-lg transition-shadow dark:hover:shadow-md dark:hover:shadow-zinc-400" onClick={() => setChatBoxOpen(true)}>
        <CardHeader>
          <CardTitle className="text-2xl">Chatbot: {chatbot.name}</CardTitle>
          <CardDescription>
            Obten información sobre tus datos en Facturapp.
          </CardDescription>
        </CardHeader>
        <CardContent>
        <Card>
                <CardHeader>
                  <CardDescription>
                    <b>Análisis:</b>Ventas e Inventario
                  </CardDescription>
                </CardHeader>
              </Card>
          <div className="m-5 flex flex-col gap-3">
            <Label>Token</Label>
            <p className="text-sm text-muted-foreground">eyJhbGciOiAiS2Vzc2VjciIifQ</p>
            <Button size="lg" onClick={() => setChatBoxOpen(true)}>
              Probar
            </Button>
          </div>
          
        </CardContent>
      </Card>
      <AIChatBox open={chatBoxOpen} onClose={()=>setChatBoxOpen(false)} />
    </>
  );
}
