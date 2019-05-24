import React, { Component } from 'react';
import { View, Text, TouchableOpacity,style } from 'react-native';
import RadioButtonComponent from './modalTest';
import DateTimeComponent from './SampleComponent';
//import DateTimePicker from 'react-native-modal-datetime-picker';

class CustomTabNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
        initialTabBar:'RadioButton'
    };
  }
  chooseTabBar(getScreen){
        this.setState({initialTabBar:getScreen})
  }

  render() {
    return (
      <View style={{flex:1}}>
       <View style={{flex:0.9, backgroundColor:'green'}}>
       {this.state.initialTabBar === 'RadioButton' ?(
           <View style={{flex:1, backgroundColor:'yellow'}}><DateTimeComponent /></View>
       ):(
        <View style={{flex:1, backgroundColor:'yellow'}}><RadioButtonComponent /></View>)}
       </View>
       <View style={{flex:0.1, margin:0}}>
       <View style={{flex:1, justifyContent:'space-around',flexDirection: 'row'}}>
       <TouchableOpacity style={{flex:0.5, backgroundColor:'yellow', justifyContent:'center', marginHorizontal:10}} onPress={this.chooseTabBar.bind(this, 'RadioButton')}>
       <Text style={{fontSize:18, color:'black', fontWeight:'bold', justifyContent:'center', textAlign:'center'}}>RadioButton</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{flex:0.5,backgroundColor:'red',justifyContent:'center', marginHorizontal:10}} onPress={this.chooseTabBar.bind(this, 'DateTimePicker')}>
       <Text style={{fontSize:18, color:'black', fontWeight:'bold',textAlign:'center'}}>DateTime</Text>
       </TouchableOpacity>
       </View>
       </View>
      </View>
    );
  }
}

export default CustomTabNavigator