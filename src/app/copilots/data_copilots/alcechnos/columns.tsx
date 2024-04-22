"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]


export type Product = {
  codigo_producto: string
  descripcion_producto: string
  stock_actual_producto: string
}

export const product_columns: ColumnDef<Product>[] = [
  {
    accessorKey: "codigo_producto",
    header: "codigo_producto",
  },
  {
    accessorKey: "descripcion_producto",
    header: "descripcion_producto",
  },
  {
    accessorKey: "stock_actual_producto",
    header: "stock_actual_producto",
  },
]