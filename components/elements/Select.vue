<template>
  <div class="select-group">
    <label
      class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
      :for="id"
      >{{ label }}</label
    >
    <div class="custom-select-wrapper">
      <select
        :id="id"
        v-model="selectedValue"
        :required="required"
        :disabled="disabled"
        @change="validateInput"
        :class="{ error: errorMessage }"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled hidden>{{ placeholder }}</option>
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
      <span class="custom-arrow"></span>
    </div>
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
  display: inline-flex;
  flex-direction: column;
}

select.error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>
