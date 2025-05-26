<template>
  <div class="p-6">
    <NuxtLink to="/posts" class="text-blue-500 underline"
      >← Back to Posts</NuxtLink
    >
    <div v-if="post" class="mt-4">
      <h1 class="text-2xl font-bold mb-2">{{ post.title }}</h1>
      <p class="text-gray-700">{{ post.body }}</p>
      <div class="mt-2 text-sm text-gray-500">
        Tags: {{ post.tags.join(", ") }}
      </div>
    </div>
    <div v-else>
      <p>Loading post...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import type { Post } from "~/types/post";

const route = useRoute();
const postStore = usePostStore();
const post = ref<Post | null>(null);

onMounted(async () => {
  await postStore.fetchPostById(Number(route.params.id));
  post.value = postStore.selectedPost;
});
</script>
