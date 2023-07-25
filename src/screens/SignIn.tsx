import { useNavigation } from "@react-navigation/native"
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'

// Routes
import { AuthNavigationRoutesProps } from "@routes/auth.routes"

// Assets
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

// Components
import { Input } from '@components/Input'
import { Button } from '@components/Button';

export function SignIn() {

  const navigation = useNavigation<AuthNavigationRoutesProps>()
  
  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt='Pessoas treinando'
          resizeMode='contain'
          position="absolute"
        />
        
        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading 
            color="gray.100" 
            fontSize="xl" fontFamily="heading" 
            mb={6}
          >
            Acesse sua conta
          </Heading>

          <Input 
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input 
            placeholder='Senha'
            secureTextEntry
          />

          <Button title='Acessar' mt={2}/>
        </Center>

        <Center mt="auto">
          <Text 
            color="gray.100" 
            fontSize="sm" mb={3} fontFamily="body">Ainda não tem acesso?
          </Text>

          <Button 
            title='Criar sua conta' variant="outline"
            onPress={handleNewAccount} 
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}