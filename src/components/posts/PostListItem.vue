<template>
  <li>
    <div class="post-title">
      {{ props.post.title }}
    </div>
    <div class="post-contents">
      {{ props.post.contents }}
    </div>
    <div class="post-time">
      {{ props.post.createdAt }}
      <button type="button">수정</button>
      <button type="button" @click="deleteItem">삭제</button>
    </div>
  </li>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
import { deletePost } from "@/api/posts";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["refresh"]);

const deleteItem = async () => {
  if (confirm("삭제하시겠습니까?")) {
    await deletePost(props.post._id);
    emit("refresh");
  }
};
</script>
