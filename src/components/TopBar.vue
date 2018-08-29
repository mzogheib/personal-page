<template>
  <div class="top-bar" v-bind:style="{ color: color }">Marwan Zogheib</div>
</template>

<script>
export default {
  name: 'top-bar',
  props: ['color']
}
</script>

<style lang="scss">
.top-bar {
  font-size: 30px;
  font-weight: 500;

  @media (max-width: 630px) {
    text-align: center;
  }
}
</style>
