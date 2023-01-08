<template>
  <div class="content">
    <Title class="content__title" :data="header"></Title>

    <div class="content__checkboxes">
      <CheckboxList
        :data="checkboxes"
        v-model:data="checkboxes"
        :getCostPlan="getCostPlan"
        :toggle="toggle.isChecked"
      />
    </div>

    <div class="content__button">
      <Button @click="submit">next step</Button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

/*
  refactor "toggle" - delete set
  replace toggle?
*/

import Title from './UI/Title.vue';
import CheckboxList from './UI/CheckboxList.vue';
import Button from './UI/Button.vue';

export default {
  name: 'block-select-plan',
  components: {
    Title,
    CheckboxList,
    Button,
  },
  setup() {
    const store = useStore();

    return {
      header: computed(() => store.state.blockPickAddons.header),
      checkboxes: computed({
        get: () => store.state.blockPickAddons.checkboxes,
        set: (name) => store.commit('setCheckboxes', name),
      }),
      toggle: computed({
        get: () => store.state.blockSelectPlan.toggle,
        set: () => store.commit('setToggle'),
      }),
      getCostPlan: computed(() => store.getters.getCostPlan),
      submit: () => store.commit('submitPickAddons'),
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
