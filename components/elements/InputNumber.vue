<template>
  <div class="input-group">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      type="number"
      v-model="selectedValue"
      :placeholder="placeholder"
      :required="required"
      :min="min"
      :max="max"
      @input="validateInput"
      :class="{ error: errorMessage }"
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
.input-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px;
  font-weight: 600;
}

input {
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;

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
