<template>
  <div class="wrapper">
    <div class="app">
      <Aside class="app__aside" :stepsData="steps" />

      <Gratitude class="app__gratitude" v-if="isVisibleGratitude" />

      <div class="app__form form" v-else>
        <BlockYourInfo v-if="currentStep === 1" />
        <BlockSelectPlan v-else-if="currentStep === 2" />
        <BlockPickAddons v-else-if="currentStep === 3" />
        <BlockSummary v-else-if="currentStep === 4" />

        <div class="form__buttons">
          <Button btnType="link" @click="setPrevStep">go back</Button>
          <Button
            v-if="currentStep === 4"
            btnType="confirm"
            @click="setNextStep"
            >confirm</Button
          >
          <Button v-else btnType="primary" @click="setNextStep"
            >next step</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Aside from './components/Aside.vue';
import Gratitude from './components/BlockGratitude.vue';
import BlockYourInfo from './components/BlockYourInfo.vue';
import BlockSelectPlan from './components/BlockSelectPlan.vue';
import BlockPickAddons from './components/BlockPickAddons.vue';
import BlockSummary from './components/BlockSummary.vue';
import Button from './components/UI/Button.vue';

export default {
  name: 'App',
  components: {
    Aside,
    Gratitude,
    BlockYourInfo,
    BlockSelectPlan,
    BlockPickAddons,
    BlockSummary,
    Button,
  },
  setup() {
    const store = useStore();

    return {
      isVisibleGratitude: computed(() => store.state.isTheEnd),
      steps: computed(() => store.state.steps),
      currentStep: computed(() => store.state.currentStep),
      setPrevStep: () => store.commit('setPrevStep'),
      setNextStep: () => store.commit('setNextStep'),
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

.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 90px 20px;
  width: 100%;

  // &__content {
  // }

  &__buttons {
    display: flex;
    justify-content: space-between;
  }
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
