<template>
  <button class="button" :class="`button--${btnType}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ui-button',
  props: {
    btnType: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 12px 22px;
  border: none;
  border-radius: 6px;

  font-family: var(--font-ubuntu);
  font-size: 1rem;
  font-weight: var(--font-medium);
  text-transform: capitalize;

  transition: all 0.4s ease;
  cursor: pointer;

  &--primary {
    background: var(--color-marine-blue);
    color: var(--color-white);

    &:hover {
      opacity: 0.9;
    }
  }

  &--confirm {
    background: var(--color-purplish-blue);
    color: var(--color-white);

    &:hover {
      opacity: 0.9;
    }
  }

  &--link {
    background: none;
    color: var(--color-cool-gray);

    &:hover {
      color: var(--color-marine-blue);
    }
  }
}
</style>
