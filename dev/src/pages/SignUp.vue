<template lang="pug">
  #auth.sign-up
    .container
      h1.h1 Registration
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
      button.btn(@click="signUp") Sign Up
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      password: "",
      email: ""
    };
  },
  methods: {
    async signUp() {
      const data = {
        password: this.password,
        email: this.email
      };
      await this.$store.dispatch("authenticate/signUp", data);
      this.$router.push("/signin");
    }
  }
};
</script>
