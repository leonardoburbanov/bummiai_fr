import { Payment } from '@/app/chatbots/alcechnos/columns'
import xlsx, { IJsonSheet } from 'json-as-xlsx'
const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    }]
export function downloadToExcel() {
    let columns:IJsonSheet[] = [
        {
            sheet: "Test",
            columns: [
                {label: "ID", value: 'id'},
                {label: "Status", value: 'status'},
                {label: "Email  ", value: 'email'},
                {label: "Amount", value: 'amount'},
            ],
            content:data
        }
    ]

    let settings = {
        fileName: "Test Excel",
    }

    xlsx(columns, settings)
}