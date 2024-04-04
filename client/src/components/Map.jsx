import React from 'react'
import { useNavigate } from 'react-router-dom'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import Apple from '../images/apple.svg'
import Avocado from '../images/avocado.svg'
import Banana from '../images/banana.svg'
import Cherry from '../images/cherry.svg'
import Grapes from '../images/grapes.svg'
import Pineapple from '../images/pineapple.svg'
import Potato from '../images/potato.svg'
import Strawberry from '../images/strawberry.svg'
import Watermelon from '../images/watermelon.svg'

const Map = () => {
  const navigate = useNavigate()

  // THIS IS JUST TEST DATA --- TO BE REMOVED
  const coordinates = {
    qld: [
      [-18.79191774423444, 145.7343748211861],
      [-20.488773287109822, 148.01953107118607],
      [-22.28909641872305, 148.9863279461861],
      [-25.105497373014675, 151.9306638836861],
      [-27.89734922968426, 153.1611326336861],
    ],
    nsw: [
      [-29.24806324379655, 153.33691388368607],
      [-33.815666308702774, 151.31542950868607],
      [-34.43409789359468, 150.91992169618607],
    ],
    act: [[-35.55010533588552, 148.8544920086861]],
    vic: [
      [-36.96744946416933, 145.99804669618607],
      [-38.49659351894757, 143.4052732586861],
      [-36.686041276581925, 142.48242169618607],
    ],
    sa: [
      [-34.61512668346219, 138.87890607118607],
      [-30.4297295750316, 136.24218732118607],
      [-29.668962525992505, 130.3974607586861],
    ],
    wa: [
      [-31.97080393043308, 115.8076170086861],
      [-33.63291573870477, 122.88281232118608],
      [-24.467150664738988, 114.79687482118608],
    ],
    nt: [
      [-14.966013251567151, 135.05566388368607],
      [-14.030014548014327, 130.83691388368607],
      [-19.87005983797396, 133.95703107118607],
    ],
    tas: [
      [-42.27730877423708, 147.6679685711861],
      [-41.45919537950706, 147.88769513368607],
      [-41.36031866306708, 145.2509763836861],
    ],
  }

  const PositionFinder = () => {
    const map = useMapEvents({
      click: ({ latlng }) => {
        console.log('You clicked the coordinates: ', latlng)
      },
    })
    return null
  }

  const createMarkerIcon = (icon, name) =>
    new L.divIcon({
      html: icon,
      iconAnchor: null,
      popupAnchor: null,
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: [32, 45],
      className: `leaflet-div-${name}`,
      name,
    })

  const markerIcons = [
    createMarkerIcon(Apple, 'apple'),
    createMarkerIcon(Avocado, 'avocado'),
    createMarkerIcon(Banana, 'banana'),
    createMarkerIcon(Cherry, 'cherry'),
    createMarkerIcon(Grapes, 'grapes'),
    createMarkerIcon(Pineapple, 'pineapple'),
    createMarkerIcon(Potato, 'potato'),
    createMarkerIcon(Strawberry, 'strawberry'),
    createMarkerIcon(Watermelon, 'watermelon'),
  ]

  return (
    <MapContainer
      style={{ width: '80em', height: '80em' }}
      center={[-25.274399, 133.775131]}
      zoom={5}
      scrollWheelZoom={false}
      zoomControl={false}
      dragging={false}
    >
      <TileLayer
        attribution=""
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {Object.keys(coordinates).map(state =>
        coordinates[state].map((latLong, index) => {
          const randomMarkerIconIndex = Math.floor(
            Math.random() * markerIcons.length
          )
          return (
            <Marker
              icon={markerIcons[randomMarkerIconIndex]}
              key={index}
              position={latLong}
              eventHandlers={{
                click: e => {
                  const name = e.target.options.icon.options.name
                  return navigate(`/jobs?state=${state}&type=${name}`)
                },
              }}
            />
          )
        })
      )}

      <PositionFinder />
    </MapContainer>
  )
}

export default Map
