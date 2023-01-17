<template>
  <div class="content">
    <Title class="content__title" :data="header" />

    <div class="content__body body">
      <div class="body__row row">
        <div class="row__plan-wrapper">
          <div class="row__plan-description">
            <div class="row__plan-name">{{ getTotalInfo }}</div>
            <div class="row__plan-duration"></div>
          </div>
          <Button class="row__plan-button" @click="returnStepTwo" btnType="link"
            >change</Button
          >
        </div>
        <div class="row__plan-price"></div>
      </div>

      <div class="body__row row">
        <div class="row__addons">
          <div class="row__addons-name"></div>
          <div class="row__addons-price"></div>
        </div>
      </div>

      <div class="body__row row">
        <div class="row__total">
          <div class="row__total-name"></div>
          <div class="row__total-price"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Title from './UI/Title.vue';
import Button from './UI/Button.vue';

export default {
  name: 'block-summary',
  components: {
    Title,
    Button,
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
