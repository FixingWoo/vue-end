// 학습 노트 CRUD
import { posts } from "@/api/index";

function fetchPosts() {
  return posts.get("/");
}

function createPost(data) {
  return posts.post("/", data);
}

function deletePost(id) {
  return posts.delete(id);
}

export { fetchPosts, createPost, deletePost };
