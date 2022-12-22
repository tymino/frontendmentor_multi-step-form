<template>
  <div class="content">
    <Step v-for="step in steps" :key="step.id" :data="step" />

    <div class="content__buttons">
      <Button @click="setNextStep">next step</Button>
      <Button btnType="confirm">confirm</Button>
      <Button btnType="link">go back</Button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Step from './components/UI/Step.vue';
import Button from './components/UI/Button.vue';

export default {
  name: 'App',
  components: {
    Step,
    Button,
  },
  setup() {
    const store = useStore();

    return {
      currentStep: computed(() => store.state.currentStep),
      steps: computed(() => store.state.steps),
      setNextStep: () => store.commit('setNextStep'),
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
}
</style>
