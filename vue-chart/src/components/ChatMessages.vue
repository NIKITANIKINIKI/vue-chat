<template>
  <div class="chat-messages">
    <ChatMessage
      v-for="message in store.messages"
      :key="message.id"
      :message="message"
    />
  </div>
</template>

<script setup lang="ts">
import ChatMessage from "./ChatMessage.vue";
import { useChatStore } from "../store/chatStore";
const store = useChatStore();
</script>

<style scoped>
.chat-messages {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  padding-bottom: 140px;
}
</style>
