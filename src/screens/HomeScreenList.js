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
    <View>
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
    <View>
      <TouchableOpacity
      onPress={props.onSelectHomeItem}>
        <Text>Level : {props.level}</Text>
        <Text>Equipment required: {props.equipment}, Hitpoints: {props.hits}</Text>
        <Text>Rewards: {props.value} {props.resource}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeList;