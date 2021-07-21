<template>
  <div :class="liked ? 'joke joke_liked' : 'joke'">
    <div class="joke__text">
      <p>{{ joke.joke }}</p>
    </div>
    <joke-button class="joke__btn" @clicked="likeJoke"></joke-button>
  </div>
</template>

<script>
import JokeButton from '@/components/UI/JokeButton.vue'
export default {
  components: {
    JokeButton,
  },
  props: {
    joke: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      liked: this.joke.liked,
    }
  },
  methods: {
    async likeJoke() {
      this.liked = !this.liked
      this.liked
        ? await this.$store.dispatch('addLikedJoke', this.joke)
        : await this.$store.dispatch('removeLikedJoke', this.joke)
    },
  },
}
</script>

<style scoped>
.joke {
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #333;
}

.joke_liked {
  background-color: lightgreen;
}

.joke__text {
  min-width: 260px;
  max-width: 80%;
}
</style>