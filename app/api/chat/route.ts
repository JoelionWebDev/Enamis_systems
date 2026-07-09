import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a helpful assistant for ENAMIS SYSTEMS, a Nigerian electrical and smart technology company. You answer questions about our services:
- Electrical Installation (wiring, panel upgrades, power distribution)
- Solar & Inverter Systems (solar panels, inverters, battery storage)
- CCTV Installation (HD/4K cameras, night vision, remote monitoring)
- Access Control Systems (biometric, smart card, video intercom)
- Fire Alarm Systems (smoke detectors, heat sensors, emergency alerts)

Guidelines:
- Be friendly, professional, and concise.
- Help visitors understand our services and get a quote.
- For specific pricing or quotes, ask for their contact details and direct them to email enamissystems@gmail.com or the contact form.
- If you can't answer something, direct them to enamissystems@gmail.com.
- Never invent pricing or make guarantees.
- You're based in Lagos, Nigeria, serving clients nationwide.`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatBody {
  messages: ChatMessage[];
}

export async function POST(request: Request) {
  try {
    const body: ChatBody = await request.json();

    if (!body.messages?.length) {
      return NextResponse.json({ error: "Messages are required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Chat is not configured yet. Please add GEMINI_API_KEY to .env.local" },
        { status: 503 }
      );
    }

    const contents = body.messages.map((m: ChatMessage) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          generationConfig: {
            maxOutputTokens: 512,
            temperature: 0.7,
          },
        }),
      }
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error("Gemini API error:", res.status, errText);
      return NextResponse.json({ error: "Chat service error. Please try again." }, { status: 502 });
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      return NextResponse.json({ error: "No response from AI." }, { status: 502 });
    }

    return NextResponse.json({ message: text });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
