<template lang="pug">
  header.toolbar
    .container.d-flex.content-end
      common-link(
        link="/signin"
        text="Sign in"
        v-if="profileId === ''"
      ) Sign In
      common-link(
        link="/signup"
        text="Sign up"
        v-if="profileId === ''"
      ) Sign Up
      .link(
        @click="logout"
        v-if="profileId !== ''"
      ) Logout
</template>

<script>
export default {
  name: "Toolbar",
  props: {
    profileId: {
      type: String,
      default: ""
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("authenticate/logout");
      this.$router.push("/signin");
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

