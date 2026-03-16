import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
});

export async function askFinancialAgent(prompt: string, history: any[] = []) {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction:
          "You are Expenzo Financial Agent, a helpful and professional financial advisor. You help users analyze their spending, set budgets, and give advice on complex financial questions. Keep your answers concise, practical, and encouraging."
      },
      history: history
    });

    const response = await chat.sendMessage({ message: prompt });
    return response.text;

  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
}