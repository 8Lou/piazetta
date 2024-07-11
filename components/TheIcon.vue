<template>
  <img class='icon' :src="iconPath" alt="Icon">
</template>

<script>
export default {
  props: {
    iconPath: {
      type: String,
      required: true
    }
  }
}
</script>
