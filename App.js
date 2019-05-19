import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Home, About } from './app/components/screens'

const AppNavigator = createStackNavigator({
  Home,
  About,
}, {
  initialRoute: 'Home',
})

export default createAppContainer(AppNavigator)

