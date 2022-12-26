<template>
  <div class="container">
    <div class="container__title-left">{{ data.titleLeft }}</div>
    <div class="container__toggle toggle">
      <label class="toggle">
        <input type="checkbox" :value="data.isChecked" @input="updateToggle" />
        <span class="slider round"></span>
      </label>
    </div>
    <div class="container__title-right">{{ data.titleRight }}</div>
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
.toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
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
    background-color: #2196f3;
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
}
</style>
