<script setup>
// import { ref } from "vue";
import CharacterCards from "@/components/CharacterCards.vue";
defineProps({
  msg: String,
});
// const ids = ref([99]);
</script>

<template>
  <div>
    <h1 class="p-8 text-4xl text-center">
      {{ msg }}
    </h1>
    <CharacterCards />
  </div>
</template>
