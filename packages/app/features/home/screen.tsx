import { View } from 'app/design/view'

import { XMap } from 'app/provider'
import { ReactElement } from 'react'

export function HomeScreen(): ReactElement {
  return (
    <View className="flex-1 items-center justify-center p-3">
      <XMap/>
    </View>
  )
}
