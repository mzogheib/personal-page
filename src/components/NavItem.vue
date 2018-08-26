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
  height: 220px;
  width: 220px;
  border-radius: 50%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: aquamarine;
  text-transform: uppercase;
  font-size: 30px;
}
</style>
