<template>
  <div class="wrapper">
    <div class="content">
      <Aside class="content__aside" :stepsData="steps" />

      <BlockInputs />
      <!-- <div class="content__toggle">
      <Toggle :data="toggle" v-model:data="toggle" />
    </div> -->
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Aside from './components/Aside.vue';
import BlockInputs from './components/BlockYourInfo.vue';

export default {
  name: 'App',
  components: {
    Aside,
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
  max-width: 950px;
  padding: 14px;
  background: var(--color-white);
  border-radius: var(--border-radius);
}

@media (max-width: 1000px) {
  .content {
    flex-direction: column;
    align-items: center;
    max-width: 375px;
    padding: 0;
    background: var(--color-magnolia);
    z-index: 2;
  }
}
</style>
