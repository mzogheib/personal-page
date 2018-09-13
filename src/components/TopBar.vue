<script>
export default {
  name: 'top-bar',
  props: ['color']
}
</script>

<template>
  <div class="top-bar" v-bind:style="{ color: color }">Marwan Zogheib</div>
</template>

<style lang="scss">
.top-bar {
  font-size: 30px;
  font-weight: 500;
  text-align: center;
}
</style>
