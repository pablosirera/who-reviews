<template>
  <div class="sessions">
    <ul class="sessions-list">
      <li v-for="session in sessions" :key="session.id">
        <span>{{ session.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'MySessions',
  created() {
    if (!this.sessions) {
      this.listSessions()
    }
  },
  computed: {
    ...mapState('session', ['sessions']),
  },
  methods: {
    ...mapActions('session', ['listSessions']),
  },
}
</script>

<style lang="scss" scoped>
ul {
  width: 200px;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
}

li {
  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border: none;
  }

  & span {
    text-decoration: none;
    color: #000;

    -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
    -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
    -o-transition: font-size 0.3s ease, background-color 0.3s ease;
    -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
    transition: font-size 0.3s ease, background-color 0.3s ease;
    display: block;
    width: 200px;

    &:hover {
      font-size: 30px;
      background: #f6f6f6;
    }
  }
}
</style>
