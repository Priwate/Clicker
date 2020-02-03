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
  
  

  render(){
    return(
      <View>

        <View>
          <Text>Wood : {this.state.wood}</Text>
          
          <TouchableOpacity>
            <Text>Chop Tree</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>Stone : {this.state.stone}</Text>

          <TouchableOpacity>
            <Text>Mine</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>Gold : {this.state.gold}</Text>

          <TouchableOpacity>
            <Text>Adventure</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
};
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
