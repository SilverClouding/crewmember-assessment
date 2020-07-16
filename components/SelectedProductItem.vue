<template>
  <div class="selected-item-details">
                <div class="columns">
                    <div class="column is-3">
                        <router-link
                         :to="`${pathFragment}${item.handle}`"
                        >
                        <img :src="item.image" />
                        </router-link>
                    </div>
                    <div class="column is-3">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.price }}</p>
                    </div>
                    <div class="column is-3">
                        <div class="item-qty">
                          <Span>Qty: </span>
                          <quantity-selector :item="item" :quantity="item.quantity" />
                        </div>
                    </div>
                    <div class="column is-3">
                        <a href="javascript:void(0);" class="remove-item" @click="removeLineItem(item.id)">Remove</a>
                    </div>
                </div>
            </div>  
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
import QuantitySelector from '~/components/QuantitySelector'
export default {
  components: {
    QuantitySelector
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    pathFragment: {
      type: String,
      default: '/products/'
    }
  },
  methods: {
    ...mapActions('cart', ['removeLineItem']),
    ...mapMutations('cart', ['hideCart'])
  }  
}
</script>