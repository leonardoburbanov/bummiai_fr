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
import { Dot, ToggleRight } from "lucide-react";
import { Toggle } from "./ui/toggle";

interface ChatBotProps {
  chatbot: {
    name: string;
  };
}

export default function ChatBotCard({ chatbot }: ChatBotProps) {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  const [toogleTouch, setToogleTouch] = useState("Connect");
  const [connection, setConnection] = useState(true);
  
  return (
    <>
      <Card
        className="cursor-pointer hover:shadow-lg transition-shadow dark:hover:shadow-md dark:hover:shadow-zinc-400"
        onClick={() => setChatBoxOpen(true)}
      >
        <CardHeader>
          <CardTitle className="text-2xl">Copilot: {chatbot.name}</CardTitle>
          <CardDescription>
            Obten información sobre tus datos en Facturapp.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Card>
            <CardHeader>
              <CardDescription>
                <b>Análisis: </b>Ventas e Inventario
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>API</CardDescription>
              <textarea
                className="w-auto text-xs"
                defaultValue="https://api.bummiai.com/facturapp/alcechnos/chatbot/001/chat"
              ></textarea>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                <b>Documentación:</b> https://api.bummiai.com/docs
              </p>
            </CardContent>
          </Card>

          <div className="m-5 flex flex-col gap-3">
            <Label>Token</Label>
            <textarea
              className="text-xs"
              defaultValue="83ec4f793dc9b26edbcf4be6758c391af21c2fc95eb0532e64d39104159e6998"
            ></textarea>
            <Button size="lg" onClick={() => setChatBoxOpen(true)}>
              Chatear
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription className="flex flex-col gap-3">
            <Label htmlFor="facturappUser">facturapp User</Label>
            <Input id="facturappUser" defaultValue={100} />
            <Label htmlFor="facturappPassword">facturapp Password</Label>
            <Input
              id="facturappPassword"
              defaultValue={12341234}
              type="password"
            />
            <Label htmlFor="fechaActualizacion">Fecha de actualización</Label>
            <Input
              id="fechaActualizacion"
              disabled
              defaultValue={"2024-04-11 00:00:00"}
            />
            {/* <Toggle
              variant="outline"
              onClick={() => {
                if (connection === true) {
                  setToogleTouch("Disconnect");
                  setConnection(false);
                } else {
                  setToogleTouch("Connect");
                  setConnection(true);
                }
              }}
            >
              {toogleTouch}
            </Toggle> */}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <div className="flex items-center">
            <b>Status:</b> <Dot color="#4ade80" size={30} /> {
              if(connection === true){
                setConnection(true)
              }else{
                setConnection(false)
              }
            }
          </div> */}
        </CardContent>
      </Card>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
