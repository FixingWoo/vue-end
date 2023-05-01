// 로그인, 회원 가입, 회원 탈퇴
import { instance } from "@/api/index";

function registerUser(data) {
  return instance.post("signup", data);
}

function loginUser(data) {
  return instance.post("login", data);
}

export { registerUser, loginUser };
