<template>
  <div class="checkbox-list">
    <div class="checkbox-list__item item" v-for="item in data" :key="item.name">
      <div class="item__checkbox">
        <img class="item__checkbox-checked" v-if="isSelected" />
      </div>
      <div class="item__name">
        <div class="item__name-title"></div>
        <div class="item__name-description"></div>
      </div>
      <div class="item__price">{{ getCostPlan(item.price) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-checkbox-list',
  props: {
    data: {
      type: Object,
      required: true,
    },
    toggle: {
      type: Boolean,
      default: false,
    },
    getCostPlan: {
      type: Function,
      required: true,
    },
  },
  methods: {
    updateOption(event) {
      const target = event.currentTarget.dataset.name;
      this.$emit('update:data', target);
    },
  },
};
</script>

<style lang="scss" scoped></style>
