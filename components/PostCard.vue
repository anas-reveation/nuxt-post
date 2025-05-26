<template>
  <div
    class="border rounded-xl p-4 hover:shadow-md transition cursor-pointer"
    @click="$router.push(`/posts/${post.id}`)"
  >
    <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
    <p class="text-gray-700">{{ post.body.slice(0, 100) }}...</p>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "~/types/post";

defineProps<{
  post: Post;
}>();
</script>
