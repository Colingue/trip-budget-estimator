<template>
  <div class="form-container">
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
