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
    <button :disabled="!isUserNameValid || !password" type="submit">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script setup>
import { computed, ref } from "vue";
import { loginUser } from "@/api/index";
import { validateEmail } from "@/utils/validation";

const username = ref("");
const password = ref("");
const logMessage = ref("");

const isUserNameValid = computed(() => {
  return validateEmail(username.value) ? true : false;
});

const submitForm = async () => {
  try {
    // 비즈니스 로직
    const submitData = {
      username: username.value,
      password: password.value,
    };

    const { data } = await loginUser(submitData);
    console.log(data);
    logMessage.value = `${data.user.username}님 환영합니다`;
  } catch (error) {
    // 에러 핸들링
    console.log(error.response);
    logMessage.value = `${error.response.data}`;
  } finally {
    initForm();
  }
};

const initForm = () => {
  username.value = "";
  password.value = "";
};
</script>
