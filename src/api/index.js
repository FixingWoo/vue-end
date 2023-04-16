import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

function registerUser(data) {
  return instance.post("signup", data);
}

export { registerUser };
