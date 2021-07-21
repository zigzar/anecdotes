<template>
  <div class="container">
    <div class="search"></div>
    <joke-list :jokes="jokes"></joke-list>
  </div>
</template>

<script>
import JokeList from '@/components/JokeList.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  components: {
    JokeList,
  },
  methods: {
    ...mapActions(['fetch']),
  },
  computed: {
    ...mapState({
      jokes: (state) => state.jokes,
    }),
    ...mapGetters({}),
  },
  mounted() {
    this.fetch()
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: clamp(320px, 75%, 760px);
  margin: 4em auto;
}
</style>
