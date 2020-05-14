<template>
  <CreateSessionForm
    data-test="create-session-form"
    @submit-form="sendCreateSession"
  />
</template>

<script>
import { mapActions } from 'vuex'
import CreateSessionForm from '@/views/createSession/components/CreateSessionForm'

export default {
  name: 'CreateSession',
  components: {
    CreateSessionForm,
  },
  methods: {
    ...mapActions({
      createSession: 'session/createSession',
    }),
    sendCreateSession(params) {
      this.createSession(params)
    },
  },
}
</script>
