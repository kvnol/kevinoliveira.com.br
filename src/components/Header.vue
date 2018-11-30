<template>
  <header class="header">
    <Logo :title="true" />
  </header>
</template>

<script>
import Logo from './Logo.vue'

export default {
  components: {
    Logo
  }  
}
</script>

<style lang="sass" scoped>
.header
  max-width: 1520px
  width: 80%
  margin: 0 auto
  padding: 3.125rem 0
</style>
