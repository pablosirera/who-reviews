<template>
  <div class="home container mx-auto">
    <img class="mx-auto" alt="Vue logo" src="@/assets/logo.png" />
    <button
      @click="goToCreate"
      class="mt-5 p-2 border-solid rounded border-black bg-blue-500 text-white font-bold hover:opacity-75"
    >
      {{ this.$t('home.createSession') }}
    </button>
  </div>
</template>

<script>
import { ROUTES_PATH } from '@/constants/routes'

export default {
  name: 'Home',
  methods: {
    goToCreate() {
      this.$router.push({ name: ROUTES_PATH.CREATE_SESSION.name })
    },
  },
}
</script>
