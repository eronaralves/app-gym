import { Center, ScrollView, VStack } from 'native-base'

// Components
import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />
      <ScrollView>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{
              uri: 'https://www.github.com/eronaralves.png'
            }} 
            alt="Imagem do usuario"
            size={33}
          />
        </Center>
      </ScrollView>
    </VStack>
  )
}