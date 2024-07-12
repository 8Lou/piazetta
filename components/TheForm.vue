<template>
  <div class='container'>
    <span>
        <h1>
          ВЫЗОВ       
        </h1>
      </span>
      <span>       
        <h1>
          ОФИЦИАНТА
        </h1>
    </span>

    <form @submit.prevent="submitForm">
      <label for="name">Имя</label>
      <input placeholder='Константинов Константин' type="text" id="name" v-model="formData.name" required><br>
      <label for="phone">Телефон</label>
      <input placeholder='+7 (...) ... - .. - ..' type="tel" id="phone" v-model="formData.phone" required><br>
      <label for="location">Локация</label>
      <input placeholder='Piazetta' type="text" id="location" v-model="formData.location" required><br>
      <label for="comment">Комментарий</label>
      <textarea placeholder='Введите текст сообщения...' id="comment" v-model="formData.comment"></textarea><br>
      <button type="submit" class="button">Вызвать</button>
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
    async submitForm() {
      try {
        const response = await fetch('https://webhook.site/994c8d78-82a5-4981-bc1a-3f00cfea293f', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });
        const responseData = await response.json();
        console.log('Данные успешно отправлены', responseData);
      } catch (error) {
        console.error('Произошла ошибка при отправке данных', error);
      }
    }
  }
}
</script>
<style scoped>
.button{
  background-color: #E7BDA6;
}
</style>