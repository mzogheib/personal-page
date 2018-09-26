<script>
export default {
  name: 'about-me',
  props: ['onProjectsSelect', 'onContactSelect'],
  data () {
    return {
      links: [
        { label: 'mzogheib', url: 'https://github.com/mzogheib', image: require('../img/github-logo.png') },
        { label: 'marwanzogheib', url: 'https://www.linkedin.com/in/marwanzogheib/', image: require('../img/linkedin-logo.png') },
      ],
      openLink: url => window.open(url, '_blank')
    }
  }
}
</script>

<template lang="pug">
  .about-me
    .about-me__text I'm Marwan - Software Engineer, Programmer, Web Developer, all of the above. I love building things and solving problems with code.
    .about-me__text In my day job I build for the web, primarily the front end, but I'm getting comfortable across the full stack having built personal #[a(@click="() => onProjectsSelect()") projects] in Node and Express.
    .about-me__text I've also made a few #[a(href="https://apps.rebble.io/en_US/developer/52f0ce543be6208c1f001842/1" target="_blank") Pebble watchfaces] and enjoy automating various aspects of my life by channeling my inner MacGyver. Think: Google App Scripts, IFTTT etc.
    .about-me__text Contact me #[a(@click="() => onContactSelect()") here] or find out more below.
    .about-me__links
      .about-me__link(@click="() => openLink(link.url)" v-for="link in links" :key="link.label")
        img(:src="link.image")
        span {{ link.label }}
</template>

<style lang="scss">
.about-me {

  &__text {
    margin: 0 0 10px;

    a {
      cursor: pointer; // hack. Inline a tags in pug templates lose the pointer on hover if there is no href
    }
  }

  &__links {
    display: flex;
    justify-content: space-evenly;
    max-width: 400px;
    width: 100%;
    margin: 20px auto 0;
  }

  &__link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      max-height: 70px;
    }

    span {
      text-align: center;
    }
  }

}
</style>
