<template lang="pug">
  div(class="sign-in" id="auth")
    h1(class="h1") Login
    div(class="form-group")
      input(type="text" name="email" placeholder="email" v-model="email")
    div(class="form-group")
      input(type="text" name="password" placeholder="password" v-model="password")
    button(class="btn" @click="signIn") Sign In
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
  computed: {
    profile() {
      return this.$store.getters.getProfile;
    }
  },
  methods: {
    signIn() {
      const data = {
        password: this.password,
        email: this.email
      };
      this.$store.dispatch("signIn", data);
    }
  }
};
</script>
