
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
import ButtonFile from './Src/Components/ButtonFile'
import PresentationalComponent from './Src/Components/PresentationalComponent'
import UserLoginPage from './Src/Components/login'
import SampleComponent from './Src/Components/SampleComponent';
import CustomTabViewPage from './Src/Components/customTab'
import modalTest from './Src/Components/modalTest'
import imagePickerComp from './Src/Components/imagePickerComp'
import SuperGridView from './Src/Components/superGridView';
import FlatListComponent from './Src/Components/Flatlistcomponent';
import {Router, Scene} from 'react-native-router-flux'
import { createStackNavigator, createAppContainer } from "react-navigation";
import  splash  from "./Src/Components/splash"
import image from "./Src/Components/image"

const AppNavigator = createStackNavigator({
  SampleComponent: {
    screen: SampleComponent,
  },
  SuperGridView: {
    screen: SuperGridView,
  },
  FlatListComponent:{
    screen:FlatListComponent
  },
  splash:{
    screen:splash
  },
  imagePicker:{
    screen:imagePickerComp
  }
}, {
    initialRouteName: 'SampleComponent',
    headerMode:'none'
   
});

 


const App = createAppContainer(AppNavigator);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'yellow',

//   }
// });

export default App