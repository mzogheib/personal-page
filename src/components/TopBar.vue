<script>
export default {
  name: 'top-bar',
  props: ['color']
}
</script>

<template lang="pug">
  .top-bar(:style="{ color: color }") Marwan Zogheib
</template>

<style lang="scss">
.top-bar {
  font-size: 30px;
  font-weight: 500;
  text-align: center;
}
</style>
