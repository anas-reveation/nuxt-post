<template>
  <div v-if="message" class="bg-red-100 text-red-700 p-4 rounded mb-4">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ message: string }>();
</script>
