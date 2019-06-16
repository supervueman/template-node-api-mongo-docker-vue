<template lang="pug">
  #auth.sign-in
    .container
      h1.h1 Login
      .form-group
        input(
          type="text"
          name="email"
          placeholder="email"
          v-model="email"
        )
      .form-group
        input(
          type="text"
          name="password"
          placeholder="password"
          v-model="password"
        )
      button.btn(@click="signIn") Sign In
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      password: "",
      email: ""
    };
  },
  methods: {
    async signIn() {
      const data = {
        password: this.password,
        email: this.email
      };
      await this.$store.dispatch("authenticate/signIn", data);
      this.$router.push("/profile");
    }
  }
};
</script>
