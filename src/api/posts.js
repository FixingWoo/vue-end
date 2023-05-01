// 학습 노트 CRUD
import { posts } from "@/api/index";

function fetchPosts() {
  return posts.get("/");
}

function createPost(data) {
  return posts.post("/", data);
}

export default { fetchPosts, createPost };
