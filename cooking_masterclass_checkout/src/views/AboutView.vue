<template>
  <div class="products">
    <div v-for="product in products" :key="product.id" class="product-card">
      <!-- Image -->
      <img :src="product.img" :alt="product.name" class="product-img" />

      <!-- Name + price -->
      <h3>{{ product.name }}</h3>

      <p v-if="product.stockStatus !== 'Out of Stock'">
        Price: R{{ product.price }}
      </p>

      <!-- Stock status -->
      <p class="stock" :class="{ out: product.stockStatus === 'Out of Stock' }">
        {{ product.stockStatus }}
      </p>

      <!-- Buy button -->
      <button class="buy-btn" @click="buyNow(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['allProducts']),
    products() {
      return this.allProducts;
    }
  },
  methods: {
    buyNow(product) {
      if (product.stockStatus === "Out of Stock") {
        alert(`${product.name} is out of stock!`);
      } else {
        alert(`Added ${product.name} to cart!`);
        // You can dispatch a Vuex action here if you implement a cart
      }
    }
  }
}
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns evenly spaced */
  gap: 30px;                             /* space between cards */
  padding: 40px;                          /* space around the grid */
}

.product-card {
  width: 300px;
  padding: 15px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  margin-top: 50px;
  line-height: 35px;
  background-color: white;
  color: black;
  transition: transform 0.7s ease-in-out;
}

.product-card:hover {
  transform: scale(1.07);
  box-shadow: 0 12px 25px rgba(0,0,0,0.15);
}

.product-img {
  width: 100%;          /* image fills card width */
  height: auto;         /* maintains aspect ratio */
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}


.stock {
  font-weight: bold;
}

.stock.out {
  color: red;
}

.buy-btn {
  background: gray;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  transition: 0.25s ease;
  width: 120px;
  margin-top: 10px;
}

.buy-btn:hover {
  background: darkgray;
  transform: scale(1.05);
}

.buy-btn:active {
  transform: scale(0.97);
}
</style>
