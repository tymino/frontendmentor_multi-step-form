<template>
  <div class="content">
    <Title class="content__title" :data="header" />

    <div class="content__checkboxes">
      <CheckboxList
        :data="checkboxes"
        v-model:data="checkboxes"
        :subscriptionDuration="subscriptionDuration"
        :priceWrap="priceWrap"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Title from './UI/Title.vue';
import CheckboxList from './UI/CheckboxList.vue';

export default {
  name: 'block-select-plan',
  components: {
    Title,
    CheckboxList,
  },
  setup() {
    const store = useStore();

    return {
      header: computed(() => store.state.blockPickAddons.header),
      checkboxes: computed({
        get: () => store.state.blockPickAddons.checkboxes,
        set: (name) => store.commit('setCheckboxes', name),
      }),
      subscriptionDuration: computed(
        () => store.getters.getSubscriptionDuration
      ),
      priceWrap: computed(() => store.getters.priceWrap),
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__title {
    margin-bottom: 40px;
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
