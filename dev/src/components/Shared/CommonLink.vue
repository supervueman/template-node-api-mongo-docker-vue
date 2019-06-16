<template lang="pug">
  router-link(:to="link" class="link") {{text}}
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="sass">
  .link
    // Position block
    position: relative

    // Font block
    font-size: 16px

    // Color block
    color: #04ff00

    // Margin/Padding block
    margin: 10px

    // Pseudo block
    &::after, &::before
      // Content block
      content: ''

      // Position block
      position: absolute
      bottom: 0

      // Size block
      width: 0
      height: 1px

      // Color block
      background-color: #d459f9

      // Animation block
      transition: width 0.5s ease-in-out

    // Edit pseudo block
    &::before
      // Position block
      left: 0
    &::after
      // Position block
      right: 0

      // Color block
      background-color: #faff00

    // Hover block
    &:hover
      &::after, &::before
        // Size block
        width: 50%
</style>

