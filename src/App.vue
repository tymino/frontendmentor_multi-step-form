<template>
  <div class="content">
    <div class="content__step">
      <Step v-for="step in steps" :key="step.id" :data="step" />
    </div>

    <div class="content__buttons">
      <Button @click="setNextStep">next step</Button>
      <Button btnType="confirm">confirm</Button>
      <Button btnType="link">go back</Button>
    </div>

    <div class="content__inputs">
      <!-- <Input v-for="data in inputs" :key="data.id" :data="data" /> -->
      <Input :data="message" v-model:data="message" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Button from './components/UI/Button.vue';
import Input from './components/UI/Input.vue';
import Step from './components/UI/Step.vue';

export default {
  name: 'App',
  components: {
    Button,
    Input,
    Step,
  },
  setup() {
    const store = useStore();

    return {
      currentStep: computed(() => store.state.currentStep),
      steps: computed(() => store.state.steps),
      inputs: computed(() => store.state.inputs),
      setNextStep: () => store.commit('setNextStep'),
      message: computed({
        get: () => store.state.message,
        set: (value) => store.commit('updateInput', value),
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
}
</style>
