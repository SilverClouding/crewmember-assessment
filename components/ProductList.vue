<template>
  <div class="columns">
        <div
          class="column product"
          v-for="product in products"
          :key="product.id"
          :class="columnClasses"
        >
        <router-link :to="`${pathFragment}${product.id}`">
          <img :src="product.img" />
        </router-link>
        <router-link :to="`${pathFragment}${product.id}`">
          <h3>{{ product.title }}</h3>
        </router-link>
        <p>{{ product.price }}</p>
        <product-add
            :product="product"
            :quantity="1"
          ></product-add>
        </div>
      </div>
</template>

<script>
import ProductAdd from '~/components/ProductAdd'
export default {
  components: {
    ProductAdd
  },
  props: {
    pathFragment: {
      type: String,
      default: '/products/'
    },
    products: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Number,
      default: 3
    },
    showAddToCart: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    columnClasses() {
      let classes = 'column'

      if (this.columns === 4) {
        classes = `${classes} is-3`
      }

      if (this.columns === 3) {
        classes = `${classes} is-4`
      }

      if (this.columns === 2) {
        classes = `${classes} is-6`
      }

      return classes
    }
  },
  methods: {
    selectProduct() {
      console.log('ok working');
    }
  }
}
</script>
<style lang="scss" scoped>
.product {
  padding: 2rem;
  text-align: center;
  h3 {
    font-size: 18pt;
  }
}
</style>
