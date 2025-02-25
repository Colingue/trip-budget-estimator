<template>
  <div class="flex flex-col md:flex-row">
    <FieldTitle :emoji="emoji" :title="label" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import FieldTitle from "./FieldTitle.vue";

defineProps(["label", "emoji"]);
</script>

<style lang="scss">
.form-container {
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
