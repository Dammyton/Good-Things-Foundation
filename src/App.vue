<template>
  <div id="app">
      <TopMenu/>
      <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import TopMenu from '@/components/TopMenu.vue'

export default {
  name: 'App',
  components: {
    Navbar, TopMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bg-teal{
  background: #4b7b92 !important;
}
.bg-green{
  background: #43827c !important;
}
.mb-mainnav{
  display: block ;
}

/* Mobie responsiveness */
@media (max-width: 980px){
  .mb-mainnav{
    display: none !important;
  }
}
</style>
