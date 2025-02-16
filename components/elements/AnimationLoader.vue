<script setup lang="ts">
import { onMounted, ref } from "vue";
import { LottieAnimation } from "lottie-web-vue";
import animation from "~/assets/animation-loader.json";
let anim = ref();

onMounted(() => {
  setTimeout(() => {
    anim.value;
  }, 500);
});
</script>
<template>
  <LottieAnimation
    :animation-data="animation"
    :auto-play="true"
    :loop="true"
    :speed="1"
    class="animation-loader"
    ref="anim"
  />
</template>

<style scoped>
.animation-loader {
  width: 100px;
  height: 100px;
}
</style>
