import { TouchableOpacity } from 'react-native'
import { VStack, Icon, HStack, Heading, Text, ScrollView, Image, Box } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

// Images
import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'

// Components
import { Button } from '@components/Button'



export function Exercise() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>

        <HStack 
          justifyContent="space-between"   
          alignItems="center" 
          mt={4} 
          mb={8}
        >
          <Heading color="gray.100" fontSize="lg" flexShrink={1}>
            Puxada frontal
          </Heading>

          <HStack alignItems="center">
            <BodySvg />

            <Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            source={{
              uri: "https://images.tcdn.com.br/img/img_prod/1169104/pulley_fokus_com_remada_4942_2_cb1eb92bf61a865aadc1e180a808294f.jpg",
            }}
            alt="Nome do exercicio"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />

          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb={6}
              mt={5}
            >
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml={2}>
                  3 séries
                </Text>
              </HStack>
              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml={2}>
                  12 repetições
                </Text>
              </HStack>
            </HStack>
            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}