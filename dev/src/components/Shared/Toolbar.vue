<template lang="pug">
  header(class="toolbar")
    div(class="container d-flex content-end")
      common-link(
        link="/signin"
        text="Sign in"
        @click="isSignIn = true; isSignUp = false"
        v-if="!profile"
      ) Sign In
      common-link(
        link="/signup"
        text="Sign up"
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
    async logout() {
      await this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="sass">
.toolbar
  // Position block
  position: fixed
  top: 0
  left: 0

  // Size block
  width: 100%
  height: 50px
  
  // Display block
  display: flex
  align-items: center
  justify-content: flex-start

  // Color block
  background-color: #030823

</style>

