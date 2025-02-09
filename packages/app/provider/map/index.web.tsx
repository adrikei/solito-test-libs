import { ReactElement, use } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import { MapContainer, TileLayer, Marker, Popup } from 'leaflet'
// import { LatLngTuple } from 'leaflet'

// const position: LatLngTuple = [51.505, -0.09]

export function XMap(): ReactElement {
  return <>Map.web</>
  // return (
  //   <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
  //     <TileLayer
  //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //     />
  //     <Marker position={position}>
  //       <Popup>
  //         A pretty CSS3 popup. <br /> Easily customizable.
  //       </Popup>
  //     </Marker>
  //   </MapContainer>
  // );
}