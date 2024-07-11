<template>
    <div class='container'>
    <TheForm />
    <TheFooter />
  </div>
</template>

<script>
import TheForm from "../components/TheForm.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  components: {
    TheForm,
    TheFooter,
  },

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
