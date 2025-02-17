import dynamic from 'next/dynamic'
import { MapProps } from 'app/provider/map/index'

export const LazyMap = dynamic<MapProps>(
  () => import('./LeafletMap').then(lib => lib.LeafletMap),
  { ssr: false }
)

export const LazyMarker = dynamic(
  () => import('react-leaflet').then(lib => lib.Marker),
  { ssr: false }
)

// https://jan-mueller.at/blog/react-leaflet/#nextjs

export default LazyMap