<template>
  <div class="container">
    <joke-input
      class="search"
      placeholder="Введите слово для поиска среди анекдотов ..."
      :modelValue="searchQuery"
      @update:modelValue="setSearchQuery"
    ></joke-input>
    <joke-list :jokes="getSearchedJokes"></joke-list>
  </div>
</template>

<script>
import JokeList from '@/components/JokeList.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import JokeInput from '@/components/UI/JokeInput.vue'
export default {
  components: {
    JokeList,
    JokeInput,
  },
  methods: {
    ...mapActions(['fetch']),
    ...mapMutations(['setSearchQuery']),
  },
  computed: {
    ...mapState({
      jokes: (state) => state.jokes,
      searchQuery: (state) => state.searchQuery,
    }),
    ...mapGetters(['getSearchedJokes']),
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

.search {
  width: 100%;
  margin-bottom: 2em;
}
</style>
