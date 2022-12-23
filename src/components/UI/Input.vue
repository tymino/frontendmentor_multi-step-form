<template>
  <div class="input">
    <div class="input__describe">
      <div class="input__name">te</div>
      <!-- <div class="input__name">{{ data.name }}</div>
      <div class="input__error" v-if="data.error">{{ data.errorText }}</div> -->
    </div>
    <input
      class="input__input"
      type="text"
      placeholder="test"
      :value="data"
      @input="this.$emit('update:data', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'ui-input',
  props: {
    data: {
      type: String,
      required: true,
    },
  },
  // methods: {
  //   updateMessage(e) {
  //     console.log('message');
  //     this.$store.commit('updateInput', e.target.value);
  //   },
  // },
};
</script>

<style lang="scss" scoped></style>
