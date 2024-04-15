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
        
        //const content = "|    |   codigo_producto | descripcion_producto                        |   ventas |\n|---:|------------------:|:--------------------------------------------|------------------------:|\n|  0 |              0201 | BUDINERA ALUMINIO (800 UNI)                 |                1549     |\n|  1 |              2004 | ARROZ SHIVA 1KG (25 UNI)                    |                 965     |\n|  2 |              0179 | CAJA PIZZA 32 X 32 (50 UNI)                 |                 272     |\n|  3 |              0213 | CAJA MASAS BLANCA 500GR (100 UNI)           |                 197     |\n|  4 |              0178 | CAJA PIZZA 28 X 28 (50 UNI)                 |                 137     |\n|  5 |              2027 | AVENA INSTANTANEA DUKITA 1KG (10 UNI)       |                 118     |\n|  6 |              0191 | ROLLO BOLSA 24 X 35 KG                      |                 115.004 |\n|  7 |              2073 | CREMA PASTELERA 380G PONTEVEDRA (40 UNI)    |                 110     |\n|  8 |              0176 | DISCO D30 10 UNIDADES (400 UNI) D103001LR   |                 108     |\n|  9 |              0120 | ACEITUNAS RODAJAS REVELACION 1.4 KG (8 UNI) |                  80     |"
        
        return new Response(content, {
            headers: { "Content-Type": "text/plain" }
            //headers: { "Content-Type": "application/json" }
          });
    }catch(error){
        console.log(error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }   
}