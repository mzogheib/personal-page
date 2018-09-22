<script>

const projects = [{
    label: 'Quoll',
    image: require('../img/quoll-logo.png'),
    links: [
      { label: 'Source', url: 'https://github.com/mzogheib/quoll' },
    ],
    description: 'Map all of your geo data',
    technologies: [
      { label: 'React', image: require('../img/react-logo.png') },
      { label: 'Redux', image: require('../img/redux-logo.png') },
      { label: 'Node.js', image: require('../img/node-logo.png') },
      { label: 'Express', image: require('../img/express-logo.png') },
    ]
  },
  {
    label: 'Is Palindrome?',
    image: require('../img/is-palindrome-logo.png'),
    links: [
      { label: 'Try it out!', url: 'https://mzogheib.github.io/is-palindrome/' },
      { label: 'Source', url: 'https://github.com/mzogheib/is-palindrome' },
      { label: 'Analytics', url: 'https://datastudio.google.com/open/1iX9At8HgDlklu7NabYwP30W9QESTOgAP' },
    ],
    description: 'Checks if the input is a valid palindrome',
    technologies: [
      { label: 'Plain JS', image: require('../img/javascript-logo.png') },
      { label: 'Google Data Studio', image: require('../img/google-data-studio-logo.png') },
    ]
  },
]

export default {
  name: 'my-projects',
  data() {
    return {
      projects: projects,
      openLink: url => window.open(url, '_blank')
    }
  }
}
</script>

<template>
<div class="my-projects">
  <div class="my-projects__projects">
    <div class="my-projects__project" v-for="project in projects" :key="project.label">
      <div class="my-projects__project-summary">
        <img :src="project.image">
        <div class="my-projects__project-label">{{ project.label }}</div>
      </div>
      <div class="my-projects__project-detail">
        <div class="my-projects__project-description">{{ project.description }}</div>
        <div class="my-projects__project-detail-footer">
          <div class="my-projects__project-links">
            <span v-for="(link, index) in project.links" :key="link.label">
              <a class="my-projects__project-link" :href="link.url" target='_blank'>{{ link.label }}</a>
              <span v-if="index < project.links.length - 1"> | </span>
            </span>
          </div>
          <div class="my-projects__project-technologies">
            <img class="my-projects__project-technology" v-for="tech in project.technologies" :key="tech.label" :src="tech.image" :alt="tech.label">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.my-projects {

  &__projects {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &__project {
    display: flex;
    padding: 20px 20px 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .25);

    &:not(:first-child) {
      margin: 10px 0 0;
    }
  }

  &__project-summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-basis: 120px;

    img {
      max-width: 70px;
      margin: 0 0 10px;
    }
  }

  &__project-label {
    font-weight: 500;
  }

  &__project-detail {
    flex-grow: 1;
    margin: 0 0 0 20px;
    display: flex;
    flex-direction: column;
  }

  &__project-description {
    flex-grow: 1;
    margin: 0 0 10px;
  }

  &__project-detail-footer {
    display: flex;
    align-items: flex-end;
  }

  &__project-links {
    flex-grow: 1;

    a,
    a:visited {
      color: mediumblue;
      text-decoration: none;
    }
  }

  &__project-technologies {
    display: flex;
  }

  &__project-technology {
    &:not(:first-child) {
      margin: 0 0 0 15px;
    }

      max-height: 30px;
      border-radius: 4px;
  }

}
</style>
