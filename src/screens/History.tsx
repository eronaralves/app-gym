import { VStack } from 'native-base'

// Components
import { ScreenHeader } from '@components/ScreenHeader'

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />
    </VStack>
  )
}