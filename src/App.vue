<template>
  <div class="content">
    <Step v-for="step in steps" :key="step.id" :data="step" />
    <button @click="setNextStep">click</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Step from './components/UI/Step.vue';

export default {
  name: 'App',
  components: {
    Step,
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
  justify-content: center;
  margin-top: 40px;
  background: var(--color-cool-gray);
}
</style>
