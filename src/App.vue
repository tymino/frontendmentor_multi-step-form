<template>
  <div class="wrapper">
    <div class="app">
      <Aside class="app__aside" :stepsData="steps" />

      <div class="app__form form">
        <BlockYourInfo class="form__content" v-if="currentStep === 1" />
        <BlockSelectPlan class="form__content" v-else-if="currentStep === 2" />
        <BlockPickAddons class="form__content" v-else-if="currentStep === 3" />
        <!-- <BlockPickAddons class="form__content" v-else-if="currentStep === 4" /> -->

        <div class="app__buttons">
          <Button btnType="link" @click="setNextStep('back')">go back</Button>
          <Button
            v-if="currentStep === 4"
            btnType="confirm"
            @click="setNextStep('next')"
            >confirm</Button
          >
          <Button v-else btnType="primary" @click="setNextStep('next')"
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
import BlockYourInfo from './components/BlockYourInfo.vue';
import BlockSelectPlan from './components/BlockSelectPlan.vue';
import BlockPickAddons from './components/BlockPickAddons.vue';
import Button from './components/UI/Button.vue';

export default {
  name: 'App',
  components: {
    Aside,
    BlockYourInfo,
    BlockSelectPlan,
    BlockPickAddons,
    Button,
  },
  setup() {
    const store = useStore();

    return {
      steps: computed(() => store.state.steps),
      currentStep: computed(() => store.state.currentStep),
      setNextStep: (direction) => store.commit('setStep', direction),
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

  &__buttons {
    display: flex;
    justify-content: space-between;
  }
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 90px 10px;
  width: 100%;

  &__content {
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
