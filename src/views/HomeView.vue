<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<template>
  <main>
    <div class="hue-rotate-15">
      <el-image style="width: 100px; height: 100px" :src="url"  />

  </div>
  <div class="hue-rotate-90">
    <el-image style="width: 100px; height: 100px" :src="url" />

  </div>
    <TheWelcome />
  </main>
</template>
