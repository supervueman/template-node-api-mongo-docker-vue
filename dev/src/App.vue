<template lang="pug">
  div(id="app")
    Toolbar
    div(class="container")
      router-view
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    if (localStorage.getItem("access_token") !== "") {
      this.$store.dispatch("authenticate/fetchProfile");
    }
  }
};
</script>
