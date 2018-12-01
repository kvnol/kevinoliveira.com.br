<template>
  <nav class="footer-social">
    <a
      v-for="item in Social"
      :key="item.id"
      :href="item.url"
      target="_blank"
      :title="item.title"
      :class="['footer-social__item', 'footer-social__' + item.slug.toLowerCase()]">
      <span class="footer-social__icon" v-html="item.icon"></span>
      <span class="footer-social__slug">{{ item.slug }}</span>
    </a>
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
  width: 42px
  transform: translateX(-20px)

  &__item
    display: flex
    align-items: center
    text-decoration: none
    color: #fff

    &:hover
      .footer-social__slug
        transform: translateX(20px)
        opacity: 0

      .footer-social__icon
        transform: translateX(20px)
        opacity: 1

    &:not(:last-child)
      margin-bottom: .975rem

  &__tw:hover
    color: #1da1f2

  &__gh:hover
    color: #fff

  &__dr:hover
    color: #ea4c89

  &__md:hover
    color: #02b875

  &__icon
    display: block
    width: 20px
    height: 20px
    opacity: 0
    transition: .5s all ease

    svg
      width: 100%
      height: 100%

  &__slug
    transition: .5s all ease
</style>
