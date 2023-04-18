<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id:</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">pw:</label>
      <input type="text" id="password" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname</label>
      <input type="text" id="nickname" v-model="nickname" />
    </div>
    <button type="submit">회원 가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { registerUser } from "@/api/index";

const username = ref("");
const password = ref("");
const nickname = ref("");
const logMessage = ref("");

const submitForm = async () => {
  const submitData = {
    username: username.value,
    password: password.value,
    nickname: nickname.value,
  };

  const { data } = await registerUser(submitData);
  console.log(data);
  logMessage.value = `${data.username}님이 가입되셨습니다.`;
  initForm();
};

const initForm = () => {
  username.value = "";
  password.value = "";
  nickname.value = "";
};
</script>

<style></style>
