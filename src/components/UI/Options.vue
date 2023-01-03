<template>
  <div class="container">
    <div class="container__option" v-for="option in data" :key="option.name">
      <img
        class="container__option-icon"
        :src="`@/assets/images/${option.icon}`"
        :alt="option.name"
      />
      <div class="container__option-name">{{ option.name }}</div>
      <div class="container__option-price">
        {{ getCostPlan(option.price) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-option',
  props: {
    data: {
      type: Object,
      required: true,
    },
    getCostPlan: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
