import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Modal } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Toast, { DURATION } from 'react-native-easy-toast'
import { Actions } from 'react-native-router-flux'
// import {Router, Scene} from 'react-native-router-flux';
import { localData } from './Config'
import modelTest from './modalTest';

class SuperGridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  clickItem(item) {
    Toast("item: " + item.name)
    Actions.model();
    alert('item:' +item.name)
  }

  gridUI(data) {
    let { item, index } = data
    return (
      <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.code }]} onPress={this.clickItem.bind(this, item)} >
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCode}>{item.code}</Text>
      </TouchableOpacity>
    )
  }


  render() {
    
    return (
      <View style={{ flex: 1, backgroundColor:'red' }}>
      <View style={{ flex: 0.2, backgroundColor: 'hotpink' }}/>
      <View style={{ flex: 0.8, justifyContent: 'center', backgroundColor: 'white' }}>
        <FlatGrid
          itemDimension={130}
          items={localData.items}
          style={styles.gridView}
          renderItem={this.gridUI.bind(this)} 
          />
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
  },
});


export default SuperGridView;
