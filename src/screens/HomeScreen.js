import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

import HomeList from './HomeScreenList';
import { WoodCategories, MineCategories, AdventureCategories } from "../../data/dummydata";

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      wood: 0,
      stone: 0,
      gold: 1000,
      resources: [],
      adventureCategories: false,
      woodCategories: false,
      mineCategories: false
    }
  }
  
  increaseWood = () =>{
    return this.setState({
      woodCategories: !this.state.woodCategories,
      mineCategories: false,
      adventureCategories: false,
      resources: this.state.woodCategories ? [] : WoodCategories
    })
  }

  increaseStone = () =>{
    return this.setState({
      woodCategories: false,
      mineCategories: !this.state.mineCategories,
      adventureCategories: false,
      resources: this.state.mineCategories ? [] : MineCategories
    })
  }
//this.state.gold + Math.floor(Math.random() * 100) + 1
  increaseGold = () =>{
    this.setState({
      woodCategories: false,
      mineCategories: false,
      adventureCategories: !this.state.adventureCategories,
      resources: this.state.adventureCategories ? [] :  AdventureCategories
    })
    return
  }
  

  render(){
    return(
      <View>
        <View style={styles.buttonlayout}>
          <View style={styles.text}>
            <Text>Wood : {this.state.wood}</Text>
            
            <TouchableOpacity 
              style={styles.chopButton}
              onPress={this.increaseWood}>
              <Text>Chop Tree</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.text}>
            <Text>Stone : {this.state.stone}</Text>

            <TouchableOpacity 
              style={styles.mineButton}
              onPress={this.increaseStone}>
              <Text>Mine</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.text}>
            <Text>Gold : {this.state.gold}</Text>

            <TouchableOpacity 
              style={styles.adventureButton}
              onPress={this.increaseGold}>
              <Text>Adventure</Text>
            </TouchableOpacity>
          </View>
        </View>

        <HomeList listData={this.state.resources} />
        
      </View>
    )
  };
}

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  chopButton: {
    flex: 1,
    width: 100,
    backgroundColor: 'burlywood',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mineButton: {
    flex: 1,
    width: 100,
    backgroundColor: 'darkgrey',
    alignItems: 'center',
    justifyContent: 'center'
  },
  adventureButton: {
    flex: 1,
    width: 100,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonlayout: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20
  },
  lowerbutonslayout: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export default HomeScreen;
