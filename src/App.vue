<template>
  <div class="content">
    <div class="content__step">
      <Step v-for="step in steps" :key="step.id" :data="step" />
    </div>

    <BlockInputs />
    <!-- <div class="content__toggle">
      <Toggle :data="toggle" v-model:data="toggle" />
    </div> -->
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
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
  margin-top: 40px;
  // background: var(--color-cool-gray);

  &__buttons {
    margin: 10px;

    & > button {
      margin: 10px;
    }
  }

  &__inputs {
    & > div {
      margin-bottom: 20px;
    }
  }

  &__toggle {
    margin-top: 20px;
  }
}
</style>
