exports.ids=[2],exports.modules={31:function(t,e,r){"use strict";e.a={products:[{id:1,title:"Uniform",price:129,img:"/uniform.jpg",altText:"A snazzy uniform"},{id:2,title:"Phaser",price:499,img:"/phaser.jpg",altText:"A phaser set to stun"},{id:3,title:"Dilithium Crystals",price:29,img:"/dilithium-crystals.jpg",altText:"Glistening dilithium crystals"}]}},32:function(t,e,r){var content=r(37);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(4).default;t.exports.__inject__=function(t){o("6a29b0f2",content,!0,t)}},35:function(t,e,r){"use strict";var o=r(1),d={props:{product:{type:Object},quantity:{type:Number,default:1}},computed:{...Object(o.mapState)("cart",["lineItems"])},watch:{function(){console.log("ok")}},methods:{...Object(o.mapActions)("cart",["addLineItem","removeLineItem","getLineItems"]),...Object(o.mapMutations)("cart",["showCart"]),selectProduct(){const t={image:this.product.img,title:this.product.title,quantity:this.quantity||1,productId:this.product.id,price:this.product.price,handle:this.product.id};this.addLineItem(t),this.showCart(),console.log(this)}}},c=r(2),component=Object(c.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("a",{staticClass:"add-product button--grey",attrs:{href:"javascript:void(0);"},on:{click:this.selectProduct}},[this._ssrNode("Add Product")])}),[],!1,null,null,"34854ccc");e.a=component.exports},36:function(t,e,r){"use strict";r.r(e);var o=r(32),d=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,(function(){return o[t]}))}(c);e.default=d.a},37:function(t,e,r){(e=r(3)(!1)).push([t.i,".product .product-title[data-v-09e0e8f4]{font-size:36pt;margin-bottom:2rem}.product .product-subtitle[data-v-09e0e8f4]{margin-bottom:1rem}.product .product-price[data-v-09e0e8f4]{font-size:18pt;margin-bottom:2rem}.product .product-price span[data-v-09e0e8f4]{font-weight:700}.product .product-actions .add-product-wrapper[data-v-09e0e8f4],.product .product-actions .quantity-selector-wrapper[data-v-09e0e8f4]{display:inline-block;margin-right:1rem}.product .product-details-bottom p[data-v-09e0e8f4]{margin-bottom:1rem}",""]),t.exports=e},43:function(t,e,r){"use strict";r.r(e);var o=r(31),d=r(13),c=r(35),n={components:{QuantitySelector:d.a,ProductAdd:c.a},data(){const t=this.$route.params.productId;return{product:o.a.products.filter(({id:e})=>t==e)[0]||!1,quantity:1}}},l=r(2);var component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product"},[t._ssrNode('<section class="section" data-v-09e0e8f4>',"</section>",[t._ssrNode('<div class="container" data-v-09e0e8f4>',"</div>",[t.product?t._ssrNode("<div data-v-09e0e8f4>","</div>",[t._ssrNode('<div class="columns" data-v-09e0e8f4>',"</div>",[t._ssrNode('<div class="column is-6" data-v-09e0e8f4><img'+t._ssrAttr("src",t.product.img)+" data-v-09e0e8f4></div> "),t._ssrNode('<div class="column is-6" data-v-09e0e8f4>',"</div>",[t._ssrNode('<h1 class="product-title" data-v-09e0e8f4>'+t._ssrEscape(t._s(t.product.title))+'</h1> <div class="product-subtitle" data-v-09e0e8f4><p data-v-09e0e8f4>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div> <p class="product-price" data-v-09e0e8f4>Price: <span class="money" data-v-09e0e8f4>'+t._ssrEscape(t._s(t.product.price))+"</span></p> "),t._ssrNode('<div class="product-actions" data-v-09e0e8f4>',"</div>",[t._ssrNode('<div class="quantity-selector-wrapper" data-v-09e0e8f4>',"</div>",[r("quantity-selector",{attrs:{quantity:t.quantity},on:{"update:quantity":function(e){t.quantity=e}}})],1),t._ssrNode(" "),t._ssrNode('<div class="add-product-wrapper" data-v-09e0e8f4>',"</div>",[r("product-add",{attrs:{product:t.product,quantity:t.quantity}})],1)],2)],2)],2),t._ssrNode(' <div class="columns" data-v-09e0e8f4><div class="column is-12" data-v-09e0e8f4><div class="product-details-bottom" data-v-09e0e8f4><p data-v-09e0e8f4>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget nullam non. Etiam tempor orci eu lobortis elementum. Sagittis orci a scelerisque purus. Pellentesque nec nam aliquam sem et tortor. Massa placerat duis ultricies lacus sed turpis tincidunt id. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Vitae semper quis lectus nulla at volutpat diam ut. Urna porttitor rhoncus dolor purus non enim praesent. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Quis enim lobortis scelerisque fermentum dui.</p> <p data-v-09e0e8f4>Nunc sed id semper risus in. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Id velit ut tortor pretium viverra suspendisse potenti nullam. Enim nulla aliquet porttitor lacus luctus accumsan. Et netus et malesuada fames ac turpis. Lorem ipsum dolor sit amet consectetur. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Pharetra convallis posuere morbi leo urna molestie at elementum. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Blandit aliquam etiam erat velit scelerisque in dictum non. Aliquam sem et tortor consequat id.</p></div></div></div>')],2):t._ssrNode("<p data-v-09e0e8f4>","</p>",[t._ssrNode("Sorry! Nothing found..."),r("router-link",{attrs:{to:"/"}},[t._v("Go to Homepage")])],2)])])])}),[],!1,(function(t){var e=r(36);e.__inject__&&e.__inject__(t)}),"09e0e8f4","1080238d");e.default=component.exports}};