<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
html, body, #app, .home
  width: 100%
  height: 100%

html
  font-size: 16px
  box-sizing: border-box
  text-rendering: optimizeLegibility

*, *::before, *::after
  margin: 0
  padding: 0
  box-sizing: inherit

body
  background-color: #121212
  color: #fff
  font-family: 'Proxima Nova Alt', sans-serif
</style>
