import { Platform } from 'react-native'
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { useTheme } from 'native-base'

// icons
import IconHome from '../assets/home.svg'
import IconHistory from '../assets/history.svg'
import IconProfile from '../assets/profile.svg'


// Screens
import { Home } from '@screens/Home'
import { Profile } from '@screens/Profile'
import { History } from '@screens/History'
import { Exercise } from '@screens/Exercise'

// Interfaces
type AppRoutes = {
  home: undefined;
  history: undefined;
  profile: undefined;
  exercise: undefined;
}

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const { sizes, colors } = useTheme()

  const iconSize = sizes[6]

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.green[500],
      tabBarInactiveTintColor: colors.gray[200],
      tabBarStyle: {
        height: Platform.OS === 'android' ? 'auto' : 96,
        paddingBottom: sizes[10],
        paddingTop: sizes[6],
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
      }
    }}>
      <Screen 
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <IconHome fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />
      <Screen 
        name='history'
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <IconHistory fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />

      <Screen 
        name='profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <IconProfile fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />

      <Screen 
        name='exercise'
        component={Exercise}
        options={{
          tabBarButton: () => null
        }}
      />
    </Navigator>
  )
}