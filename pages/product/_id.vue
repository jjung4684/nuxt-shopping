<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">장바구니 담기</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createCartItem, fetchProductById } from '@/api'
export default {
  head: {
    title: 'Shopping Item Detail',
    meta: [
      {
        hid: 'description',
        name: 'description' ,
        content:`상품 상세 페이지`,
      },
    ],
    // link: [
    //   {
    //     rel: 'stylesheet',
    //     href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
    //   }
    // ]
  },
  async asyncData({ params }) {
    const response = await fetchProductById(params.id)
    return { product: response.data }
  },
  methods: {
    async addToCart() {
      await createCartItem(this.product)
      // this.$store.commit('addItemToCart', this.product)
      this.$store.commit('addCartItems', this.product)
      this.$router.push('/cart')
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
