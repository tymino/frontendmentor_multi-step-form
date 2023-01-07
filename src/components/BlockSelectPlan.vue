<template>
  <div class="content">
    <Title class="content__title" :data="header"></Title>

    <div class="content__options">
      <Options
        :data="options"
        v-model:data="options"
        :getCostPlan="getCostPlan"
        :toggle="toggle.isChecked"
      />
    </div>

    <div class="content__toggle">
      <Toggle :data="toggle" v-model:data="toggle" />
    </div>

    <div class="content__button">
      <Button @click="submit">next step</Button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Title from './UI/Title.vue';
import Options from './UI/Options.vue';
import Toggle from './UI/Toggle.vue';
import Button from './UI/Button.vue';

export default {
  name: 'block-select-plan',
  components: {
    Title,
    Options,
    Toggle,
    Button,
  },
  setup() {
    const store = useStore();

    return {
      header: computed(() => store.state.blockSelectPlan.header),
      options: computed({
        get: () => store.state.blockSelectPlan.options,
        set: (name) => store.commit('setOption', name),
      }),
      getCostPlan: computed(() => store.getters.getCostPlan),
      toggle: computed({
        get: () => store.state.blockSelectPlan.toggle,
        set: () => store.commit('setToggle'),
      }),
      submit: () => store.commit('submitSelectPlan'),
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 80px;
  width: 100%;

  &__title {
    margin: 40px 0px;
  }

  &__options {
    margin-bottom: 20px;
  }

  &__button {
    display: flex;
    justify-content: flex-end;
    margin-top: 60px;
    margin-bottom: 14px;
  }
}

@media (max-width: 1000px) {
}
</style>
