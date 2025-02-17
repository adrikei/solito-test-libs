import { ReactElement, FC } from 'react'
import type { MapOptions } from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'
import { MapProps } from 'app/provider/map/index'
import 'leaflet/dist/leaflet.css'


export const LeafletMap: FC<MapProps>
  = ({ children, ...options }: MapProps): ReactElement => {
  return (
    <MapContainer
      className="grow w-full relative"
      maxZoom={18}
      {...options}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {children}
    </MapContainer>
  )
}