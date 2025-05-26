export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  userId: number;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}
