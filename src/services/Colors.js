// const Palettes = [
//   ['#ffd96a', '#f34949', '#ff9090', '#ffb6b9'], // https://colorhunt.co/palette/125267
//   ['#C9C9EE', '#9F838C', '#8D7471', '#816F68', '', '#D7C5DB'], // https://colorhunt.co/palette/125267
// ];

const Palettes = [
  {
    url: null,
    background: '#FEFEFF',
    color: '#2c3e50',
    aboutBackground: '#B09489',
    projectsBackground: '#D3B6A6',
    contactBackground: '#E9D6C8'
  },
  {
    url: 'https://colorhunt.co/palette/799efffeffc4ffde63ffbc4c',
    background: '#799EFF',
    color: '#2c3e50',
    aboutBackground: '#FEFFC4',
    projectsBackground: '#FFDE63',
    contactBackground: '#FFBC4C'
  },
  {
    url: 'https://colorhunt.co/palette/4ed7f16fe6fca8f1fffffa8d',
    background: '#FFFA8D',
    color: '#2c3e50',
    aboutBackground: '#6FE6FC',
    projectsBackground: '#A8F1FF',
    contactBackground: '#8DF1A8'
  },
  {
    url: 'https://colorhunt.co/palette/fce7c8b1c29efada7af0a04b',
    background: '#FCE7C8',
    color: '#2c3e50',
    aboutBackground: '#B1C29E',
    projectsBackground: '#FADA7A',
    contactBackground: '#F0A04B'
  }
]

export const getPalette = ({ random = false } = {}) => {
  if (random) {
    const randomIndex = Math.floor(Math.random() * Palettes.length)
    return Palettes[randomIndex]
  }

  return Palettes[0]
}

export default Palettes[0]
