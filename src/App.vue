<template>
  <div id="app">
    <Header/>
    <router-view/>
    <SupportChat/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/main/Footer'
import Header from './components/main/Header'
import SupportChat from './components/utils/SupportChat'

export default {
  name: 'App',
  components: {SupportChat, Header, Footer}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
