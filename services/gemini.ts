
import { GoogleGenAI, Type } from "@google/genai";
import { PerformanceData } from "../types";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPerformanceEstimate = async (carModel: string, engine: string): Promise<PerformanceData> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Estime os ganhos de remapeamento para um ${carModel} com motor ${engine} no mercado europeu.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          originalBhp: { type: Type.NUMBER },
          tunedBhp: { type: Type.NUMBER },
          originalTorque: { type: Type.NUMBER },
          tunedTorque: { type: Type.NUMBER },
          efficiencyGain: { type: Type.STRING },
          stageInfo: { type: Type.STRING },
        },
        required: ["originalBhp", "tunedBhp", "originalTorque", "tunedTorque", "efficiencyGain", "stageInfo"]
      },
      systemInstruction: "É um preparador profissional solo de ECU (reprogramação de centralinas) da Zenkai em Portugal. Forneça estimativas realistas e seguras baseadas na sua experiência. O torque deve ser referido como Binário em Nm. Use a primeira pessoa do singular (Eu, meu, minha experiência). Responda estritamente em Português de Portugal (PT-PT), utilizando termos como 'ficheiros', 'binário', 'cavalos' e 'fiabilidade'.",
    },
  });

  return JSON.parse(response.text || "{}");
};

export const startExpertChat = () => {
  return ai.chats.create({
    model: "gemini-3-flash-preview",
    config: {
      systemInstruction: "É o 'ZenkaiBot', o assistente digital de um especialista solo em reprogramação (Zenkai) baseado em Portugal. Ele é um técnico altamente qualificado em BMW, Audi, VW, Mercedes e outras marcas europeias. Fale sobre Stage 1, Stage 2 e soluções eletrónicas. Refira-se ao técnico sempre no singular. Seja profissional e direto. Responda estritamente em Português de Portugal (PT-PT). Utilize 'binário' em vez de 'torque' e 'ficheiros' em vez de 'arquivos'.",
    },
  });
};
