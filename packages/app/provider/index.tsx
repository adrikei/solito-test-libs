import React, { ReactElement } from 'react'
import { SafeArea } from './safe-area'

export function Provider({ children }: { children: React.ReactNode }) {
  return <SafeArea>{children}</SafeArea>
}

import { Map as ProviderMap } from 'app/provider/map'
import { MapProps } from 'app/provider/map'

export function Map(props: MapProps): ReactElement {
  return <ProviderMap {...props}/>
}
