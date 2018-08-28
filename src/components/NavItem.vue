<template>
  <div class="nav-item" v-bind:style="{ backgroundColor: backgroundColor, color: color }">
    <span>{{ title }}</span>
 </div>
</template>

<script>
export default {
  props: ['title', 'backgroundColor', 'color'],
  name: 'nav-item'
}
</script>

<style lang="scss">
.nav-item {
  border-radius: 50%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  text-transform: uppercase;
  font-size: 30px;

  // Maintain 1:1 aspect ratio
  &::before {
    content: '';
    padding-top: 100%;
  }

}
</style>
