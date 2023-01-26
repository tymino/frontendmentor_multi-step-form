<template>
  <div class="content">
    <Title :data="header" />

    <div class="body">
      <div class="body__background">
        <div class="body__row">
          <div class="row row__plan">
            <div class="row__plan-wrapper">
              <div class="row__plan-description">
                <span class="row__plan-description-name">
                  {{ getTotalInfo.plan.name }}
                </span>
                <span class="row__plan-description-duration">
                  ({{ getTotalInfo.plan.duration }})
                </span>
              </div>
              <Button
                class="row__plan-button"
                @click="returnStepTwo"
                btnType="link"
                >change</Button
              >
            </div>
            <div class="row__plan-price">
              {{ priceWrap(getTotalInfo.plan.price) }}
            </div>
          </div>
        </div>
        <div class="body__row row">
          <div
            class="row__addon"
            v-for="addon in getTotalInfo.addons"
            :key="addon.name"
          >
            <div class="row__addon-name">{{ addon.name }}</div>
            <div class="row__addon-price">+{{ priceWrap(addon.price) }}</div>
          </div>
        </div>
      </div>

      <div class="body__row row">
        <div class="row__total">
          <div class="row__total-name">
            Total (per {{ getTotalInfo.total.perValue }})
          </div>
          <div class="row__total-price">
            +{{ priceWrap(getTotalInfo.total.price) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Title from './UI/Title.vue';
import Button from './UI/Button.vue';

export default {
  name: 'block-summary',
  components: {
    Title,
    Button,
  },
  setup() {
    const store = useStore();

    return {
      header: computed(() => store.state.blockSummary.header),
      getTotalInfo: computed(() => store.getters.getTotalInfo),
      subscriptionDuration: computed(
        () => store.getters.getSubscriptionDuration
      ),
      returnStepTwo: () => store.commit('returnStepTwo'),
      priceWrap: computed(() => store.getters.priceWrap),
    };
  },
};
</script>

<style lang="scss" scoped>
.body {
  margin-top: 40px;

  &__background {
    background: var(--color-alabaster);
    border-radius: var(--border-radius);
  }

  &__row {
    position: relative;
  }
}
.row {
  margin: 0 24px;
  padding: 24px 0;
}
.row__plan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid var(--color-light-gray);

  &-description {
    display: flex;
    color: var(--color-marine-blue);
    font-size: 1.1rem;
    font-weight: var(--font-medium);

    &-name {
      margin-right: 6px;
      text-transform: capitalize;
    }
    &-duration {
      text-transform: capitalize;
    }
  }

  &-button {
    margin-top: 6px;
    border-bottom: 2px solid var(--color-cool-gray);
    border-radius: 0;
    font-size: 0.9rem;
    font-weight: var(--font-light);
  }

  &-price {
    color: var(--color-marine-blue);
    font-size: 1.1rem;
    font-weight: var(--font-medium);
  }
}

.row__addon {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: var(--font-light);

  &-name {
    color: var(--color-cool-gray);
  }

  &-price {
    color: var(--color-marine-blue);
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
}

.row__total {
  display: flex;
  justify-content: space-between;

  &-name {
    color: var(--color-cool-gray);
    font-size: 1rem;
    font-weight: var(--font-light);
  }

  &-price {
    color: var(--color-purplish-blue);
    font-size: 1.2rem;
    font-weight: var(--font-bold);
  }
}

@media (max-width: 1000px) {
  .content {
    border-radius: var(--border-radius);
    background: var(--color-white);
    margin: 0 14px;
    padding: 20px;
  }
}
</style>
