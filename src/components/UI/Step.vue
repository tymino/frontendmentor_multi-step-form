<template>
  <div class="step">
    <div
      class="step__number"
      :class="{ 'step__number--active': data.isActive }"
    >
      {{ data.id }}
    </div>
    <div class="step__wrapper">
      <div class="step__subtitle">{{ data.subtitle }} {{ data.id }}</div>
      <div class="step__title">{{ data.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-step',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.step {
  display: flex;
  align-items: center;
  transition: all 0.8s ease;

  &__number {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    margin-right: 14px;

    border: 1px solid var(--color-white);
    border-radius: 50%;

    color: var(--color-white);
    font-size: 1.2rem;
    font-weight: var(--font-light);

    &--active {
      background: var(--color-light-blue);
      border: 1px solid var(--color-opacity);
      color: var(--color-marine-blue);
      transition: all 0.4s ease;
    }
  }

  &__wrapper {
    text-transform: uppercase;
  }

  &__subtitle {
    color: var(--color-cool-gray);
    font-weight: var(--font-light);
  }

  &__title {
    color: var(--color-white);
    font-weight: var(--font-bold);
  }
}
</style>
