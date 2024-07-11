<template>
  <div class='services-container'>
    <Main />

    <footer>
      <div>
        <button>Главная</button>
        <button>Мои заказы</button>
      </div>
    </footer>

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
</style>