<script setup>
import { ref } from "vue";
import { useGlobalEvent } from "@/use/useGlobalEvent";
defineProps({
  src: String,
});
useGlobalEvent("keypress", (event) => {
  if (event.charCode !== 32) return;
  video.value.paused ? video.value.play() : video.value.pause();
});
const video = ref(null);
</script>

<template>
  <video :src="src" ref="video"></video>
  <div v-if="video">
    <button @click="video.play()" class="btn bg-blue-500 mr-4">play</button>
    <button @click="video.pause()" class="btn bg-blue-500 mr-4">pause</button>
  </div>
</template>

<style>
.btn {
  @apply px-6 py-1 text-white rounded;
}
</style>
