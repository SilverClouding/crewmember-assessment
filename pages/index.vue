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
    </div>
  </div>
</template>

<script>
import productData from '~/static/products.js'
import ProductList from '~/components/ProductList'
export default {
  components: {
    ProductList
  },
  data() {
    return {
      products: productData.products
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  font-size: 24pt;
  margin-bottom: 4rem;
}
</style>
