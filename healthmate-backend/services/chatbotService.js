import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function processMessage(message) {
  console.log("User message received:", message);

  return {
    intent: "GREETING",
    parameters: {}
  };
}
