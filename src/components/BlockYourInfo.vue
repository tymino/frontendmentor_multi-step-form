<template>
  <div class="container">
    <Title class="container__title" :data="header"></Title>

    <div class="container__inputs">
      <Input
        class="container__inputs-item"
        v-for="data in inputs"
        :key="data.id"
        :data="data"
        v-model:data="inputs"
      />
    </div>

    <div class="container__button">
      <Button @click="setCurrentStep">next step</Button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Title from './Title.vue';
import Input from './UI/Input.vue';
import Button from './UI/Button.vue';

export default {
  name: 'block-your-info',
  components: {
    Title,
    Input,
    Button,
  },
  setup() {
    const store = useStore();

    return {
      header: computed(() => store.state.blockYourInfo.header),
      setCurrentStep: () => store.commit('setCurrentStep'),
      inputs: computed({
        get: () => store.state.blockYourInfo.inputs,
        set: (inputData) => {
          store.commit('updateInput', inputData);
        },
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 100px;

  &__title {
    margin: 30px 0px;
  }

  &__inputs {
    &-item:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  &__button {
    display: flex;
    justify-content: flex-end;
    margin-top: 60px;
    margin-bottom: 14px;
  }
}
</style>
