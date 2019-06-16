<template lang="pug">
  section.main-sect(v-if="profile")
    .container
      h1.h1 Hello {{ profile.email }}
</template>

<script>
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.getters["authenticate/getProfile"];
    }
  }
};
</script>
