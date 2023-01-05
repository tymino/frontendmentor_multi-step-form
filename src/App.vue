<template>
  <div class="wrapper">
    <div class="app">
      <Aside class="app__aside" :stepsData="steps" />

      <BlockYourInfo v-if="currentStep === 1" />
      <BlockSelectPlan v-else-if="currentStep === 2" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Aside from './components/Aside.vue';
import BlockYourInfo from './components/BlockYourInfo.vue';
import BlockSelectPlan from './components/BlockSelectPlan.vue';

export default {
  name: 'App',
  components: {
    Aside,
    BlockYourInfo,
    BlockSelectPlan,
  },
  setup() {
    const store = useStore();

    return {
      steps: computed(() => store.state.steps),
      currentStep: computed(() => store.getters.currentStep),
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

.app {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 950px;
  padding: 14px;
  background: var(--color-white);
  border-radius: var(--border-radius);
}

@media (max-width: 1000px) {
  .app {
    flex-direction: column;
    align-items: center;
    max-width: 375px;
    padding: 0;
    background: var(--color-magnolia);
    z-index: 2;
  }
}
</style>
