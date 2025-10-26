<script setup lang="ts">
import ChatInput from "../components/ChatInput.vue";
import ChatMessages from "../components/ChatMessages.vue";
import DefaultText from "../components/DefaultText.vue";
import { useChatStore } from "../store/chatStore";

const store = useChatStore();
</script>

<template>
  <div class="chat">
    <ChatMessages />
    <DefaultText v-if="store.messages.length === 0" />
    <ChatInput />
  </div>
</template>

<style scoped>
.chat {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

}

</style>
