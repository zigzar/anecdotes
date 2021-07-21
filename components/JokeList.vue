<template>
  <div class="joke-list">
    <joke></joke>
    <joke></joke>
    <joke></joke>
    <joke></joke>
    <joke></joke>
    <joke></joke>
    <joke></joke>
  </div>
</template>

<script>
import Joke from '@/components/Joke.vue'
export default {
  components: {
    Joke,
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