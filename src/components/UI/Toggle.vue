<template>
  <div class="container">
    <div
      class="container__title"
      :class="{
        'container__title--active': !data.isChecked,
      }"
    >
      {{ data.titleLeft }}
    </div>
    <div class="container__toggle toggle">
      <label class="toggle">
        <input
          type="checkbox"
          :checked="data.isChecked"
          @input="updateToggle"
        />
        <span class="slider round"></span>
      </label>
    </div>
    <div
      class="container__title"
      :class="{
        'container__title--active': data.isChecked,
      }"
    >
      {{ data.titleRight }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-toggle',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateToggle(event) {
      this.$emit('update:data', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  background: var(--color-magnolia);

  &__title {
    color: var(--color-cool-gray);
    font-family: var(--font-family);
    font-weight: var(--font-medium);
    text-transform: capitalize;
    margin: 0 20px;
    transition: 0.4s;

    &--active {
      color: var(--color-marine-blue);
    }
  }
}

.toggle {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-marine-blue);
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: var(--color-white);
    transition: 0.4s;
  }

  &.round {
    border-radius: 34px;

    &:before {
      border-radius: 50%;
    }
  }
}

input {
  &:checked + .slider {
    background-color: var(--color-marine-blue);
  }

  &:focus + .slider {
    box-shadow: 0 0 1px var(--color-marine-blue);
  }

  &:checked + .slider:before {
    transform: translateX(24px);
  }
}
</style>
