<template lang="pug">
  section(class="main-sect" v-if="profile")
    h1(class="h1") Hello {{ profile.email }}
</template>

<script>
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.getters.getProfile;
    }
  }
};
</script>
