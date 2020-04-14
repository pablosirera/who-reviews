<template>
  <button
    @click="$emit('click')"
    :class="buttonClasses"
    data-testid="the-button"
    class="mt-5 p-2 border-solid rounded border-black bg-blue-500 text-white font-bold focus:outline-none hover:opacity-75"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'TheButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
  computed: {
    buttonClasses() {
      return {
        'w-16': this.size === 'small',
        'w-24': this.size === 'medium',
        'w-40': this.size === 'large',
      }
    },
  },
}
</script>
