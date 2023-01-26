<template>
  <div class="content">
    <Title class="content__title" :data="header" />

    <div class="content__options">
      <Options
        class="content__options-item"
        :data="options"
        v-model:data="options"
        :subscriptionDuration="subscriptionDuration"
        :priceWrap="priceWrap"
      />
    </div>

    <div class="content__toggle">
      <Toggle :data="toggle" v-model:data="toggle" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Title from './UI/Title.vue';
import Options from './UI/Options.vue';
import Toggle from './UI/Toggle.vue';

export default {
  name: 'block-select-plan',
  components: {
    Title,
    Options,
    Toggle,
  },
  setup() {
    const store = useStore();

    return {
      header: computed(() => store.state.blockSelectPlan.header),
      options: computed({
        get: () => store.state.blockSelectPlan.options,
        set: (name) => store.commit('setOption', name),
      }),
      getCostPlan: computed(() => store.getters.getCostPlan),
      toggle: computed({
        get: () => store.state.blockSelectPlan.toggle,
        set: () => store.commit('setToggle'),
      }),
      subscriptionDuration: computed(
        () => store.getters.getSubscriptionDuration
      ),
      priceWrap: computed(() => store.getters.priceWrap),
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;

  &__title {
    margin-bottom: 40px;
  }

  &__options {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 208px;
  }

  &__toggle {
    margin-top: 30px;
  }
}

@media (max-width: 1000px) {
  .content {
    border-radius: var(--border-radius);
    background: var(--color-white);
    margin: 0 14px;
    padding: 20px;

    &__title {
      margin-bottom: 20px;
    }

    &__options {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    &__toggle {
      margin-top: 20px;
    }
  }
}
</style>
