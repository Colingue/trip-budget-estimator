<template>
  <div class="layout">
    <Header></Header>
    <main class="content">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import Header from "../components/elements/Header.vue";
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
}
</style>
