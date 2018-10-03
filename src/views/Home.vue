<template>
  <div class="home">
    <bu-exchange-rate></bu-exchange-rate>
  </div>
</template>

<script>
import BuExchangeRate from '@/components/BuExchangeRate.vue'

export default {
  name: 'home',
  components: {
    BuExchangeRate
  }
}
</script>
