import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import InventoryScreen from './src/screens/InventoryScreen';
import BuildScreen from './src/screens/BuildScreen';
import ShopScreen from './src/screens/ShopScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Inventory: InventoryScreen,
    Build: BuildScreen,
    Shop: ShopScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title : 'App'
      //headerShown: false
    }
  }
);

export default createAppContainer(navigator);
