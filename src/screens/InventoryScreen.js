import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const InventoryScreen = (props) => {
  /*
  const [axe, equipAxe] = useState(null)   
  const [pickaxe, equipPickaxe] = useState(null)
  const [sword, equipSword] = useState(null)
  const [helm, equipHelm] = useState(null)
  const [chest, equipChest] = useState(null)
  const [boots, equipBoots] = useState(null)*/

        return(
            <View style={styles.buttonlayout}>

                <View style={styles.inventoryLeftLayout}>
                  <View style={styles.inventoryLeftButton}>
                    <TouchableOpacity
                    style={styles.buttonSpace}>
                     <Text>Sword</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.inventoryMiddleLayout}>
                  <View style={styles.inventoryMiddleButton}>
                    <TouchableOpacity
                    style={styles.buttonSpace}>
                      <Text>Helm</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{...styles.inventoryMiddleButton, height:'50%'}}>
                    <TouchableOpacity
                    style={styles.buttonSpace}>
                      <Text>Chest</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.inventoryMiddleButton}>
                    <TouchableOpacity
                    style={styles.buttonSpace}>
                      <Text>Boots</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.inventoryRightLayout}>
                  <View style ={styles.inventoryRightButton}>
                    <TouchableOpacity
                    style={styles.buttonSpace}>
                      <Text>Axe</Text>
                    </TouchableOpacity>
                  </View>

                  <View style ={{...styles.inventoryRightButton, backgroundColor:'lightgrey', marginTop:25}}>
                    <TouchableOpacity
                    style={styles.buttonSpace}>
                      <Text>Pickaxe</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                
            </View>
        )
    


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
    inventoryLeftLayout: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    inventoryMiddleLayout: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column'
    },
    inventoryRightLayout: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column'
    },
    inventoryMiddleButton: {
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'grey',
      borderRadius: 16,
      marginBottom: 15
    },
    inventoryLeftButton: {
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'gold',
      borderRadius: 16,
      marginTop: 55
    },
    inventoryRightButton: {
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'burlywood',
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