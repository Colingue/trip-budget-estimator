<template>
  <div class="select-group">
    <label :for="id">{{ label }}</label>
    <div class="custom-select-wrapper">
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
  display: flex;
  flex-direction: column;
}

.custom-select-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

select {
  width: 100%;
  padding: 10px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 4px;
  background-color: white;
  background-image: none;
  font-size: 16px;

  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
}

.custom-arrow {
  position: absolute;
  top: 50%;
  right: 10px;
  width: 0;
  height: 0;
  pointer-events: none;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333;
  transform: translateY(-50%);
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
