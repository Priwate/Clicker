import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import HomeItem from './HomeItem'

const HomeList = props =>{
  const renderHomeItem = itemData =>{
    let color = itemData.item.resource === 'Wood' ? 'green' 
    : itemData.item.resource === 'Stone' ? 'grey' : 'gold'

    return(
      <HomeItem
        onFinish={props.onFinish}
        id = {itemData.item.id}
        title = {itemData.item.title}
        level = {itemData.item.level}
        resource = {itemData.item.resource}
        equipment = {itemData.item.equipment}
        hits = {itemData.item.hits}
        value = {itemData.item.value}
        color = {color}

      />
    )
  }
  return(
    <View style= {styles.listContainer}>
      
      <FlatList
        data={props.listData}
        keyExtractor={(item,index) => item.id}
        renderItem={renderHomeItem}
        style={{width: '100%'}}
      />
      
    </View>
  )
}

// const HomeItem = props =>{
//   return(
//     <View style={{...styles.centerList, backgroundColor: props.color}}>
//     <Progress.Bar progress={0} width={250}/>
//       <TouchableOpacity
//       onPress={props.onSelectHomeItem}>
//         <Text style={{color: 'white'}}>Level : {props.level}</Text>
//         <Text>Equipment required: {props.equipment},  Hitpoints: {props.hits}</Text>
//         <Text>Rewards: {props.value} {props.resource}</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    height: '85%',
    
  },
  centerList: {
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingBottom:10,
    paddingTop:5,
    paddingLeft:20,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#fff'
  }
})

export default HomeList;