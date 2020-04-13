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
  }),
  methods: {
    onSubmit() {
      this.$emit('submit-form', this.name)
    },
  },
}
</script>
