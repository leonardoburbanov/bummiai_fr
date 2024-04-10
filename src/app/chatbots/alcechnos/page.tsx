import ChatBotCard from "@/components/ChatbotCard";
import { auth, currentUser } from "@clerk/nextjs";
export default async function ChatbotsPage() {
  //   const { userId } = auth();
  //   const user = await currentUser();
  //   const userClients = {
  //     "100c32f7-20ad-4039-b547-1ff184fe9788": [
  //       "a999710a-25f1-4058-b545-a9c8d6e1dab4",
  //     ],
  //   };
  //console.log(user?.privateMetadata.externalId);

  const clientChatbots = [
    { id: "001", name: "Facturapp AI", category: "Chatbot" },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {clientChatbots.map((chatbot) => (
        <ChatBotCard chatbot={chatbot} key={chatbot.id} />
      ))}
      {clientChatbots.length === 0 && (
        <div className="col-span-full text-center">
          {"You don't have any products. Why don't you create one?"}
        </div>
      )}
    </div>
  );
}
