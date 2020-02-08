import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

class InventoryScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            axe: null,
            pickaxe: null,
            sword: null,
            
            
        }
      }

    render(){
        return(
            <View style={styles.buttonlayout}>

                <View style={styles.chopButton}>
                 <TouchableOpacity
                 style={styles.buttonSpace}>
                    <Text>Axe</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.inventoryMiddleLayout}>
                  <View style={styles.swordButton}>
                    <TouchableOpacity
                    style={styles.buttonSpace}>
                      <Text>Helm</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{...styles.swordButton, height:'50%'}}>
                    <TouchableOpacity
                    style={styles.buttonSpace}>
                      <Text>Chest</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.swordButton}>
                    <TouchableOpacity
                    style={styles.buttonSpace}>
                      <Text>Helm</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.adventureButton}>
                  <TouchableOpacity>
                    <Text>Sword</Text>
                  </TouchableOpacity>
                </View>
                
            </View>
        )
    }


}

const styles = StyleSheet.create({
    text: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonlayout: {
      height: '50%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: 20, 
      marginTop: 15
    },
    chopButton: {
      height: 100,
      width: 100,
      backgroundColor: 'burlywood',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
    },
    inventoryMiddleLayout: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      borderRadius: 16,
      flexDirection: 'column'
    },
    adventureButton: {
      height: 100,
      width: 100,
      backgroundColor: 'gold',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16
    },
    swordButton: {
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'grey',
      borderRadius: 16,
      marginBottom: 15
    },
    buttonSpace:{
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default InventoryScreen;