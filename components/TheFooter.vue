<template>
      <div>
        <button @click="ToPage">Главная</button>
        <button>Мои заказы</button>
      </div>
</template>

<script>
export default {
  methods: {
    ToPage() {
      this.$router.push('/page2');
    },
  }
}
</script>
