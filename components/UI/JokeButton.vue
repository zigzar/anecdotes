<template>
  <button
    :class="active ? 'btn btn_active' : 'btn'"
    @click.prevent="$emit('clicked')"
  ></button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
}
</script>

<style scoped>
.btn {
  width: 2.5em;
  height: 2.5em;
  background: url('static/like.svg');
  background-position: center;
  background-size: contain;
  border: none;
  transition: 0.3s;
}
.btn:hover {
  transform: translate(-3px, -3px) rotate(-7deg);
}
.btn_active {
  background: url('static/filled-like.svg');
}
</style>