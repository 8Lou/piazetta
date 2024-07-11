<template>
  <div class='container'>
    <h1>Вызов официанта</h1>

    <form @submit.prevent="submitForm">
      <label for="name">Имя:</label>
      <input type="text" id="name" v-model="formData.name" required><br><br>

      <label for="phone">Телефон:</label>
      <input type="tel" id="phone" v-model="formData.phone" required><br><br>

      <label for="location">Локация:</label>
      <input type="text" id="location" v-model="formData.location" required><br><br>

      <label for="comment">Комментарий:</label>
      <textarea id="comment" v-model="formData.comment"></textarea><br><br>

      <button type="submit">Вызвать</button>
    </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        location: '',
        comment: ''
      }
    };
  },
  methods: {
    submitForm() {
      // добавить логику для отправки данных формы
      console.log('Отправка формы', this.formData);
    }
  }
}
</script>
