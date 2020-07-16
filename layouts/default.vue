<template>
  <div>
    <div>
      <nuxt />
    </div>
    <div class="container">
      <div class="selected-products-area">
        <h1><span>Selected Products </span><span v-if="quantityTotal">({{ quantityTotal }})</span></h1>
        <div class="columns">
          <div class="column is-12">
            <!-- ADD A COMPONENT TO VIEW SELECTED PRODUCTS HERE -->
            <div class="selected-products-wrapper">
              <selected-products />
            </div>
          </div>
        </div>
        <h1>
          <span>Total Value: </span>
          <span>
            <!-- CALCULATE TOTAL VALUE OF SELECTED PRODUCTS -->
            {{ cartSubtotal }}
          </span>
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import SelectedProducts from '~/components/SelectedProducts'
export default {
  components: {
    SelectedProducts
  },
  computed: {
    ...mapState('cart', ['lineItems']),
    ...mapGetters('cart', ['quantityTotal', 'cartSubtotal'])
  },
  methods: {
    ...mapMutations('cart', ['hideCart']),
    ...mapActions('cart', ['updateLocalCart'])
  },
  mounted() {
    this.updateLocalCart()
    this.hideCart()
  }
}
</script>
<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-top: 20px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  margin: 1.5rem auto;
}

.selected-products-area {
  h1 {
    font-size: 24pt;
    margin-bottom: 4rem;
  }
  .selected-products-wrapper {
    margin: 0 6rem;
  }
}
</style>
