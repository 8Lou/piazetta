<template>
  <div>
    <h1 class="">УСЛУГИ</h1>
    <button class="button" @click="ToPage">Вызвать официанта</button>
  </div>
</template>

<script>
export default {
  methods: {
    ToPage() {
      this.$router.push("/page1");
    },
  },
};
</script>
