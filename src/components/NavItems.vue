<template>
  <div class="nav-items">
    <nav-item
      class="nav-items__item"
      v-for="item in navItems"
      :key="item.name"
      :title="item.title"
      :background-color="item.backgroundColor"
      :color="item.color"
    ></nav-item>
  </div>
</template>

<script>
import NavItem from './NavItem.vue'

export default {
  props: ['navItems'],
  name: 'nav-items',
  components: {
    NavItem
  }
}
</script>

<style lang="scss">
.nav-items {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

  &__item {
    flex-basis: 33.3333333%;
    position: relative;
  }

  &__item:first-child {
    left: -30px;
  }

  &__item:last-child {
    right: -30px;
  }

  @media (max-width: 630px) {
    flex-direction: column-reverse;

    &__item:first-child {
      left: 0;
      top: -30px;
    }

    &__item:last-child {
      right: 0;
      bottom: -30px;
    }
  }
}
</style>
