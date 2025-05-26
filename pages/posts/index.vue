<template>
  <div class="p-6">
    <h2 class="text-3xl font-bold mb-4">All Posts</h2>
    <ErrorMessage :message="errorMessage" />
    <div v-if="!errorMessage" class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <PostCard v-for="post in postStore.posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PostCard from "~/components/PostCard.vue";
const postStore = usePostStore();
const errorMessage = ref("");

try {
  await postStore.fetchPosts();
} catch (error: any) {
  errorMessage.value = error.statusMessage || "Something went wrong.";
}
</script>
