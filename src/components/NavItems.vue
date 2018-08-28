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
  position: relative;

  &__item {
    height: 20vw;
    width: 20vw;
    opacity: 1;
    transition: opacity 1s, left 1s, top 1s;
    position: absolute;
    left: 50vw - 10vw;
    z-index: 2;

    &:first-child {
      left: 35vw - 10vw;
      z-index: 3;
    }

    &:last-child {
      left: 66vw - 10vw;
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
      height: 50vw;
      width: 50vw;
      left: 50vw - 25vw;
      top: 30vw;

      &:first-child {
        left: 50vw - 25vw;
        top: 0;
      }

      &:last-child {
        left: 50vw - 25vw;
        top: 60vw;
      }

      &.-focussed {
        left: 50vw - 25vw;
        top: 0;
      }
    }
  }
}
</style>
