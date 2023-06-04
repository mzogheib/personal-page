<script>
import CloseIcon from 'vue-material-design-icons/Close.vue'

export default {
  name: 'info-box',
  props: ['onCancel'],
  components: {
    CloseIcon
  }
}
</script>

<template lang="pug">
.info-box
  .info-box__header
    close-icon.info-box__icon-button(@click.native="onCancel")
  .info-box__content
    slot
</template>

<style lang="scss">
@import '../scss/variables.scss';

.info-box {
  &__header {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }

  &__icon-button {
    cursor: pointer;
  }

  &__content {
    padding: 0 10px 15px;
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
