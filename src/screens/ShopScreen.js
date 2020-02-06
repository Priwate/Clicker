import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

class ShopScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            wood:0,
            stone:0
        }
      }

    render(){
        return(
            <View styles={styles.text}>
                <Text>Welcome to the Shop</Text>
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

export default ShopScreen;