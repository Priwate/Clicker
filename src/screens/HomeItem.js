import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';


class HomeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      stepsNeeded: this.props.hits,
      hitCount: 1,
      progressCount: 0
    }
  }

  hitsLeft = () =>{
    if (this.state.stepsNeeded === 0) {
      this.props.onFinish(this.props.id[0], this.props.value)
      this.setState({
        stepsNeeded: this.props.hits,
        hitCount: 1,
        progressCount: 0
      })
      return;
    }
    this.setState({
      stepsNeeded: this.state.stepsNeeded - 1,
      hitCount: this.state.hitCount + 1,
      progressCount: this.state.hitCount / this.props.hits
    })
  }

  render() {
    return( 
      <View style={{...styles.centerList, backgroundColor: this.props.color}}>
      <Progress.Bar progress={this.state.progressCount} duration={this.props.hits} width={250} color={'white'}/>
        <TouchableOpacity
        onPress={this.hitsLeft}>
          <Text style={{color: 'white'}}>Level : {this.props.level} {this.props.title}</Text>
          <Text>Equipment required: {this.props.equipment}</Text>
          <Text>Rewards: {this.props.value} {this.props.resource}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

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


export default HomeItem;