<template>
  <div class="container">
    <div
      class="container__option"
      :class="{ 'container__option--active': option.isSelected }"
      v-for="option in data"
      :key="option.name"
      :data-name="option.name"
      @click="updateOption"
    >
      <img
        class="container__option-icon"
        :src="require(`@/assets/images/${option.icon}`)"
        :alt="option.name"
      />
      <div class="container__option-desc">
        <div class="container__option-name">
          {{ option.name }}
        </div>
        <div class="container__option-price">
          {{ priceWrap(option.price[subscriptionDuration]) }}
        </div>
        <div
          class="container__option-price-description"
          v-if="subscriptionDuration !== 'monthly'"
        >
          2 months free
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-option',
  props: {
    data: {
      type: Object,
      required: true,
    },
    subscriptionDuration: {
      type: String,
      required: true,
    },
    priceWrap: {
      type: Function,
      required: true,
    },
  },
  methods: {
    updateOption(event) {
      const target = event.currentTarget.dataset.name;
      this.$emit('update:data', target);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;

  &__option {
    max-width: 144px;
    padding: 20px;
    border: 1px solid var(--color-light-gray);
    border-radius: var(--border-radius);

    transition: var(--transition-delay);
    cursor: pointer;

    &--active {
      border: 1px solid var(--color-purplish-blue);
    }

    &-icon {
      width: 48px;
      height: 48px;
      margin: 0 60px 50px 0;
    }

    &-name {
      margin-bottom: 8px;
      color: var(--color-marine-blue);
      font-size: 1.1rem;
      font-weight: var(--font-bold);
      text-transform: capitalize;
    }

    &-price {
      color: var(--color-cool-gray);

      &-description {
        margin-top: 10px;
        color: var(--color-marine-blue);
        font-size: 0.9rem;
        font-weight: var(--font-light);
      }
    }
  }
}

@media (max-width: 1000px) {
  .container {
    flex-direction: column;

    &__option {
      display: flex;
      max-width: 100%;
      margin-bottom: 10px;
      padding: 14px;

      &-icon {
        width: 42px;
        height: 42px;
        margin: 0 14px 0px 0;
      }

      &-name {
        margin-bottom: 4px;
        font-size: 1rem;
      }

      &-price {
        font-size: 0.9rem;

        &-description {
          margin-top: 8px;
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
