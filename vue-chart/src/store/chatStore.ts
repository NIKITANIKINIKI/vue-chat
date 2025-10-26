import { defineStore } from "pinia";
import { computed, ref } from "vue";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  time: number;
}

export const useChatStore = defineStore("chat", () => {
  const messages = ref<ChatMessage[]>([]);

  function addMessage(message: Omit<ChatMessage, "time">) {
    messages.value.push({
      ...message,
      time: Date.now(),
    });
  }

  function clearMessages() {
    messages.value = [];
  }

  const lastMessages = (count = 10) => {
    computed(() => messages.value.slice(-count));
  };

  const messageCount = computed(() => messages.value.length);

  return {
    messages,
    addMessage,
    clearMessages,
    lastMessages,
    messageCount,
  };
});
