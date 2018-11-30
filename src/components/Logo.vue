<template>
  <div class="logo">
    <svg class="logo-symbol" width="70" height="42" viewBox="0 0 70 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.2922 42V30.3469L24.9539 27.2107L15.5077 42H0L16.5847 19.524L0.676769 0H16.2462L27.2922 15.7424V0H40V42H27.2922Z" fill="white"/>
      <path d="M39.5899 29.5718V12.4282H46V0H27V42H46V29.5718H39.5899Z" fill="white"/>
      <path d="M70 0H51V12.4282H57.4101V29.5718H51V42H70V0Z" fill="white"/>
    </svg>
    <span v-if="title" class="logo-title">Kevin Oliveira</span>
  </div>
</template>

<script>
export default {
  props: ['title']

}
</script>

<style lang="sass" scoped>
.logo
  margin-left: -(6.25rem)
  display: flex
  align-items: center
  user-select: none

  &-symbol
    margin-right: 1.875rem

  &-title
    font-size: .75rem
    text-transform: uppercase
    letter-spacing: .4em
</style>
