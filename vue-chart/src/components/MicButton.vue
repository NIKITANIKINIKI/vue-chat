<template>
  <button type="button" class="chat-input_mic" @click="toogleVoice">
    <component :is="listening ? Mic2 : Mic" />
  </button>
</template>

<script setup lang="ts">
import { Mic2, Mic } from "lucide-vue-next";
import { ref } from "vue";

const emit = defineEmits<{
  (e: "start"): void;
  (e: "stop", text: string): void;
}>();

const listening = ref(false);

function toogleVoice() {
    listening.value=!listening.value
}
</script>

<style scoped>
.chat-input_mic {
}
</style>
