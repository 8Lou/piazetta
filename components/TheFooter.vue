<template>
      <div>
        <button @click="ToPage">
          <Icon :iconPath="require('@/assets/home.svg')" />
          Главная
        </button>
        <button>
          <Icon :iconPath="require('@/assets/view-list.svg')" />
          Мои заказы
        </button>
      </div>
</template>

<script>
  import Icon from '@/components/TheIcon.vue';
  
  export default {
    components: {
      Icon
    },
    
  methods: {
    ToPage() {
      this.$router.push('/');
    },
  }
}
</script>
