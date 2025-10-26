import axios from "axios";
import { useChatStore } from "../store/chatStore";
import { ref } from "vue";

const errros = {
  noReply: "⚠️ Ответ не получен",
  apiError: "⚠️ Ошибка при обращении к AI API.",
};

export function useChat() {
  const { addMessage, messages } = useChatStore();
  const isLoading = ref<boolean>(false);

  async function sendMessage(message: string) {
    addMessage({
      role: "user",
      content: message,
      id: new Date().toISOString(),
    });

    isLoading.value = true;

    try {
      const prompt =
        messages
          .filter(
            (m) =>
              m.role !== "assistant" ||
              !Object.values(errros).includes(m.content)
          )
          .map((m) => `${m.role}:  ${m.content}`)
          .join("\n") + "\nassistant";

      const res = await axios.post("http://localhost:3000/chat", {
        inputs: prompt,
      });

      const reply = res.data.reply || errros.noReply;
      addMessage({
        role: "assistant",
        content: reply,
        id: new Date().toISOString(),
      });

      return message;
    } catch {
      addMessage({
        role: "assistant",
        content: errros.apiError,
        id: new Date().toISOString(),
      });

      return;
    } finally {
      isLoading.value = false;
    }
  }

  return { sendMessage, isLoading };
}
