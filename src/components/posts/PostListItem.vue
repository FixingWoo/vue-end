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
    </div>
  </li>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
