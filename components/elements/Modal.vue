<template>
  <div class="modal-container" v-if="show">
    <div class="modal-overlay" @click="$emit('close')"></div>
    <div class="modal">
      <div class="modal-header">
        <p class="title">{{ title }}</p>
        <span class="close" @click="$emit('close')">✖️</span>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
});

defineEmits(["close"]);
</script>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.modal {
  width: 70%;
  max-width: 500px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-height: 80vh;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px;
}

.title {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
}

.close {
  cursor: pointer;
}

.modal-content {
  overflow-y: auto;
  flex: 1;
}
</style>
