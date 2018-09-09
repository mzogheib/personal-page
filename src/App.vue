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

const setBackgroundColor = color => document.getElementsByTagName('html')[0].style.backgroundColor = color;
const focusItem = (title, items) => items.map(item => ({ ...item, isHidden: title && item.title !== title }));

export default {
  name: 'app',
  data () {
    return {
      backgroundColor: Colors.four,
      topBarColor: Colors.two,
      infoBoxBackgroundColor: Colors.three,
      isFocussed: false,
      navItems: [
        { title: 'About', isHidden: false, backgroundColor: Colors.one, color: Colors.two },
        { title: 'Projects', isHidden: false, backgroundColor: Colors.two, color: Colors.three },
        { title: 'Contact', isHidden: false, backgroundColor: Colors.three, color: Colors.one },
      ],
      handleSelectItem: title => {
        this.navItems = focusItem(title, this.navItems);
        this.isFocussed = !!title;
      }
    }
  },
  created: function () {
    setBackgroundColor(Colors.four);
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
    <div class="app__content-wrapper">
      <div class="app__content">
        <nav-items
          :on-item-select="handleSelectItem"
          :nav-items="navItems" :is-focussed="isFocussed"
        ></nav-items>
        <info-box
          class="app__info-box"
          :class="{ '-focussed': isFocussed }"
          :background-color="infoBoxBackgroundColor"
          :is-focussed="isFocussed" :on-cancel="() => handleSelectItem()"
        ></info-box>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './scss/variables.scss';

html, body {
  margin: 0;
}
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  &__top-bar {
    padding: 30px;
  }

  &__content-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__content {
    width: 90%;
    position: relative;
  }

  &__info-box {
    opacity: 0;
    transition: width $transitionTime, opacity $transitionTime;
    z-index: 10;
    pointer-events: none;
    position: absolute;
    width: 0;
    right: 0;

    &.-focussed {
      opacity: 1;
      pointer-events: unset;
      width: calc(100% - 225px);
    }
  }

  @media (max-width: 630px) {
    &__info-box {
      &.-focussed {
        width: 100%;
      }
    }
  }
}
</style>
