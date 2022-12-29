<template>
  <div class="wrapper">
    <div class="content">
      <div class="content__step">
        <Step v-for="step in steps" :key="step.id" :data="step" />
      </div>

      <BlockInputs class="content__block" />
      <!-- <div class="content__toggle">
      <Toggle :data="toggle" v-model:data="toggle" />
    </div> -->
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Step from './components/UI/Step.vue';
import BlockInputs from './components/BlockYourInfo.vue';

export default {
  name: 'App',
  components: {
    Step,
    BlockInputs,
  },
  setup() {
    const store = useStore();

    return {
      currentStep: computed(() => store.state.currentStep),
      steps: computed(() => store.state.steps),
      setCurrentStep: () => store.commit('setCurrentStep'),
      inputs: computed({
        get: () => store.state.inputs,
        set: (inputData) => {
          store.commit('updateInput', inputData);
        },
      }),

      // toggle: computed({
      //   get: () => store.state.toggle,
      //   set: (value) => {
      //     store.commit('updateToggle', value);
      //   },
      // }),
      header: computed(() => store.state.blockSelectPlan.header),
      toggle: computed({
        get: () => store.state.blockSelectPlan.toggle,
        set: (value) => {
          store.commit('updateToggle', value);
        },
      }),
    };
  },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  background: var(--color-magnolia);
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: var(--design-max-width);
  padding: 14px;
  background: var(--color-white);
  border-radius: var(--border-radius);

  &__step {
    margin-right: 10px;
  }

  &__block {
  }
}
</style>
