<template>
  <div class="nav-items" :class="{ '-focussed': isFocussed }">
    <nav-item
      class="nav-items__item"
      :class="{ '-hidden': item.isHidden, '-focussed': isFocussed }"
      v-for="item in navItems"
      @click.native="() => selectItem(item.title)"
      :key="item.title"
      :title="item.title"
      :background-color="item.backgroundColor"
      :color="item.color"
    ></nav-item>
  </div>
</template>

<script>
import NavItem from './NavItem.vue'

export default {
  props: ['navItems', 'isFocussed', 'onItemSelect'],
  name: 'nav-items',
  data() {
    return {
      selectItem: title => this.onItemSelect(title)
    }
  },
  components: {
    NavItem
  }
}
</script>

<style lang="scss">
.nav-items {
  $itemWidthSmall: 20vw;
  $itemWidthLarge: 50vw;
  $midPointH: 50vw;
  $offsetH: 17vw;
  $offsetV: 17vw;
  $transitionTime: 0.75s;

  position: relative;

  &__item {
    height: $itemWidthSmall;
    width: $itemWidthSmall;
    opacity: 1;
    transition: opacity $transitionTime, left $transitionTime, top $transitionTime;
    position: absolute;
    left: $midPointH - $itemWidthSmall / 2;
    z-index: 2;

    &:first-child {
      left: ($midPointH - $offsetH) - $itemWidthSmall / 2;
      z-index: 3;
    }

    &:last-child {
      left: ($midPointH + $offsetH) - $itemWidthSmall / 2;
      z-index: 1;
    }

    &:hover {
      cursor: pointer;
    }

    &.-focussed {
      left: 30px;
      cursor: default;
    }

    &.-hidden {
      opacity: 0;
      pointer-events: none;
      cursor: default;
    }
  }


  @media (max-width: 630px) {
    &__item {
      height: $itemWidthLarge;
      width: $itemWidthLarge;
      left: $midPointH - $itemWidthLarge / 2;
      top: $itemWidthLarge - $offsetV;

      &:first-child {
        left: $midPointH - $itemWidthLarge / 2;
        top: 0;
      }

      &:last-child {
        left: $midPointH - $itemWidthLarge / 2;
        top: 2 * $itemWidthLarge - 2 * $offsetV;
      }

      &.-focussed {
        left: $midPointH - $itemWidthLarge / 2;
        top: 0;
      }
    }
  }
}
</style>
