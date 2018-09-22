<script>
export default {
  name: 'about-me',
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

<template>
  <div class="about-me">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget ipsum egestas, dapibus ex vitae, accumsan sem. Donec fermentum arcu in sollicitudin imperdiet. Ut eu scelerisque ex, quis gravida augue. Nunc mattis tortor ac sapien auctor dignissim. Nulla facilisi. Praesent tristique molestie leo eu pretium. Maecenas convallis lorem tincidunt elit pellentesque varius. Vivamus ac aliquam magna. Vivamus aliquet in felis eu ullamcorper.</p>
    <p>Mauris sed augue purus. Maecenas tincidunt sapien libero, et eleifend nunc viverra sit amet. Integer vel mauris faucibus, egestas est a, tempor massa. Vivamus volutpat lacinia leo, vel accumsan ipsum aliquam a. Maecenas cursus purus eu velit feugiat venenatis. Etiam auctor luctus faucibus. Donec justo ipsum, consequat sed lacus in, luctus fringilla nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sagittis egestas mattis. Morbi eleifend consectetur tellus, eu scelerisque felis consequat a.</p>
    <p>Feel free to reach out to me via GitHub or LinkedIn or here.</p>
    <div class="about-me__links">
      <div class="about-me__link" @click="() => openLink(link.url)" v-for="link in links" :key="link.label">
        <img :src="link.image">
        <span>{{ link.label }}</span>
      </div>
    </div>
 </div>
</template>

<style lang="scss">
.about-me {

  p {
    word-wrap: normal;
  }

  &__links {
    display: flex;
    justify-content: space-evenly;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
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
