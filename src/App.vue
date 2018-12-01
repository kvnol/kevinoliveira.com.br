<template>
  <div class="home">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style>
html, body, #app, .home {
  width: 100%;
  height: 100%;
}

html {
  font-size: 16px;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  background-color: #121212;
  color: #fff;
  font-family: 'Proxima Nova Alt', sans-serif;
}

.home {
  display: flex;
  flex-direction: column;
}
</style>
