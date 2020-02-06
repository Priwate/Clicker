import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

const HomeList = props =>{
  const renderHomeItem = itemData =>{
    return(
      <HomeItem
        id = {itemData.item.id}
        title = {itemData.item.title}
        level = {itemData.item.level}
        resource = {itemData.item.resource}
        equipment = {itemData.item.equipment}
        hits = {itemData.item.hits}
        value = {itemData.item.value}
        onSelectHomeItem ={()=>{
          console.log('Chop Chop');
        }}
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

const HomeItem = props =>{
  return(
    <View style={styles.centerList}>
      <TouchableOpacity
      onPress={props.onSelectHomeItem}>
        <Text>Level : {props.level}</Text>
        <Text>Equipment required: {props.equipment},  Hitpoints: {props.hits}</Text>
        <Text>Rewards: {props.value} {props.resource}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'gold',
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight:30,
    height: '100%'
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