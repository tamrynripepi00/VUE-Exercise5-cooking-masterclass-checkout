import { createStore } from 'vuex'

const store = createStore({
  // STATE
  state: {
    products: [
      {
        id: 1,
        name: "Fresh Pasta",
        price: 100,
        stockStatus: "In Stock",
        img: "https://tamrynripepi00.github.io/pictures/fresh_pasta.jpg",
        category: "Grains"
      },
      {
        id: 2,
        name: "Spinach",
        price: 120,
        stockStatus: "In Stock",
        img: "https://tamrynripepi00.github.io/pictures/spinach.jpg",
        category: "Cooking Essentials"
      },
      {
        id: 3,
        name: "Butter Chicken with Naan",
        price: 200,
        stockStatus: "Out of Stock",
        img: "https://tamrynripepi00.github.io/pictures/butter-chicken.jpg",
        category: "Curry"
      },
      {
        id: 4,
        name: "Beef Tacos",
        price: 150,
        stockStatus: "In Stock",
        img: "https://tamrynripepi00.github.io/pictures/tacos.webp",
        category: "Beef"
      },
      {
        id: 5,
        name: "White Chicken Pizza",
        price: 170,
        stockStatus: "In Stock",
        img: "https://tamrynripepi00.github.io/pictures/pizza.jpg",
        category: "Pizza"
      },
      {
        id: 6,
        name: "Chicken Pie",
        price: 85,
        stockStatus: "In Stock",
        img: "https://tamrynripepi00.github.io/pictures/pie.webp",
        category: "Bakery"
      }
    ],
    cartIds: localStorage.getItem('cart')?.split(',').map(id => Number(id)) || []
  },

  // GETTERS
  getters: {
    allProducts(state) {
      return state.products
    },
    cartItems(state) {
      return state.cartIds.map(id => state.products.find(p => p.id === id)).filter(Boolean)
    },
    cartTotal(state, getters) {
      return getters.cartItems.reduce((total, item) => total + item.price, 0)
    }
  },


  // MUTATIONS
  mutations: {
    ADD_TO_CART(state, productId) {
      if (!state.cartIds.includes(productId)) {
        state.cartIds.push(productId)
        localStorage.setItem('cart', state.cartIds.join(','))
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cartIds = state.cartIds.filter(id => id !== productId)
      localStorage.setItem('cart', state.cartIds.join(','))
    }
  },

  // ACTIONS
  actions: {
    addToCart({ commit }, productId) {
      commit('ADD_TO_CART', productId)
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId)
    }
  }
})
export default store
