import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

class BuildScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            sawmill: null,
            quarry: null,
            barracks: null,
            houses: null,
            blacksmith: null,
        }
      }

    render(){
        return(
            <View>
                <Text>Hello</Text>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    text: {
      alignItems: 'center',
      justifyContent: 'center'
    },
  });

export default BuildScreen;