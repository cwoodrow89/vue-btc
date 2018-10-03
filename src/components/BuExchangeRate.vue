<template>
    <div class="exchange-rate">
        <div class="container">
            <div v-if="loading" class="loading">
                <b-loading :active.sync="loading"></b-loading>
            </div>
            <div v-else>1 BTC = ${{btcusd}}</div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'BuExchangeRate',
    mounted() {
        this.$store.dispatch('loadCrypto')
    },
    data() {
        return {
            btcusd: ""
        }
    },
    computed: {
    ...mapState([
      'crypto',
      'loading'
    ]),
  },
  watch: {
      crypto: function() {
          let ratestring = this.crypto.bpi.USD.rate.replace(',', '');
          let ratenum = parseFloat(ratestring);
          let roundedrate = Number(Math.round(ratenum+'e2')+'e-2');
          this.btcusd = roundedrate; 
      }
  }
}
</script>

<style>

</style>
