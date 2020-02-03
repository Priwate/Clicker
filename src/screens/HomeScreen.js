import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";


class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      wood: 20,
      stone: 10,
      gold: 1000
    }
  }
  
  increaseWood = () =>{
    return this.setState({
      wood: this.state.wood + 1
    })
  }

  increaseStone = () =>{
    return this.setState({
      stone: this.state.stone + 1
    })
  }

  increaseGold = () =>{
    return this.setState({
      gold: this.state.gold + Math.floor(Math.random() * 100) + 1
    })
  }
  

  render(){
    const {navigate} = this.props.navigation

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

        <View>
          <TouchableOpacity
            onPress = {() => navigate('Inventory')}
          >
            <Text>Inventory</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('Build')}
          >
            <Text>Build</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('Shop')}
          >
            <Text>Shop</Text>
          </TouchableOpacity>
        </View>
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
  }
});

export default HomeScreen;
