import { ReactElement } from 'react'
import type { MapOptions } from 'leaflet'

export type MapProps = {
  center: [number, number]
  children: ReactElement
  zoom: number,
  markers?: [number, number][]
} & MapOptions

export function Map(_: MapProps): ReactElement {
  return <>Map.mobile</>
}