<template>
  <div class="content">
    <div class="content__step">
      <Step v-for="step in steps" :key="step.id" :data="step" />
    </div>

    <!-- <div class="content__buttons">
      <Button @click="setNextStep">next step</Button>
      <Button btnType="confirm">confirm</Button>
      <Button btnType="link">go back</Button>
    </div>

    <div class="content__inputs">
      <Input
        v-for="data in inputs"
        :key="data.id"
        :data="data"
        v-model:data="inputs"
      />
    </div> -->
    <div class="content__toggle">
      <Toggle :data="toggle" v-model:data="toggle" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
// import Button from './components/UI/Button.vue';
// import Input from './components/UI/Input.vue';
import Step from './components/UI/Step.vue';
import Toggle from './components/UI/Toggle.vue';

export default {
  name: 'App',
  components: {
    // Button,
    // Input,
    Step,
    Toggle,
  },
  setup() {
    const store = useStore();

    return {
      currentStep: computed(() => store.state.currentStep),
      steps: computed(() => store.state.steps),
      setNextStep: () => store.commit('setNextStep'),
      inputs: computed({
        get: () => store.state.inputs,
        set: (inputData) => {
          store.commit('updateInput', inputData);
        },
      }),
      toggle: computed({
        get: () => store.state.toggle,
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
