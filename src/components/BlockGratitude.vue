<template>
  <div class="gratitude">
    <img
      class="gratitude__icon"
      src="@/assets/images/icon-thank-you.svg"
      alt="thank-you"
    />
    <h3 class="gratitude__header">Thank you!</h3>
    <p class="gratitude__text">
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </p>
  </div>
</template>

<script>
export default {
  name: 'block-gratitude',
};
</script>

<style lang="scss" scoped>
.gratitude {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 90px;
  text-align: center;

  &__header {
    margin: 30px 0px 16px;
    color: var(--color-marine-blue);
    font-size: 2.1rem;
    font-weight: var(--font-bold);
  }

  &__text {
    color: var(--color-cool-gray);
    font-size: 1.05rem;
    font-weight: var(--font-light);
    line-height: 1.5rem;
  }
}
</style>
