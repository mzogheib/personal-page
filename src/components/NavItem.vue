<script>
export default {
  props: ['title', 'backgroundColor', 'color'],
  name: 'nav-item'
}
</script>

<template lang="pug">
.nav-item(:style="{ backgroundColor: backgroundColor, color: color }")
  span {{ title }}
</template>

<style lang="scss">
.nav-item {
  border-radius: 50%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  text-transform: uppercase;
  font-size: 24px;
  font-weight: 500;

  // Maintain 1:1 aspect ratio
  &::before {
    content: '';
    padding-top: 100%;
  }
}
</style>
