<script>
import isPalindromeImage from '../img/is-palindrome-logo.png'
import quollImage from '../img/quoll-logo.png'
import thisImage from '../img/personal-page-logo.png'
import reactImage from '../img/react-logo.png'
import reduxImage from '../img/redux-logo.png'
import nodeImage from '../img/node-logo.png'
import expressImage from '../img/express-logo.png'
import vueImage from '../img/vue-logo.png'
import gasImage from '../img/google-apps-script-logo.png'
import vanillaJsImage from '../img/javascript-logo.png'
import gdsImage from '../img/google-data-studio-logo.png'

const projects = [
  {
    label: 'Quoll',
    image: quollImage,
    links: [
      { label: 'Source', url: 'https://github.com/mzogheib/quoll' },
    ],
    description: [
      '<b>What is it?</b>',
      '<br>',
      'Visualises all the daily data you generate onto a Google map.',
      '<br><br>',
      '<b>Why is it?</b>',
      '<br>',
      '<ul>',
      "<li>Do something with all of the data I've been generating over the years</li>",
      '<li>Learn React & Redux</li>',
      '<li>Learn how to consume data from APIs using OAuth 2.0</li>',
      '<li>More practice with building backends in Node & Express</li>',
      '<li>Learn how to setup and work in a monorepo</li>',
      '</ul>',
    ].join(''),
    technologies: [
      { label: 'React', image: reactImage },
      { label: 'Redux', image: reduxImage, },
      { label: 'Node.js', image: nodeImage },
      { label: 'Express',image: expressImage  }
    ]
  },
  {
    label: 'this',
    image: thisImage,
    links: [{ label: 'Source', url: 'https://github.com/mzogheib/personal-page' }],
    description: [
      '<b>What is it?</b>',
      '<br>',
      "The page you're on now!",
      '<br><br>',
      '<b>Why is it?</b>',
      '<br>',
      '<ul>',
      '<li>Display some of my work</li>',
      '<li>Learn Vue.js</li>',
      '<li>Do more cool things with Google Apps Script (the contact form POSTs to a script on my Drive, which then sends me an email)</li>',
      '</ul>'
    ].join(''),
    technologies: [
      { label: 'Vue.js', image: vueImage },
      { label: 'Google Apps Script',  image: gasImage }
    ]
  },
  {
    label: 'Is Palindrome?',
    image: isPalindromeImage,
    links: [
      { label: 'Try it out!', url: 'https://mzogheib.github.io/is-palindrome/' },
      { label: 'Source', url: 'https://github.com/mzogheib/is-palindrome' },
      {
        label: 'Analytics',
        url: 'https://datastudio.google.com/open/1iX9At8HgDlklu7NabYwP30W9QESTOgAP'
      }
    ],
    description: [
      '<b>What is it?</b>',
      '<br>',
      'Checks if the input is a valid palindrom.',
      '<br><br>',
      '<b>Why is it?</b>',
      '<ul>',
      '<li><a href="http://www.abc.net.au/news/2017-10-30/from-racecar-to-boob-a-brief-history-of-the-palindrome/9014082" target="_blank">Palindromes are amazing</a></li>',
      '<li>Build something in vanilla JS for a change</li>',
      '<li>Learn how to setup GitHub Pages</li>',
      '<li>More practice with Google Data Studio</li>',
      '</ul>'
    ].join(''),
    technologies: [
      { label: 'Vanilla JS', image: vanillaJsImage },
      { label: 'Google Data Studio',  image: gdsImage}
    ]
  }
]

export default {
  name: 'my-projects',
  data() {
    return {
      projects: projects
    }
  }
}
</script>

<template lang="pug">
.my-projects
  .my-projects__project(v-for="project in projects" :key="project.label")
    .my-projects__project-summary
      img(:src="project.image")
      .my-projects__project-label {{ project.label }}
    .my-projects__project-detail
      .my-projects__project-description(v-html="project.description")
      .my-projects__project-links
        span(v-for="(link, index) in project.links" :key="link.label")
          a.my-projects__project-link(:href="link.url" target='_blank') {{ link.label }}
          span(v-if="index < project.links.length - 1") &nbsp; | &nbsp;
      .my-projects__project-technologies
        img.my-projects__project-technology(v-for="tech in project.technologies" :key="tech.label" :src="tech.image" :alt="tech.label")
</template>

<style lang="scss">
.my-projects {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__project {
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

    &:not(:first-child) {
      margin: 10px 0 0;
    }
  }

  &__project-summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 20px;

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
    display: flex;
    flex-direction: column;
  }

  &__project-description {
    flex-grow: 1;
    margin: 0 0 20px;

    ul {
      margin: 0;
      padding: 0 25px;
    }
  }

  &__project-links {
    margin: 0 0 10px;
    display: flex;
    justify-content: center;
  }

  &__project-technologies {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  &__project-technology {
    &:not(:first-child) {
      margin: 10px 0 0 15px;
    }

    margin: 10px 0 0;
    max-height: 30px;
    border-radius: 4px;
  }

  @media (max-width: 630px) {
    &__project {
      padding: 20px;
    }
  }
}
</style>
