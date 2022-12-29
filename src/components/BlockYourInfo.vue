<template>
  <div class="container">
    <Title class="container__title" :data="header"></Title>

    <div class="container__form">
      <Input
        class="container__form-item"
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 80px;

  &__title {
    margin: 40px 0px;
  }

  &__form {
    &-item {
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

@media (max-width: 1000px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 0px;
    border-radius: var(--border-radius);

    &__title {
      margin: 0 14px;
      padding: 30px 20px;
      background: var(--color-white);
      border-radius: var(--border-radius) var(--border-radius) 0 0;
    }

    &__form {
      margin: 0 14px;
      padding: 0px 20px;
      background: var(--color-white);

      &-item {
        margin-bottom: 30px;
      }
    }

    &__button {
      padding: 10px 14px;
      background: var(--color-white);
    }
  }
}
</style>
