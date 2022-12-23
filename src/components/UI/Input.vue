<template>
  <div class="input">
    <div class="input__describe">
      <div class="input__name">te</div>
      <div class="input__name">{{ data.name }}</div>
      <div class="input__error" v-if="data.error">{{ data.errorText }}</div>
    </div>
    <input
      class="input__input"
      type="text"
      placeholder="test"
      :value="data.value"
      @input="updateInput"
    />
  </div>
</template>

<script>
export default {
  name: 'ui-input',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit('update:data', {
        inputName: this.data.name,
        value: event.target.value,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
