import {fetchCartItems} from "@/api";

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

export const state = () => ({
  cartItems : [],
})

export const mutations = {
  addCartItems(state, cartItem){
    const  newCartItem = {
      ...cartItem,
      imageUrl :`${cartItem.imageUrl}?random=${Math.random()}`
    }
    state.cartItems.push(newCartItem)
  },
  setCartItems(state, cartItem){
    state.cartItems = cartItem;
  }
}

export const actions = {
  // nuxt 라이프사이클에서 실행 되는 actions의 훅이다
  async nuxtServerInit(storeContext, nuxtContext){
    console.log('nuxtServerInit')
    await storeContext.dispatch(FETCH_CART_ITEMS);
  },
  async [FETCH_CART_ITEMS]({commit}){
    const {data} = await fetchCartItems();
    commit('setCartItems', data.map((item)=>({
      ...item,
      imageUrl : `${item.imageUrl}?random=${Math.random()}`
    })))
  }
}
