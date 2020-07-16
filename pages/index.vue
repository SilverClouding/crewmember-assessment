<template>
  <div>
    <div class="container">
      <h1>Nacelle Crewmember Assessment</h1>
      <slot
        name="products"
        :products="products"
        :columns="3"
      >
      <product-list :products="products" :columns="3" />
      </slot>
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
</template>

<script>
import { mapGetters } from 'vuex'
import productData from '~/static/products.js'
import ProductList from '~/components/ProductList'
import SelectedProducts from '~/components/SelectedProducts'
export default {
  components: {
    ProductList,
    SelectedProducts
  },
  data() {
    return {
      products: productData.products
    }
  },
  computed: {
    ...mapGetters('cart', ['quantityTotal', 'cartSubtotal'])
  }
}
</script>
<style lang="scss" scoped>
h1 {
  font-size: 24pt;
  margin-bottom: 4rem;
}
.selected-products-wrapper {
  margin: 0 6rem;
}
</style>
