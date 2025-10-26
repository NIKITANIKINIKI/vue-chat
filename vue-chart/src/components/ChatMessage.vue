<template>
  <div class="chat-message-wrapper" :class="[`chat-message--${message.role}`]">
    <div class="chat-bubble">
      <p class="chat-text">
        {{ message.content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from "../store/chatStore";
defineProps<{ message: ChatMessage }>();
</script>

<style scoped>
.chat-message-wrapper {
  display: flex;
  margin: 10px 0;
  width: 100%;
  animation: fadeIn 0.3s ease-in;
}

.chat-message--user {
  justify-content: flex-end;
}

.chat-message--user .chat-bubble {
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: #fff;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 16px;
  align-self: flex-end;
}

.chat-message--assistant {
  justify-content: flex-start;
}

.chat-message--assistant .chat-bubble {
  background: #e5e7eb;
  color: #111827;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 16px;
  align-self: flex-start;
}

.chat-bubble {
  padding: 10px 14px;
  border-radius: 16px;
  max-width: 75%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  word-break: break-word;
  white-space: pre-wrap;
  line-height: 1.4;
  font-size: 15px;
  transition: all 0.3s ease;
}
.chat-text {
  margin: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
