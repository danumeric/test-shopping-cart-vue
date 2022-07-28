import { createStore } from 'vuex'
import productCard from './modules/productCard'
import viewedGoods from './modules/viewedGoods'

export default createStore({
  modules: {
    productCard, viewedGoods
  }
})
