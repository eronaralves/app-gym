import React, { useState } from 'react'
import { FlatList, HStack, VStack, Heading, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'

// Routes
import { AppNavigationRoutesProps } from '@routes/app.routes'

// Components
import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { ExerciseCard } from '@components/ExerciseCard'

export function Home() {
  const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Remada unilateral', 'Levantamento terra',])
  const [groups, setGroups] = useState(['costas', 'Bíceps', 'Tríceps', 'ombro',])
  const [groupSelected, setGroupSelected] = useState('costas')

  const navigation = useNavigation<AppNavigationRoutesProps>()

  function handleOpenExerciseDetails() {
    navigation.navigate("exercise")
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group 
            name={item} 
            isActive={groupSelected === item} 
            onPress={() => setGroupSelected(item)}  
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8
        }}
        my={10}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack mb={5} alignItems="center" justifyContent="space-between">
          <Heading color="gray.200" fontSize="md">
            Exercicios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <ExerciseCard 
              onPress={handleOpenExerciseDetails}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: 20
          }}
        />
      </VStack>
    </VStack>
  )
}