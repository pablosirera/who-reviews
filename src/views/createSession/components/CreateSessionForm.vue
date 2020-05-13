<template>
  <form @submit.prevent="onSubmit" class="flex flex-col w-48 my-0 mx-auto">
    <input
      v-model="name"
      type="text"
      name="name"
      data-testid="session-name"
      class="border outline-none py-2 px-4 rounded"
      :placeholder="$t('create.name')"
    />
    <div class="mt-2 cursor-pointer" @click="toggleIsActive()">
      <input v-model="isActive" type="checkbox" name="isActive" />
      <span class="mx-2">{{ $t('create.isActive') }}</span>
    </div>
    <div class="flex justify-center">
      <TheButton :text="$t('create.create')" size="small" />
    </div>
  </form>
</template>

<script>
import TheButton from '@/components/ui/TheButton'

export default {
  name: 'CreateSessionForm',
  components: {
    TheButton,
  },
  data: () => ({
    name: '',
    isActive: true,
  }),
  methods: {
    onSubmit() {
      this.$emit('submit-form', { name: this.name, active: this.isActive })
    },
    toggleIsActive() {
      this.isActive = !this.isActive
    },
  },
}
</script>
