<script>
import NavItem from './NavItem.vue'

export default {
  props: ['navItems', 'isFocussed', 'onItemSelect'],
  name: 'nav-items',
  data() {
    return {
      selectItem: (title) => this.onItemSelect(title),
    }
  },
  components: {
    NavItem,
  },
}
</script>

<template lang="pug">
.nav-items(:class="{ '-focussed': isFocussed }")
  nav-item.nav-items__item(
    :class="{ '-hidden': item.isHidden, '-focussed': isFocussed }"
    v-for="item in navItems"
    @click.native="() => selectItem(item.title)"
    :key="item.title"
    :title="item.title"
    :background-color="item.backgroundColor"
    :color="item.color")
</template>

<style lang="scss">
@use '../scss/variables.scss' as vars;

.nav-items {
  $midPointH: 50%;
  $offsetH: calc(0.75 * #{vars.$itemWidth});
  $offsetV: calc(0.25 * #{vars.$itemWidth});

  position: relative;

  &__item {
    width: 100%;
    max-height: vars.$itemWidth;
    max-width: vars.$itemWidth;
    opacity: 1;
    transition:
      opacity vars.$transitionTime,
      left vars.$transitionTime,
      top vars.$transitionTime;
    position: absolute;
    left: calc(#{$midPointH} - #{vars.$itemWidth} / 2);
    z-index: 2;

    &:first-child {
      left: calc(#{$midPointH} - #{vars.$itemWidth} / 2 - #{$offsetH});
      z-index: 3;
    }

    &:last-child {
      left: calc(#{$midPointH} - #{vars.$itemWidth} / 2 + #{$offsetH});
      z-index: 1;
    }

    &:hover {
      cursor: pointer;
    }

    &.-focussed {
      left: 0;
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
      left: calc(#{$midPointH} - #{vars.$itemWidth} / 2);
      top: calc(#{vars.$itemWidth} - #{$offsetV});

      &:first-child {
        left: calc(#{$midPointH} - #{vars.$itemWidth} / 2);
        top: 0;
      }

      &:last-child {
        left: calc(#{$midPointH} - #{vars.$itemWidth} / 2);
        top: calc(2 * (#{vars.$itemWidth} - #{$offsetV}));
      }

      &.-focussed {
        left: calc(#{$midPointH} - #{vars.$itemWidth} / 2);
        top: 0;
        opacity: 0;
      }
    }
  }
}
</style>
