// const Palettes = [
//   ['#ffd96a', '#f34949', '#ff9090', '#ffb6b9'], // https://colorhunt.co/palette/125267
//   ['#C9C9EE', '#9F838C', '#8D7471', '#816F68', '', '#D7C5DB'], // https://colorhunt.co/palette/125267
// ];

const Palettes = [
  {
    url: null,
    background: '#FEFEFF',
    titleColor: '#2C3E50',
    color: '#2C3E50',
    aboutBackground: '#B09489',
    aboutColor: '#2C3E50',
    projectsBackground: '#D3B6A6',
    projectsColor: '#2C3E50',
    contactBackground: '#E9D6C8',
    contactColor: '#2C3E50',
  },
  {
    url: 'https://colorhunt.co/palette/799efffeffc4ffde63ffbc4c',
    background: '#799EFF',
    titleColor: '#FFFFFF',
    color: '#2C3E50',
    aboutBackground: '#FEFFC4',
    aboutColor: '#2C3E50',
    projectsBackground: '#FFDE63',
    projectsColor: '#2C3E50',
    contactBackground: '#FFBC4C',
    contactColor: '#2C3E50',
  },
  {
    url: 'https://colorhunt.co/palette/4ed7f16fe6fca8f1fffffa8d',
    background: '#FFFA8D',
    titleColor: '#2C3E50',
    color: '#2C3E50',
    aboutBackground: '#6FE6FC',
    aboutColor: '#2C3E50',
    projectsBackground: '#A8F1FF',
    projectsColor: '#2C3E50',
    contactBackground: '#8DF1A8',
    contactColor: '#2C3E50',
  },
  {
    url: 'https://colorhunt.co/palette/fce7c8b1c29efada7af0a04b',
    background: '#FCE7C8',
    titleColor: '#2C3E50',
    color: '#2C3E50',
    aboutBackground: '#B1C29E',
    aboutColor: '#2C3E50',
    projectsBackground: '#FADA7A',
    projectsColor: '#2C3E50',
    contactBackground: '#F0A04B',
    contactColor: '#2C3E50',
  },
]

export const getPalette = ({ random = false } = {}) => {
  if (random) {
    const randomIndex = Math.floor(Math.random() * Palettes.length)
    return Palettes[randomIndex]
  }

  return Palettes[0]
}

export default Palettes[0]
