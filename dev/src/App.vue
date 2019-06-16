<template lang="pug">
  div(id="app")
    Toolbar(:profileId="profile._id")
    router-view.view
</template>

<script>
export default {
  name: "App",
  computed: {
    profile() {
      return this.$store.getters["authenticate/getProfile"];
    }
  },
  async beforeCreate() {
    const access_token = localStorage.getItem("access_token");
    const isAccessToken =
      access_token !== "" &&
      access_token !== null &&
      access_token !== undefined;
    if (isAccessToken) {
      await this.$store.dispatch("authenticate/fetchProfile");
      this.$router.push("/profile");
    } else {
      this.$router.push("/signin");
    }
  }
};
</script>

<style lang="sass">
  .view
    // Margin/Padding block
    padding-top: 80px
</style>

