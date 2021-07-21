<template>
  <div class="container">
    <div class="search"></div>
    <joke-list></joke-list>
  </div>
</template>

<script>
import JokeList from '@/components/JokeList.vue'
export default {
  components: {
    JokeList,
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
