<template>
  <div class='services-container'>
    <Main />
      <ul class="list-none">
        <li><nuxt-link to="/main">Главная</nuxt-link></li>
        <li><nuxt-link to="/orders">Мои заказы</nuxt-link></li>
      </ul>
   
  </div>
</template>

<script>
import Main from "../components/Main.vue";

export default {
  components: {
    Main,
  },
};
</script>

<style scoped>
.services-container {
  width: 393px;
  height: 852px;
  background-color: #496172;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.list-none {
  display: flex;
  justify-content: space-between;
  text-decoration: none; 
  list-style-type: none;
  
  }
</style>