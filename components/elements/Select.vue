<template>
  <div class="select-group">
    <label :for="id">{{ label }}</label>
    <select
      :id="id"
      v-model="selectedValue"
      :required="required"
      :disabled="disabled"
      @change="validateInput"
      :class="{ error: errorMessage }"
    >
      <option value="" disabled hidden>{{ placeholder }}</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";

const props = defineProps<{
  id: string;
  label?: string;
  options: string[];
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  validateOnSubmit?: boolean;
}>();

const selectedValue = defineModel("modelValue", {
  type: String,
});

const emit = defineEmits(["update:modelValue"]);

const errorMessage = ref<string | null>(null);
const showError = ref(false);

const validateInput = () => {
  if (showError.value && props.required && !selectedValue.value) {
    errorMessage.value = props.errorMessage || "This field is required.";
  } else {
    errorMessage.value = null;
  }
};

watch(selectedValue, (newValue) => {
  emit("update:modelValue", newValue);
  validateInput();
});

onMounted(() => {
  if (props.defaultValue !== undefined) {
    selectedValue.value = props.defaultValue;
  }
  validateInput();
});

watch(
  () => props.validateOnSubmit,
  (newVal) => {
    if (newVal) {
      showError.value = true;
      validateInput();
    }
  }
);
</script>

<style scoped>
.select-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px;
  font-weight: 600;
}

select {
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  width: 100%;
}

select.error {
  border: 1px solid red;
  outline: 3px solid rgb(250, 226, 226);
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>
