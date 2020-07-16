<template>
<a href="javascript:void(0);" class="add-product button--grey" @click="selectProduct">Add Product</a>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  props: {
    product: {
      type: Object
    },
    quantity: { type: Number, default: 1 }
  },
  
  computed: {
    ...mapState('cart', ['lineItems']),
  },

  watch: {
    function(){
        console.log('ok');
    }
  },

  methods: {
    ...mapActions('cart', [
      'addLineItem',
      'removeLineItem',
      'getLineItems'
    ]),
    ...mapMutations('cart', ['showCart']),
    selectProduct() {
        const lineItem = {
          image: this.product.img,
          title: this.product.title,
          quantity: this.quantity || 1,
          productId: this.product.id,
          price: this.product.price,
          handle: this.product.id
        }
        this.addLineItem(lineItem)
        this.showCart()  
        console.log(this)
    }
  }
}
</script>
