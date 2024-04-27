import { cn } from "@/lib/utils";
import { useChat } from "ai/react";
import { Aperture, Bot, ToggleRight, Trash, WandSparkles, XCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Message } from "ai";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useRef } from "react";
import logo from "@/assets/logo.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { DataTable } from "./data-table";
import { Product, product_columns } from "@/app/chatbots/alcechnos/columns";

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}


export default function AIChatBox({ open, onClose }: AIChatBoxProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
    setInput,
  } = useChat(); // /api/chat

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  });

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <div
      className={cn(
        "bottom-0 right-0 z-10 w-full max-w-[960px] p-1 xl:right-36",
        open ? "fixed" : "hidden"
      )}
    >
      <button onClick={onClose} className="mb-1 ms-auto block">
        <XCircle size={30} />
      </button>
      <div className="flex h-[620px] flex-col rounded border bg-background p-3 gap-3">
        <div className="mt-3 h-full overflow-y-auto px-3" ref={scrollRef}>
          {/* {JSON.stringify(messages)} */}
          {messages.map((message) => (
            //   <div key={message.id}>
            //   <p>{message.content}</p>
            <ChatMessage
              message={{
                role: message.role,
                //content: message.content.replace(/"([^"]+)"/g, "$1"),
                content: message.content
              }}
              key={message.id}
            />
          ))}
          {isLoading && lastMessageIsUser && (
            <ChatMessage
              message={{
                role: "assistant",
                content: "Thinking..."
              }}
            />
          )}
          {error && (
            <ChatMessage
              message={{
                role: "assistant",
                content: "Something went wrong please try again..."
              }}
            />
          )}
          {!error && messages.length === 0 && (
            <div className="flex flex-col h-full items-center justify-center gap-5">
              <div className="flex flex-col items-center justify-center gap-5 p-20">
              <Image
              src={logo}
              alt="Bummi AI - Logo"
              width={40}
              height={40}
              className="rounded-md"
            /> <p className="text-center">Hola soy SaaS AI, tu asistente de analítica sobre tus productos, ventas o inventario. Aquí tienes algunos ejemplos de preguntas que puedes hacerme.</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setInput("¿Cuáles son los 10 productos más vendidos?");
                  }}
                >
                  ¿Cuáles son los 10 productos más vendidos?
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setInput("¿Cuáles son los 10 productos de mayor stock?");
                  }}
                >
                  ¿Cuáles son los 10 productos de mayor stock?
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setInput("¿Qué productos tienen alertas?");
                  }}
                >
                  <p>¿Qué productos tienen alertas?</p>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setInput("¿Qué ramo tuvo más ventas en enero 2024?");
                  }}
                >
                  <p>¿Qué ramo tuvo más ventas en enero 2024?</p>
                </Button>
              </div>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="m-3 flex gap-3">
          <Button
            title="Clear chat"
            variant="outline"
            size="icon"
            className="shrink-0"
            type="button"
            onClick={() => setMessages([])}
          >
            <Trash width={15} height={15} />
          </Button>
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Pregunta algo..."
            ref={inputRef}
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}

import { ColumnDef, Row } from "@tanstack/react-table"
import { DataCards } from "./data-cards";


function markdownTableToJson(markdownTable: string): {
  data: any[];
  columns: ColumnDef<any>[];
  explanation: string
} {
  // Split the markdown table into rows
  const explanation = markdownTable.split("|")[0]
  const pre_rows = '|'+ markdownTable.split("|").slice(1).join('|')
  const rows = pre_rows.split("\n");
  console.log(rows)

  // Extract the keys from the first row
  const keys =
    rows
      .shift()
      ?.split("|")
      .map((key) => key.trim()) || [];

  // Initialize an empty array to store the JSON objects
  const jsonArray: any[] = [];

  // Initialize an empty array to store the columns definition
  const columns: ColumnDef<any>[] = [];

  // Iterate over each key and create a column definition
  keys.forEach((key, index) => {
    let key_name = key;
    if (index != 0) {
      console.log(index);
      console.log(key);
      key_name = key.toLowerCase().replace(/\s+/g, "_");
      if (key_name != "") {
        const new_colum = {
          accessorKey: key_name, // Convert to lowercase and replace spaces with underscores
          header: key,
          cell: ({ row }: { row: any }) => {
            const key_value = parseFloat(row.getValue(key_name));

            // Format the amount as a dollar amount
            const formatted = key.toLowerCase().includes("ventas")
              ? new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(key_value)
              : row.getValue(key_name).toString();

            return <div>{formatted}</div>;
          },
        };
        columns.push(new_colum);
      }
    }
  });

  // Iterate over each row and convert it to JSON
  rows.forEach((row) => {
    const columns = row.split("|").map((col) => col.trim());

    // Create the JSON object using the extracted keys
    const jsonObject: any = {};
    keys.forEach((key, index) => {
      jsonObject[key.toLowerCase().replace(/\s+/g, "_")] = columns[index];
    });

    jsonArray.push(jsonObject);
  });

  // Filter out rows with separator lines (assuming separator starts with '------')
  const filteredArray = jsonArray.filter(
    (item) =>
      !Object.values(item).some((value: any) =>
        value.toString().startsWith("------")
      )
  );

  return { data: filteredArray, columns, explanation: explanation };
}


function ChatMessage({
  message: { role, content },
}: {
  message: Pick<Message, "role" | "content">;
}) {
  const { user } = useUser();
  const isAiMessage = role === "assistant";
  const isTableFlag = content.includes("----------");
  let contentData: any
  if(isTableFlag){
    contentData = markdownTableToJson(content)
  }
  
  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isAiMessage ? "me5 justify-start" : "ms-5 justify-end"
      )}
    >
      {isAiMessage && <Bot className="mr-2 shrink-0" />}
      {isTableFlag ? (
        //<DataTable columns={contentData.columns} data={contentData.data}/>
        <DataCards columns={contentData.columns} data={contentData.data} />
      ) : (
        <p
          className={cn(
            'whitespace-pre-line rounded-md border px-3 py-2',
            isAiMessage ? 'bg-background' : 'bg-primary text-primary-foreground'
          )}
        >
          {content}
        </p>
      )}
      {!isAiMessage && user?.imageUrl && (
        <Image
          src={user.imageUrl}
          alt="User image"
          width={40}
          height={40}
          className="ml-2 h-10 w-10 rounded-full object-cover"
        />
      )}
    </div>
  );
}
