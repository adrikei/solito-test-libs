import { View } from 'app/design/view'

import { Map } from 'app/provider'
import { ReactElement } from 'react'

export function HomeScreen(): ReactElement {
  const center: [number, number] = [48.2082, 16.3738]
  const markers: [number, number][] = [center, [48.2, 16.37], [48.1987, 16.3685]]

  return (
    <View
      className="flex-1 items-center justify-center p-3"
    >
      <Map center={center} zoom={13} >
        <>Test</>
      </Map>
    </View>
  )
}
