<template>
  <div class="login-container">
    <label class="form-label" for="username">Username</label>
    <input class="form-input" v-model="username" placeholder="Username" />
    <label class="form-label" for="password">Password</label>
    <input
      class="form-input"
      type="password"
      name="password"
      v-model="password"
      placeholder="Password"
    />
    <input
      type="button"
      class="btn btn-primary"
      value="Login"
      @click="login()"
    />
  </div>
</template>

<script>
import router from "@/router";
import { loginUser, validateLogin } from "@/services/auth";

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      loginUser(this.username, this.password).then(() => {
        validateLogin().then((res) => {
          if (res) {
            router.push("/admin");
          } else {
            console.log("Unauthorised!");
          }
        });
      });
    },
    created() {
      document.title = "Login - LGBTQ Wiki"
    }
  },
};
</script>
