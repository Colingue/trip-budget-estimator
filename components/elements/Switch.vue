<template>
  <div class="switch-container">
    <div class="switch-main">
      <label :for="id" class="switch-label">{{ label }}</label>
      <div
        :class="['switch', { 'switch-on': isChecked }]"
        @click="toggleSwitch"
      >
        <div class="switch-handle"></div>
      </div>
    </div>
    <p v-if="description" class="description">{{ description }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  id: string;
  label: string;
  modelValue: boolean;
  description?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const isChecked = ref(props.modelValue);

const toggleSwitch = () => {
  isChecked.value = !isChecked.value;
  emit("update:modelValue", isChecked.value);
};
</script>

<style scoped>
.switch-container {
  .switch-main {
    display: flex;
    margin-bottom: 10px;
  }

  .switch-label {
    margin-right: 1rem;
    font-weight: 600;
  }

  .switch {
    width: 42px;
    height: 26px;
    background-color: #d9d9d9;
    border-radius: 16px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .switch-on {
    background-color: #2c2c2c;
  }

  .switch-handle {
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 4px;
    transition: left 0.3s;
  }

  .switch-on .switch-handle {
    left: 20px;
  }
}
</style>
