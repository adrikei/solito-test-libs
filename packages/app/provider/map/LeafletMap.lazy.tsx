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

// export const LazyMarkerCluster = dynamic(
//   async () => await import('./MarkerCluster'),
//   {
//     ssr: false,
//   }
// )

export default LazyMap