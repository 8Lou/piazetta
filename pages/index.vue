<template>
  <div class='container'>
    <Main />
    <TheFooter />
  </div>
</template>

<script>
import Main from "../components/Main.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  components: {
    Main,
    TheFooter,
  },
};
</script>

<style scoped>
.container {
  width: 393px;
  height: 852px;
  background-color: #496172;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>