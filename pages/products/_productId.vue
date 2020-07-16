<template>
  <div class="product">
    <section class="section">
      <div class="container">
        <div v-if="product">
          <div class="columns">
              <div class="column is-6">
                  <img :src="product.img" />
              </div>
              <div class="column is-6">
                  <h1 class="product-title">{{ product.title }}</h1>
                  <div class="product-subtitle">
                    <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <p class="product-price">Price: <span class="money">{{ product.price }}</span></p>
                  <div class="product-actions">
                    <div class="quantity-selector-wrapper">
                      <quantity-selector :quantity.sync="quantity" />
                    </div>
                    <div class="add-product-wrapper">
                      <product-add
                        :product="product"
                        :quantity="quantity"
                      ></product-add>
                    </div>
                  </div>
              </div>
          </div>
          <div class="columns">
            <div class="column is-12">
              <div class="product-details-bottom">
                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget nullam non. Etiam tempor orci eu lobortis elementum. Sagittis orci a scelerisque purus. Pellentesque nec nam aliquam sem et tortor. Massa placerat duis ultricies lacus sed turpis tincidunt id. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Vitae semper quis lectus nulla at volutpat diam ut. Urna porttitor rhoncus dolor purus non enim praesent. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Quis enim lobortis scelerisque fermentum dui.</p>
                <p>Nunc sed id semper risus in. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Id velit ut tortor pretium viverra suspendisse potenti nullam. Enim nulla aliquet porttitor lacus luctus accumsan. Et netus et malesuada fames ac turpis. Lorem ipsum dolor sit amet consectetur. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Pharetra convallis posuere morbi leo urna molestie at elementum. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Blandit aliquam etiam erat velit scelerisque in dictum non. Aliquam sem et tortor consequat id.</p>
              </div>
            </div>
          </div>
        </div>
        <p v-else>Sorry! Nothing found...<router-link :to="`/`">Go to Homepage</router-link></p>
      </div>
    </section>
  </div>
</template>

<script>
import productData from '~/static/products.js'
import QuantitySelector from '~/components/QuantitySelector'
import ProductAdd from '~/components/ProductAdd'
export default {
  components: { 
    QuantitySelector,
    ProductAdd 
  },
  data() {
    const productId = this.$route.params.productId
    const productItem = productData.products.filter(({ id }) => productId == id)
    return {
      product: productItem[0] || false,
      quantity: 1
    }
  }
}
</script>
<style lang="scss" scoped>
.product{
  .product-title {
    font-size: 36pt;
    margin-bottom: 2rem;
  }
  .product-subtitle {
    margin-bottom: 1rem;
  }
  .product-price {
    font-size: 18pt;
    margin-bottom: 2rem;
    span {
      font-weight: bold;
    }
  }
  .product-actions{
    .quantity-selector-wrapper, .add-product-wrapper {
      display: inline-block;
      margin-right: 1rem;
    }
  }
  .product-details-bottom {
    p {
      margin-bottom: 1rem;
    }
  }
}

</style>
