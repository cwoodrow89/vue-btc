<template>
    <div class="exchange-rate">
        <div class="container">
            <div v-if="loading" class="loading">
                <b-loading :active.sync="loading"></b-loading>
            </div>
            <div v-else>
                <br>
                <br>

                <b-tabs size="is-large" class="block" position="is-centered">
                    <b-tab-item label="Crypto" icon="currency-btc">

                        <b-tabs size="is-medium" class="block" position="is-centered">
                            <b-tab-item label="BTC to GBP" icon="currency-gbp">
                                <div class="money">1 BTC = £{{roundBtcGbp}}</div>
                            </b-tab-item>
                            <b-tab-item label="BTC to USD" icon="currency-usd">
                                <div class="money">1 BTC = ${{roundBtcUsd}}</div>                               
                            </b-tab-item>
                        </b-tabs>

                    </b-tab-item>
                    <b-tab-item label="Fiat" icon="cash">
                        <div class="money">£1 = ${{roundGbpUsd}}</div>
                    </b-tab-item>
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'BuExchangeRate',
    mounted() {
        this.$store.dispatch('loadCrypto');
        this.$store.dispatch('loadFiat');
    },
    data() {
        return {
            btcusd: "",
            gbpusd: ""
        }
    },
    computed: {
    ...mapState([
      'crypto',
      'fiat',
      'loadingApi'
    ]),
    loading() {
        return this.crypto && this.fiat && this.btcusd && this.gbpusd && !this.loadingApi ? false : true;
    },
    roundBtcGbp() {
        let rate = this.btcusd / this.gbpusd;
        let roundedrate = Number(Math.round(rate+'e2')+'e-2'); 
        if(this.loading === false) {
            return roundedrate 
        }
    },
    roundBtcUsd() {
        return Number(Math.round(this.btcusd+'e2')+'e-2'); 
    },
    roundGbpUsd() {
        return Number(Math.round(this.gbpusd+'e2')+'e-2'); 
    },
  },
  watch: {
      crypto: function() {
          if(this.crypto) {
            let ratestring = this.crypto.bpi.USD.rate.replace(',', '');
            let ratenum = parseFloat(ratestring);
            this.btcusd = ratenum;  
          }
      },
      fiat: function() {
          if(this.fiat) {
            let rate = this.fiat.rates.GBP;
            let invertrate = 1/ rate;
            this.gbpusd = invertrate;
          }
      }
  }
}
</script>

<style>
    .exchange-rate {
        font-size: 2em;
    }
    .money {
        margin: 10%;
    }
</style>
