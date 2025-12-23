<template>
  <div id="app">
     <header>
    <div class="container">
      <h1>Cooking Masterclass Checkout</h1>
      <AboutView/>
    </div>
  </header>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AboutView from './views/AboutView.vue';
</script>

<style scoped>
h1 {
  text-align: center;
}

header {
  line-height: 0;
  max-height: 100vh;
  margin-left: auto;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: left;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin-left: 50px;
    text-align: center;
  }

.container {
  width: 100%;
  height: 100vh;              
  flex-direction: column;      
  justify-content: flex-start;  
  align-items: center;          
  padding-top: 40px;
  box-sizing: border-box;
}

}
</style>