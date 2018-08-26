<script>
import TopBar from './components/TopBar.vue'
import NavItems from './components/NavItems.vue'
import InfoBox from './components/InfoBox.vue'


const Palettes = [
  ['#ffd96a', '#f34949', '#ff9090', '#ffb6b9'], // https://colorhunt.co/palette/125267
];
const Palette = Palettes[0];
const Colors = {
  one: Palette[0],
  two: Palette[1],
  three: Palette[2],
  four: Palette[3]
}

export default {
  name: 'app',
  data () {
    return {
      backgroundColor: Colors.four,
      topBarColor: Colors.two,
      navItems: [
        { title: 'Contact', backgroundColor: Colors.three, color: Colors.one },
        { title: 'Projects', backgroundColor: Colors.two, color: Colors.three },
        { title: 'About', backgroundColor: Colors.one, color: Colors.two },
      ]
    }
  },
  components: {
    TopBar,
    NavItems,
    InfoBox
  }
}
</script>

<template>
  <div class="app" v-bind:style="{ backgroundColor: backgroundColor }">
    <top-bar class="app__top-bar" :color="topBarColor"></top-bar>
    <div class="app__nav-items">
      <nav-items :nav-items="navItems"></nav-items>
    </div>
    <!-- <info-box></info-box> -->
  </div>
</template>

<style lang="scss">
html, body {
  margin: 0;
  height: 100%;
}
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;

  &__top-bar {
    padding: 30px;
  }

  &__nav-items {
    flex-grow: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}
</style>
