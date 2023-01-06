<template>
  <div class="title">
    <h1 class="title__main">{{ data.title }}</h1>
    <h2 class="title__sub">{{ data.subtitle }}</h2>
  </div>
</template>

<script>
export default {
  name: 'c-title',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &__main {
    margin-bottom: 10px;
    color: var(--color-marine-blue);
    font-weight: var(--font-bold);
  }

  &__sub {
    color: var(--color-cool-gray);
    font-size: 1rem;
    font-weight: var(--font-light);
  }
}
</style>
