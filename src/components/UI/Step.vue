<template>
  <div class="step">
    <div class="step__number" :class="{ 'step__number--active': isActive }">
      {{ data.id }}
    </div>
    <div class="step__wrapper">
      <div class="step__subtitle">{{ getSubtitle }}</div>
      <div class="step__title">{{ data.title }}</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'ui-step',
  props: {
    data: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  setup(props) {
    const langStr = 'step';

    const getSubtitle = computed(() => `${langStr} ${props.data.id}`);

    return {
      getSubtitle,
    };
  },
};
</script>

<style lang="scss" scoped>
.step {
  display: flex;
  align-items: center;
  padding: 20px;

  background: var(--color-purplish-blue);

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
