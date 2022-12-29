<template>
  <div class="container">
    <Title :data="header"></Title>

    <div class="content__inputs">
      <Input
        v-for="data in inputs"
        :key="data.id"
        :data="data"
        v-model:data="inputs"
      />
    </div>

    <Button @click="setCurrentStep">next step</Button>
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

<style lang="scss" scoped></style>
