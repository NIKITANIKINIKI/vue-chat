<template>
  <button type="button" class="chat-input_mic" @click="toogleVoice">
    <component :is="listening ? Mic2 : Mic" />
  </button>
  <VoiceVisualizer />
</template>

<script setup lang="ts">
import { Mic2, Mic } from "lucide-vue-next";
import { ref } from "vue";

const emit = defineEmits<{
  (e: "start"): void;
  (e: "stop"): void;
}>();

const listening = ref(false);

function toogleVoice() {
  listening.value = !listening.value;

  if (listening.value) {
    emit("start");
  } else {
    emit("stop");
  }
}
</script>

<style scoped>
.chat-input_mic {
}
</style>
