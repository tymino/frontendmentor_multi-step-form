<template>
  <div class="input">
    <div class="input__describe">
      <div class="input__name">{{ data.name }}</div>
      <div class="input__error" v-if="data.error">{{ data.errorText }}</div>
    </div>
    <input
      class="input__input"
      :class="{ 'input__input--error': data.error }"
      type="text"
      :placeholder="data.placeholder"
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

<style lang="scss" scoped>
.input {
  width: 100%;
  max-width: 600px;

  &__describe {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  &__name {
    color: var(--color-marine-blue);
    font-weight: var(--font-medium);
    text-transform: capitalize;
  }

  &__error {
    color: var(--color-strawberry-red);
  }

  &__input {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--color-light-gray);
    border-radius: var(--border-radius);
    color: var(--color-marine-blue);
    font-size: 1rem;
    font-family: var(--font-family);
    font-weight: var(--font-bold);
    outline: none;

    &::placeholder {
      color: var(--color-cool-gray);
    }

    &--error {
      border: 1px solid var(--color-strawberry-red);
    }

    &:focus:not(.input__input--error) {
      border: 1px solid var(--color-purplish-blue);
    }
  }
}
</style>
