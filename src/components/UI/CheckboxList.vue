<template>
  <div class="checkbox-list">
    <div
      class="checkbox-list__item item"
      :class="{ 'item--checked': item.isSelected }"
      v-for="item in data"
      :key="item.name"
    >
      <div
        class="item__checkbox"
        :class="{ 'item__checkbox--checked': item.isSelected }"
      >
        <img
          class="item__checkbox-checkmark"
          v-show="item.isSelected"
          :src="require(`@/assets/images/icon-checkmark.svg`)"
          alt="checkmark"
        />
      </div>
      <div class="item__wrapper">
        <div class="item__text">
          <div class="item__text-title">{{ item.name }}</div>
          <div class="item__text-description">
            {{ item.description }}
          </div>
        </div>
        <div class="item__price">{{ getCostPlan(item.price) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-checkbox-list',
  props: {
    data: {
      type: Object,
      required: true,
    },
    toggle: {
      type: Boolean,
      default: false,
    },
    getCostPlan: {
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
.checkbox-list {
  &__item {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}

.item {
  display: flex;
  padding: 20px;
  align-items: center;
  border: 1px solid var(--color-light-gray);
  border-radius: var(--border-radius);

  &--checked {
    border: 1px solid var(--color-purplish-blue);
  }

  &__checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 24px;
    padding: 2px;
    border: 1px solid var(--color-light-gray);
    border-radius: var(--border-radius);
    cursor: pointer;

    &--checked {
      background: var(--color-purplish-blue);
      border: 1px solid var(--color-purplish-blue);
    }

    &-checkmark {
      width: 100%;
      height: 100%;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-left: 20px;
  }

  &__text {
    &-title {
      margin-bottom: 6px;
      color: var(--color-marine-blue);
      font-size: 1.1rem;
      font-weight: var(--font-medium);
    }

    &-description {
      color: var(--color-cool-gray);
      font-weight: var(--font-light);
    }
  }

  &__price {
    color: var(--color-purplish-blue);
    font-weight: var(--font-light);
  }
}
</style>