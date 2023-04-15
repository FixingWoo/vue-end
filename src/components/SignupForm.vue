<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id:</label>
      <input type="text" id="username" v-model="submitData.id" />
    </div>
    <div>
      <label for="password">pw:</label>
      <input type="text" id="password" v-model="submitData.pw" />
    </div>
    <div>
      <label for="nickname">nickname</label>
      <input type="text" id="nickname" v-model="submitData.nickname" />
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const submitData = ref({
  id: null,
  pw: null,
  nickname: null,
});

const submitForm = () => {
  console.log(submitData);
};
</script>

<style></style>
