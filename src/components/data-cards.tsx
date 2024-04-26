"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface DataCardsProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataCards<TData, TValue>({
  columns,
  data,
}: DataCardsProps<TData, TValue>) {
  const dataArray = data.map((obj, index) => {
    return { id: index + 1, ...obj };
  });
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {dataArray.map((item, index) => (
          <CarouselItem key={item.id}>
            <div className="p-1">
              <Card className="h-[200px] w-[230px]">
                <CardContent>
                  {/* Existing card content logic here */}
                  {Object.entries(item)
                    .slice(1) // Skip the first entry (index 0)
                    .map(([key, value]) => (
                      <div className="flex-col pt-1 gap-0" key={key}>
                        <p className="text-xs">{key}</p>
                        <p>
                          {key.toLowerCase().includes("ventas") ? (
                            new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(value)
                          ) : (
                            value
                          )}
                        </p>
                      </div>
                    ))}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
