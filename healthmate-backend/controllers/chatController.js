import { processMessage } from "../services/chatbotService.js";

export async function handleChat(req, res) {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      reply: "Message is required"
    });
  }

  try {
    const aiResult = await processMessage(message);

    let reply = "Sorry, I didn’t understand that.";

    if (aiResult.intent === "GREETING") {
      reply = "Hello! How can I help you today?";
    } else if (aiResult.intent === "HELP") {
      reply = "You can talk to me about medicines and health reminders.";
    }

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      reply: "Something went wrong"
    });
  }
}
