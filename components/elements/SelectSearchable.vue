<template>
  <div
    class="relative"
    :onkeydown="
      (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          optionsAreVisible = false;
        }
      }
    "
  >
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      :for="'coucou'"
      >{{ label }}</label
    >
    <button
      @click="toggleOptions"
      class="text-left bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      type="button"
    >
      {{
        (selectedValue &&
          selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1)) ||
        placeholder
      }}
    </button>

    <div
      v-if="optionsAreVisible"
      class="absolute z-10 mt-1 max-h-48 overflow-auto w-full bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600"
    >
      <input
        type="text"
        class="w-full p-2 text-sm border-b-2 sticky top-0 bg-white dark:bg-gray-800 dark:border-gray-600"
        placeholder="Search..."
        v-model="search"
        ref="searchInput"
      />
      <ul>
        <li
          v-for="option in filteredOptions"
          :key="option"
          @click="
            () => {
              selectedValue = option;
              optionsAreVisible = false;
              emit('update:modelValue', option);
            }
          "
          class="cursor-pointer text-gray-900 text-sm dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2"
        >
          {{ option.charAt(0).toUpperCase() + option.slice(1) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  label?: string;
  options: string[];
  defaultValue?: string;
  placeholder?: string;
}>();

const search = ref("");
const searchInput = ref<HTMLInputElement | null>(null);

const filteredOptions = computed(() =>
  props.options.filter((option) =>
    option.toLowerCase().includes(search.value.toLowerCase())
  )
);

const selectedValue = defineModel("modelValue", {
  type: String,
});

const emit = defineEmits(["update:modelValue"]);

const optionsAreVisible = ref(false);

const toggleOptions = () => {
  optionsAreVisible.value = !optionsAreVisible.value;
  if (optionsAreVisible.value) {
    nextTick(() => {
      searchInput.value?.focus();
    });
  }
};
</script>
