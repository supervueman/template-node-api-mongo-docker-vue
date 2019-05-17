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
    this.$store.dispatch("fetchProfile");
  }
};
</script>
