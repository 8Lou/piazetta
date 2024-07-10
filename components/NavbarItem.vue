<template>
  <a
    :href="link"
    class="flex items-center p-2 text-base font-medium rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 group"
  >
    <svg
      v-if="icon"
      :class="iconClass"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path :d="iconPath"></path>
    </svg>
    <span class="ml-3">{{ label }}</span>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    icon: {
      type: Boolean,
      default: false
    },
    iconClass: {
      type: String,
      default: 'w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
    },
    iconPath: {
      type: String,
      default: ''
    }
  }
};
</script>
