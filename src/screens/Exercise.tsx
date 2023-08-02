import { TouchableOpacity } from 'react-native'
import { VStack, Icon } from 'native-base'
import { Feather } from '@expo/vector-icons'

export function Exercise() {
  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>
      </VStack>
    </VStack>
  )
}