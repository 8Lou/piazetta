<template>
  <div class="footer">
    <div @click="ToPage" class="footer_content">
      <Icon :iconPath="require('@/assets/home.svg')" />
      <h2>Главная</h2>
    </div>
    <div class="footer_content">
      <Icon :iconPath="require('@/assets/view-list.svg')" />
      <h2>Мои заказы</h2>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/TheIcon.vue";

export default {
  components: {
    Icon,
  },

  methods: {
    ToPage() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.footer {
  border-top: 1px solid rgba(244, 241, 237, 0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  position: fixed;
  width: 393px;
  height: 83px;
  padding: 15px;
  gap: 8px;
}
.footer_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
