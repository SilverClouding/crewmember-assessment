<template>   
    <div class="selected-products">
       <selected-product-item v-for="item in lineItems" :key="item.productId" :item="item"></selected-product-item>   
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import SelectedProductItem from '~/components/SelectedProductItem'
export default {
  components: {
    SelectedProductItem
  },
  computed: {
    ...mapState('cart', ['lineItems', 'cartVisible'])
  },
  methods: {
    ...mapMutations('cart', [
      'showCart',
      'hideCart'
    ]),
    ...mapActions('cart', ['updateLocalCart']),
    // handleClose() {
    //   this.hideCart()
    // }
  },
  watch: {
    lineItems(newValue) {
      if (newValue.length == 0) {
        this.hideCart()
      }
    }
  }
}
</script>

