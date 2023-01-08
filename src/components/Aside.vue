<template>
  <div class="aside">
    <picture class="aside__background">
      <source
        srcset="@/assets/images/bg-sidebar-desktop.svg"
        media="(min-width: 1000px)"
      />
      <img src="@/assets/images/bg-sidebar-mobile.svg" alt="bg-sidebar " />
    </picture>

    <div class="aside__steps">
      <Step
        class="aside__steps-item"
        v-for="step in stepsData"
        :key="step.id"
        :data="step"
      />
    </div>
  </div>
</template>

<script>
import Step from '@/components/UI/Step.vue';

export default {
  name: 'c-aside',
  components: { Step },
  props: {
    stepsData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.aside {
  position: relative;
  user-select: none;

  &__steps {
    position: absolute;
    top: 40px;
    left: 30px;

    &-item {
      margin-bottom: 30px;
    }
  }
}

@media (max-width: 1000px) {
  .aside {
    position: relative;
    width: 100%;

    &__background {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

    &__steps {
      position: static;
      display: flex;
      justify-content: center;
      width: 100%;
      margin: 30px 0;

      &-item {
        margin-bottom: 0px;

        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
