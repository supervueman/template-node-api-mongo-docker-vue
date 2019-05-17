<template lang="pug">
  div(class="sign-up" id="auth")
    h1(class="h1") Registration
    div(class="form-group")
      input(type="text" name="email" placeholder="email" v-model="email")
    div(class="form-group")
      input(type="text" name="password" placeholder="password" v-model="password")
    button(class="btn" @click="signUp") Sign Up
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
  computed: {
    profile() {
      return this.$store.getters.getProfile;
    }
  },
  methods: {
    signUp() {
      const data = {
        password: this.password,
        email: this.email
      };
      this.$store.dispatch("signUp", data);
    }
  }
};
</script>
