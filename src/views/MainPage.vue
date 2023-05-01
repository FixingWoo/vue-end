<template>
  <div>
    <h1>메인</h1>
    <div v-if="isLoading">로딩중</div>
    <ul v-else>
      <PostListItem
        v-for="post in state.posts"
        :key="post._id"
        :post="post"
      ></PostListItem>
    </ul>
    <router-link to="/add" class="create-button"> + </router-link>
  </div>
</template>
<script setup>
import PostListItem from "@/components/posts/PostListItem.vue";
import { fetchPosts } from "@/api/posts";
import { onMounted, reactive } from "vue";

const state = reactive({
  posts: [],
  isLoading: false,
});

const fetchPostsData = async () => {
  state.isLoading = true;
  const { data } = await fetchPosts();
  state.isLoading = false;
  state.posts = data.posts;
};

onMounted(() => {
  fetchPostsData();
});
</script>
