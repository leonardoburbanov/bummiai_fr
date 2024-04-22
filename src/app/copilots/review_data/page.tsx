import BIReport from "@/components/BIReport";
import ClientCard from "@/components/ClientCard";
import { auth, currentUser } from "@clerk/nextjs";
export default async function CopilotsPage() {
  //   const { userId } = auth();
  //   const user = await currentUser();
  //   const userClients = {
  //     "100c32f7-20ad-4039-b547-1ff184fe9788": [
  //       "a999710a-25f1-4058-b545-a9c8d6e1dab4",
  //     ],
  //   };
  //console.log(user?.privateMetadata.externalId);

  const clients = [
    { id: "001", name: "alcechnos", category: "Copilot" },
  ];

  return (
      <BIReport />
  );
}
