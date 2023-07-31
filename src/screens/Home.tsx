import { VStack } from 'native-base'

// Components
import { HomeHeader } from '@components/HomeHeader'
import React from 'react'

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
    </VStack>
  )
}