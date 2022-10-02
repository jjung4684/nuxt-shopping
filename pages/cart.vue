<template>
  <div class="container">
    <h1 class="list-title">담긴 상품 목록</h1>
    <cart-list/>
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>
import {FETCH_CART_ITEMS} from "@/store";
import CartList from "@/components/CartList";

export default {
  name: "cart",
  components: {CartList},
  // async asyncData({store}){
    // await store.dispatch(FETCH_CART_ITEMS);
  // },

}
</script>

