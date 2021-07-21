<template>
  <button class="btn" @click.prevent="$emit('clicked')"></button>
</template>

<style scoped>
.btn {
  width: 2.5em;
  height: 2.5em;
  background-color: #ccc;
  border: none;
}
</style>