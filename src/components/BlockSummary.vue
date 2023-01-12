<template>
  <div class="content">
    <Title class="content__title" :data="header" />

    <div>{{ getTotalInfo.value }}</div>

    <button @click="returnStepTwo">click</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Title from './UI/Title.vue';

export default {
  name: 'block-summary',
  components: {
    Title,
  },
  setup() {
    const store = useStore();

    return {
      header: computed(() => store.state.blockSummary.header),
      getTotalInfo: computed(() => store.getters.getTotalInfo),
      subscriptionDuration: computed(
        () => store.getters.getSubscriptionDuration
      ),
      returnStepTwo: () => store.commit('returnStepTwo'),
    };
  },
};
</script>

<style lang="scss" scoped></style>
