import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Home } from './app/components/screens'

const AppNavigator = createStackNavigator({
  Home,
}, {
  initialRoute: 'Home',
})

export default createAppContainer(AppNavigator)

