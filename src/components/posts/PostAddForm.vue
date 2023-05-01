<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">제목</label>
        <input id="title" type="text" v-model="title" />
        <label for="contents">본문</label>
        <textarea id="contents" type="text" rows="5" v-model="contents" />
        <p v-if="!isContentsValid">본문의 길이는 200자 이하여야 합니다.</p>
      </div>
      <button type="submit">생성</button>
    </form>
    <p>{{ logMessage }}</p>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { createPost } from "@/api/posts";
import routes from "@/routes";

const title = ref("");
const contents = ref("");
const logMessage = ref("");

const isContentsValid = computed(() => {
  return contents.value.length <= 200;
});

const submitForm = async () => {
  try {
    const response = await createPost({
      title: title.value,
      contents: title.content,
    });

    routes.push("/main");
    console.log(response);
  } catch (error) {
    logMessage.value = error.message;
  } finally {
    initForm();
  }
};

const initForm = () => {
  title.value = "";
  contents.value = "";
};
</script>
