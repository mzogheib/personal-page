<script>
import { getPalette } from './services/Colors.js'
import TopBar from './components/TopBar.vue'
import NavItems from './components/NavItems.vue'
import InfoBox from './components/InfoBox.vue'
import AboutMe from './components/AboutMe.vue'
import MyProjects from './components/MyProjects.vue'
import ContactMe from './components/ContactMe.vue'

const urlParams = new URLSearchParams(window.location.search)
const featureFlags = urlParams.get('featureFlags')
const randomPalette = featureFlags && featureFlags.split(',').includes('randomPalette')

const palette = getPalette({ random: randomPalette })

const navItems = [
  {
    title: 'About',
    isHidden: false,
    backgroundColor: palette.aboutBackground,
    color: palette.aboutColor,
    component: AboutMe,
  },
  {
    title: 'Projects',
    isHidden: false,
    backgroundColor: palette.projectsBackground,
    color: palette.projectsColor,
    component: MyProjects,
  },
  {
    title: 'Contact',
    isHidden: false,
    backgroundColor: palette.contactBackground,
    color: palette.contactColor,
    component: ContactMe,
  },
]

const setStyle = ({ backgroundColor, color }) => {
  let style = document.getElementsByTagName('html')[0].style
  style.backgroundColor = backgroundColor
  style.color = color
}
const focusItem = ({ title, items }) =>
  items.map((item) => ({ ...item, isHidden: title && item.title !== title }))

export default {
  name: 'app',
  data() {
    return {
      backgroundColor: palette.background,
      isFocussed: false,
      navItems: navItems,
      focussedItem: {},
      handleSelectItem: (title) => {
        this.navItems = focusItem({ title, items: this.navItems })
        this.isFocussed = !!title
        this.focussedItem = this.isFocussed
          ? this.navItems.find((n) => n.title === title)
          : this.focussedItem
      },
    }
  },
  mounted: function () {
    setStyle({ backgroundColor: palette.background, color: palette.titleColor })
  },
  components: {
    TopBar,
    NavItems,
    InfoBox,
  },
}
</script>

<template lang="pug">
.app
  top-bar.app__top-bar
  .app__content-wrapper
    .app__content
      nav-items(:on-item-select="handleSelectItem" :nav-items="navItems" :is-focussed="isFocussed")
      info-box.app__info-box(:class="{ '-focussed': isFocussed }" :is-focussed="isFocussed" :on-cancel="() => handleSelectItem()")
        component(:is="focussedItem.component" :on-projects-select="() => handleSelectItem('Projects')" :on-contact-select="() => handleSelectItem('Contact')")
</template>

<style lang="scss">
@use './scss/variables.scss' as vars;

html,
body {
  margin: 0;
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  a,
  a:visited {
    color: mediumblue;
    text-decoration: none;
  }

  &__top-bar {
    padding: 30px;
  }

  &__content-wrapper {
    display: flex;
    justify-content: center;
    padding: 30px;
  }

  &__content {
    width: 100%;
    max-width: 1000px;
    position: relative;
  }

  &__info-box {
    opacity: 0;
    transition: opacity vars.$transitionTime;
    z-index: 10;
    pointer-events: none;
    position: absolute;
    width: calc(100% - #{vars.$itemWidth} - 25px);
    right: 0;

    &.-focussed {
      opacity: 1;
      pointer-events: unset;
    }
  }

  @media (max-width: 630px) {
    &__content-wrapper {
      padding: 0;
    }

    &__info-box {
      width: 100%;
    }
  }
}
</style>
