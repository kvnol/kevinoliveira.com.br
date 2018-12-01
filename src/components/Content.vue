<template>
  <main class="main">
    <article class="presentation">
      <p>Hi there!</p>
      <p>My name is <strong class="presentation-name">Kevin Oliveira.</strong></p>
      <p>I am <strong>designer, </strong> <strong>developer</strong> and <strong>musician.</strong></p>
    </article>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.main
  max-width: 1520px
  width: 90%
  margin: 0 auto

  @media (min-width: 64rem)
    display: flex
    align-items: center
    flex: 1

.presentation
  max-width: 390px
  font-size: 45px

  &-name
    display: block

  p
    &:not(:last-child)
      margin-bottom: 30px

    &:last-child strong
      font-size: 64px
</style>
