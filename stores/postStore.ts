import { defineStore } from "pinia";
import type { Post, PostsResponse } from "~/types/post";

export const usePostStore = defineStore("post", {
  state: () => ({
    posts: [] as Post[],
    selectedPost: null as Post | null,
    lastFetched: 0,
  }),

  actions: {
    async fetchPosts() {
      const now = Date.now();
      const fifteenMinutes = 15 * 60 * 1000;

      if (this.posts.length && now - this.lastFetched < fifteenMinutes) return;

      try {
        const api = useApi();
        const res = await api.get<PostsResponse>("/posts");
        this.posts = res.posts;
        this.lastFetched = now;
      } catch (error: any) {
        console.error("Failed to fetch posts:", error);

        if (error?.statusCode === 404) {
          throw createError({
            statusCode: 404,
            statusMessage: "Posts not found",
          });
        }
        throw createError({
          statusCode: 500,
          statusMessage: "Something went wrong. Please try again later.",
        });
      }
    },

    async fetchPostById(id: number) {
      try {
        const api = useApi();
        const res = await api.get<Post>(`/posts/${id}`);
        this.selectedPost = res;
      } catch (error: any) {
        console.error("Failed to fetch post:", error);
        if (error?.statusCode === 404) {
          throw createError({
            statusCode: 404,
            statusMessage: "Posts not found",
          });
        }
        throw createError({
          statusCode: 500,
          statusMessage: "Something went wrong. Please try again later.",
        });
      }
    },
  },
});
