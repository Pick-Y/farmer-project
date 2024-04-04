import L from 'leaflet'

//Should I change this into a component that accepts props to dynamically change Icon?
//In that case, should I replace the IMAGE property with a url instead of a fruit name?
const customIcon = img => {
  const iconOne = new L.Icon({
    //path needs to be fixed
    iconUrl: require('./images/avocado.png'),
    iconSize: [25, 30],
  })

  const iconTwo = new L.Icon({
    //path needs to be fixed
    iconUrl: require('./images/banana.png'),
    iconSize: [25, 30],
  })

  const iconThree = new L.Icon({
    //path needs to be fixed
    iconUrl: require('./images/grape.png'),
    iconSize: [25, 30],
  })

  const iconFour = new L.Icon({
    //path needs to be fixed
    iconUrl: require('./images/peach.png'),
    iconSize: [25, 30],
  })

  switch (img) {
    case 'avocado':
      return iconOne
      break
    case 'banana':
      return iconTwo
      break
    case 'grape':
      return iconThree
      break
    case 'peach':
      return iconFour
      break
    default:
      break
  }
}
export default customIcon
