<template>
  <div class="content">
    <Title class="content__title" :data="header"></Title>

    <div class="content__form">
      <Input
        class="content__form-item"
        v-for="data in inputs"
        :key="data.id"
        :data="data"
        v-model:data="inputs"
        v-on:blur="handleBlur"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Title from './UI/Title.vue';
import Input from './UI/Input.vue';

export default {
  name: 'block-your-info',
  components: {
    Title,
    Input,
  },
  setup() {
    const store = useStore();

    return {
      header: computed(() => store.state.blockYourInfo.header),
      inputs: computed({
        get: () => store.state.blockYourInfo.inputs,
        set: (inputData) => {
          store.commit('setInputs', inputData);
        },
      }),
      handleBlur: (inputName) => store.commit('handleBlur', inputName),
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // width: 100%;

  &__title {
    margin-bottom: 40px;
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
  .content {
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
