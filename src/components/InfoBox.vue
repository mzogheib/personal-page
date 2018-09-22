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

<template>
  <div class="info-box">
    <div class="info-box__header" ><close-icon class="info-box__icon-button" @click.native="onCancel"></close-icon></div>
    <div class="info-box__content"><slot></slot></div>
  </div>
</template>

<style lang="scss">
@import '../scss/variables.scss';

.info-box {
  &__header {
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;
  }

  &__icon-button {
    cursor: pointer;
  }

  &__content {
    padding: 0 25px 15px;
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
