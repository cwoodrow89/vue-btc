<template>
  <div id="app">
    <div id="nav">
      <BuNav :resize="resize"></BuNav>
    </div>
    
    <router-view/>
        
    <resize-observer @notify="resize = !resize" />

  </div>
</template>

<script>
import BuNav from '@/components/BuNav.vue'

export default {
  components: {
    BuNav
  },
  data() {
    return {
      resize: false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
} 

</style>
