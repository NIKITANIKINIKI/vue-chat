<template>
  <div class="chat-form">
    <form class="chat-input" @submit.prevent="handleSubmit">
      <input
        v-model="message"
        type="text"
        placeholder="Введите сообщение..."
        class="chat-input__field"
      />
      <MicButton @start="onVoiceStart" @stop="onVoiceStop" />
      <button type="submit" class="chat-input__button">Отправить</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useChat } from "../hooks/useChat";
import MicButton from "./MicButton.vue";

const message = ref("");
const { sendMessage } = useChat();

async function handleSubmit() {
  if (!message.value.trim()) return;
  const res = await sendMessage(message.value);
  if (res) {
    message.value = "";
  }
}

function onVoiceStart() {}

function onVoiceStop() {}
</script>

<style scoped>
.chat-form {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 10px 0;
  z-index: 1000;
}

.chat-input {
  display: flex;
  height: 70px;
  gap: 5px;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  padding: 12px;
  margin: 0 auto;
}

.chat-input__field {
  flex: 1;
  padding: 10px 15px;
  outline: none;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.chat-input__field:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.chat-input__button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #3b82f6;
  text-align: center;
  cursor: pointer;
  color: white;
  outline: none;
  transition: background-color 0.2s, transform 0.1s;
}

.chat-input__button:hover {
  background-color: #2563eb;
}

.chat-input__button:active {
  transform: scale(0.98);
}
</style>
