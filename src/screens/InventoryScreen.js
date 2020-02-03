import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

class InventoryScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            axe: null,
            pickaxe: null,
            sword: null,
            armor: null,
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

export default InventoryScreen;