import { Heading, HStack, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons'


// Inteface
interface ExerciseCardProps extends TouchableOpacityProps {

}

export function ExerciseCard({ ...rest }: ExerciseCardProps) {
  return (
    <TouchableOpacity 
      {...rest}
    >
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
        <Image 
          source={{
            uri: 'https://images.tcdn.com.br/img/img_prod/1169104/pulley_fokus_com_remada_4942_2_cb1eb92bf61a865aadc1e180a808294f.jpg'
          }}
          alt="imagem do exercicio"
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode="center"
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            Remada frontal
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" size={5} />
      </HStack>
    </TouchableOpacity>
  )
}