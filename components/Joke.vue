<template>
  <div :class="liked ? 'joke joke_liked' : 'joke'">
    <div class="joke__text">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius
        omnis vel quos ut! Commodi rerum quibusdam quis dolores laudantium
        ducimus aperiam delectus corporis doloremque, unde animi ullam libero
        eos sint! Quas, error accusamus! Dolorem inventore itaque dolorum vitae
        deserunt reprehenderit ducimus cupiditate nam libero, labore corporis
        quidem maxime ullam.
      </p>
    </div>
    <joke-button class="joke__btn"></joke-button>
  </div>
</template>

<script>
export default {
  props: {
    liked: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
}
</script>

<style scoped>
.joke {
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.joke_liked {
  background-color: lightgreen;
}

.joke__text {
  min-width: 80%;
}
</style>