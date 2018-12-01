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
  max-width: 1715px
  width: 90%
  margin: 0 auto
  padding: 3.125rem 0
</style>
