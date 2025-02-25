<template>
  <div class="input-group">
    <label
      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
      :for="id"
      >{{ label }}</label
    >
    <input
      :id="id"
      type="number"
      v-model="selectedValue"
      :placeholder="placeholder"
      :required="required"
      :min="min"
      :max="max"
      @input="validateInput"
      :class="[
        { error: errorMessage },
        'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
      ]"
    />
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps<{
  id: string;
  label: string;
  defaultValue?: number;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  errorMessage?: string;
}>();

const selectedValue = defineModel("modelValue", {
  type: Number,
});

const errorMessage = ref<string | null>(null);

const validateInput = () => {
  if (props.required && !selectedValue.value) {
    errorMessage.value = props.errorMessage || "This field is required.";
  } else if (
    props.min !== undefined &&
    selectedValue.value &&
    selectedValue.value < props.min
  ) {
    errorMessage.value = `Value must be greater than or equal to ${props.min}.`;
  } else if (
    props.max !== undefined &&
    selectedValue.value &&
    selectedValue.value > props.max
  ) {
    errorMessage.value = `Value must be less than or equal to ${props.max}.`;
  } else {
    errorMessage.value = null;
  }
};

onMounted(() => {
  if (props.defaultValue !== undefined) {
    selectedValue.value = props.defaultValue;
  }
  validateInput();
});
</script>

<style scoped>
/* .input-group {
  display: flex;
  flex-direction: column;
} */

input {
  &.error {
    border: 1px solid red;
    outline: 3px solid rgb(250, 226, 226);
  }
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>
