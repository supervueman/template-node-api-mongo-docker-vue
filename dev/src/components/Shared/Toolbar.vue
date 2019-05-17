<template lang="pug">
  header(class="toolbar")
    div(class="container d-flex content-end")
      router-link(
        to="/signin"
        class="btn flat"
        @click="isSignIn = true; isSignUp = false"
        v-if="!profile"
      ) Sign In
      router-link(
        to="/signup"
        class="btn flat"
        @click="isSignIn = false; isSignUp = true"
        v-if="!profile"
      ) Sign Up
      a(class="btn flat" @click="logout" v-if="profile") Logout
</template>

<script>
export default {
  name: "Toolbar",
  computed: {
    profile() {
      return this.$store.getters.getProfile;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
