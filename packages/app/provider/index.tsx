import { SafeArea } from './safe-area'

export function Provider({ children }: { children: React.ReactNode }) {
  return <SafeArea>{children}</SafeArea>
}

import { XMap as ProvidedMap } from './map'

export function XMap() {
  return <ProvidedMap />
}
