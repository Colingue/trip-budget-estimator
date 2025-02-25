<template>
  <div class="flex flex-1 items-center gap-4 mb-4">
    <EmojiContainer v-if="emoji" :emoji="emoji" />
    <p>{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
import EmojiContainer from "./EmojiContainer.vue";

defineProps(["emoji", "title"]);
</script>
