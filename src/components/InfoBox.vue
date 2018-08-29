<script>
export default {
  name: 'info-box',
  props: ['backgroundColor', 'isFocussed']
}
</script>

<template>
  <div class="info-box">
    <div class="info-box__content" :class="{ '-focussed': isFocussed }" v-bind:style="{ backgroundColor: backgroundColor }">Marwan Zogheib</div>
  </div>
</template>

<style lang="scss">
@import '../scss/variables.scss';

.info-box {
  position: relative;

  &__content {
    position: absolute;
    left: 95vw;
    width: 0;
    height: 400px;
    border-radius: 16px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
    transition: left $transitionTime, width $transitionTime;
    white-space: nowrap;

    &.-focussed {
      left: 35vw;
      width: 60vw;
    }
  }

  @media (max-width: 630px) {
    &__content {
      left: 5vw;
      width: 90vw;

      &.-focussed {
        left: 5vw;
        width: 90vw;
      }
    }
  }
}
</style>
