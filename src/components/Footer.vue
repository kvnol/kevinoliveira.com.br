<template>
  <footer class="footer">
    <SocialFooter />
  </footer>
</template>

<script>
import SocialFooter from './SocialFooter.vue'

export default {
  components: {
    SocialFooter
  }
}
</script>

<style lang="sass">
.footer
  max-width: 1520px
  width: 80%
  margin: 0 auto
</style>
