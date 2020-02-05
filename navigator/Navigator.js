import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../src/screens/HomeScreen';
import InventoryScreen from '../src/screens/InventoryScreen';
import BuildScreen from '../src/screens/BuildScreen';
import ShopScreen from '../src/screens/ShopScreen';
import { WoodCategories, MineCategories,GoldCategories } from '../data/dummydata';

const GameNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Inventory: {
      screen: InventoryScreen
    },
    Build: {
      screen: BuildScreen
    },
    Shop: {
      screen: ShopScreen
    },
  },
  {
     // initialRouteName: 'Home',
    defaultNavigationOptions: {
      
      headerShown: false
    }
  }
);

const tabScreenConfig = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons
            name="ios-home"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: 'green'
    }
  },
  Inventory: {
    screen: InventoryScreen,
    navigationOptions: {
      tabBarLabel: 'Inventory!',
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-shirt" 
          size={25} 
          color={tabInfo.tintColor} />
        );
      },
      tabBarColor: 'green',
    }
  },
  Build: {
    screen: BuildScreen,
    navigationOptions: {
      tabBarLabel: 'Build!',
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-hammer" 
          size={25} 
          color={tabInfo.tintColor} />
        );
      },
      tabBarColor: 'green'
    }
  },
  Shop: {
    screen: ShopScreen,
    navigationOptions: {
      tabBarLabel: 'Shop!',
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="logo-usd" 
          size={25} 
          color={tabInfo.tintColor} />
        );
      },
      tabBarColor: 'green'
    }
  }
}

const GameFavTabNavigator = 
  createMaterialBottomTabNavigator(tabScreenConfig, {
      activeColor: 'white',
      shifting: false,
      barStyle: {
        backgroundColor: 'green'
      }
    }) 


export default createAppContainer(GameFavTabNavigator);