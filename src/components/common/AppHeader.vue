<template>
  <header>
    <template v-if="isLogin">
      <span>{{ username }}</span>
      <a href="javascript:;" @click="logout">로그아웃</a>
    </template>

    <template v-else>
      <router-link to="/login">로그인</router-link>
      |
      <router-link to="/signup">회원가입</router-link>
    </template>
  </header>
</template>

<script setup>
import { computed } from "vue";
import store from "@/store";
import routes from "@/routes";

const isLogin = computed(() => {
  return store.getters.isLogin;
});

const username = computed(() => {
  // 계산된 값을 반환하기 때문에 get 접두어 사용 X
  return store.state.username;
});

const logout = () => {
  store.commit("clearUsername");
  routes.push("/login");
};
</script>

<style></style>
