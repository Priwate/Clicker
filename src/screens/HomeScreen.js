import React from "react";
import { Text, StyleSheet, TouchableOpacity, View} from "react-native";
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

  handleResources = (resource, amount) =>{
    if (resource === 'a'){
      this.setState({
        gold: this.state.gold + Number(amount)
      })
    }
    if (resource === 's'){
      this.setState({
        stone: this.state.stone + Number(amount)
      })
    }
    if (resource === 'w'){
      this.setState({
        wood: this.state.wood + Number(amount)
      })
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
      <View style={styles.mainContainer}>
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

        <HomeList listData={this.state.resources} onFinish={this.handleResources} />
        
      </View>
    )
  };
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 15
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  chopButton: {
    flex: 1,
    width: 100,
    backgroundColor: 'burlywood',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16
  },
  mineButton: {
    flex: 1,
    width: 100,
    backgroundColor: 'darkgrey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16
  },
  adventureButton: {
    flex: 1,
    width: 100,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16
  },
  buttonlayout: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    
  },
  lowerbutonslayout: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export default HomeScreen;
