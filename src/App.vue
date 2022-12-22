<template>
  <div class="content">
    <Step :data="{ id: 1, title: 'your info' }" :isActive="true" />
    <Step :data="{ id: 2, title: 'select plan' }" :isActive="false" />
  </div>
</template>

<script>
import Step from './components/UI/Step.vue';

export default {
  name: 'App',
  components: {
    Step,
  },
};
</script>

<style lang="scss">
.content {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  background: var(--color-cool-gray);
}
</style>
