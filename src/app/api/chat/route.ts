const urlBummiBk = process.env.BUMMI_API;

export async function POST(req: Request) {
    try{
        const body = await req.json()
        const messages = body.messages
        const last_message = messages[messages.length - 1]
        const query = last_message.content
        const response = await fetch(`${urlBummiBk}/facturapp/alcechnos/chatbot/001/chat`, {
        method: 'POST',
        headers: {
            'Cookie': 'session=eyJ1c2VybmFtZSI6ICJ1c2VyMSIsICJkYXRhYmFzZSI6ICJDb25uZWN0aW9uIHRvIENvbXBhbnkgMSdzIERhdGFiYXNlIn0=.ZgwjfA.4nekhPs_apwpuQYIvyQCjyWtPfg',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({'query': query}),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const result = await response.json();
        const content = result.content
        return new Response(content, {
            headers: { "Content-Type": "text/plain" }
          });
    }catch(error){
        console.log(error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }   
}