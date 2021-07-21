<template>
  <input class="input" type="text" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>

<style scoped>
.input {
  display: block;
  padding: 1em;
  border: 2px solid #333;
}
</style>