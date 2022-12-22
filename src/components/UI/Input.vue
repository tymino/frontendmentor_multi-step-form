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
      :value="message"
      @input="updateMessage"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ui-input',
  props: {
    // data: {
    //   type: Object,
    //   required: true,
    // },
  },
  computed: {
    ...mapState({
      message: (state) => state.message,
    }),
  },
  methods: {
    updateMessage(e) {
      console.log('message');
      this.$store.commit('updateInput', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
