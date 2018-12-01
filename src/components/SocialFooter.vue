<template>
  <nav class="footer-social">
    <a v-for="item in Social"
       :key="item.id"
       :href="item.url"
       target="_blank"
       :title="item.title"
       :class="['footer-social__item', 'footer-social__' + item.slug.toLowerCase()]">{{ item.slug }}</a>
  </nav>
</template>

<script>
import Social from '../data/social.json'

export default {
  data () {
    return {
      Social
    }
  } 
}
</script>

<style lang="sass">
.footer-social
  display: flex
  flex-direction: column

  &__item
    text-decoration: none
    color: #fff

    &:not(:last-child)
      margin-bottom: .975rem

  &__tw:hover
    color: #1da1f2

  &__gh:hover
    color: #4078c0

  &__dr:hover
    color: #ea4c89

  &__md:hover
    color: #02b875

</style>
