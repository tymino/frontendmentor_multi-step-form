<template>
  <div class="wrapper">
    <div class="content">
      <div class="content__aside">
        <picture class="content__aside-background">
          <source
            srcset="./assets/images/bg-sidebar-desktop.svg"
            media="(min-width: 1000px)"
          />
          <img src="./assets/images/bg-sidebar-mobile.svg" alt="bg-sidebar " />
        </picture>

        <div class="content__aside-steps">
          <Step
            class="content__aside-steps-item"
            v-for="step in steps"
            :key="step.id"
            :data="step"
          />
        </div>
      </div>

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
  max-width: 950px;
  padding: 14px;
  background: var(--color-white);
  border-radius: var(--border-radius);

  &__aside {
    position: relative;

    &-steps {
      position: absolute;
      top: 40px;
      left: 30px;

      &-item {
        margin-bottom: 30px;
      }
    }
  }
}

@media (max-width: 1000px) {
  .content {
    flex-direction: column;
    align-items: center;
    max-width: 375px;
    padding: 0;
    background: var(--color-magnolia);
    z-index: 2;

    &__aside {
      position: relative;
      width: 100%;

      &-background {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }

      &-steps {
        position: static;
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 30px 0;

        &-item {
          margin-bottom: 0px;

          &:not(:last-child) {
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
