<template>
  <div class="joke-list">
    <joke v-for="joke in jokes" :joke="joke" :key="joke.id"></joke>
  </div>
</template>

<script>
import Joke from '@/components/Joke.vue'
export default {
  components: {
    Joke,
  },
  props: {
    jokes: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.joke-list {
  border: 2px solid #333;
  padding: 1em;
}

/* Make margin between neighbor jokes */
.joke-list > * + * {
  margin-top: 1em;
}
</style>