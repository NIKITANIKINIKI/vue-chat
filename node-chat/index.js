import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { InferenceClient } from "@huggingface/inference";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new InferenceClient(process.env.HF_TOKEN);

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.inputs;
    const chatCompletion = await client.chatCompletion({
      provider: "novita",
      model: "deepseek-ai/DeepSeek-V3.2-Exp",
      messages: [{ role: "system", content: "По умолчанию писать на русском!" }, { role: "user", content: userMessage }],
    });

    const reply =
      chatCompletion.choices[0]?.message?.content || "⚠️ Ответ не получен";
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка API" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
