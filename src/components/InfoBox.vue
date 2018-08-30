<script>
import CloseIcon from 'vue-material-design-icons/Close.vue'

export default {
  name: 'info-box',
  props: ['backgroundColor', 'isFocussed', 'onCancel'],
  components: {
    CloseIcon
  }
}
</script>

<template>
  <div class="info-box">
    <div class="info-box__content-wrapper" :class="{ '-focussed': isFocussed }" v-bind:style="{ backgroundColor: backgroundColor }">
      <div class="info-box__header" ><close-icon class="info-box__icon-button" @click.native="onCancel"></close-icon></div>
      <div class="info-box__content"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../scss/variables.scss';

.info-box {
  position: relative;

  &__content-wrapper {
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

  &__header {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }

  &__icon-button {
    cursor: pointer;
  }

  @media (max-width: 630px) {
    &__content-wrapper {
      left: 5vw;
      width: 90vw;

      &.-focussed {
        left: 5vw;
        width: 90vw;
      }
    }
  }
}

$iconSize: 2.125em;
.material-design-icon {
  display: inline-flex;
  align-self: center;
  position: relative;
  height: $iconSize;
  width: $iconSize;
}
.material-design-icon > .material-design-icon__svg {
  height: $iconSize;
  width: $iconSize;
  fill: currentColor;
  position: absolute;
  bottom: -0.125em;
}

</style>
