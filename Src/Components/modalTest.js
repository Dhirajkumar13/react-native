import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet,border}from 'react-native'

class modelTest extends Component {
   state = {
      modalVisible: false,
   }
   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }
   render() {
      return (
         <View style = {styles.container}>
            <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                  <Text style = {styles.text}>Modal is open!</Text>
                  
                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Close Modal</Text>
                  </TouchableHighlight>
               </View>
            </Modal>
            
            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.text}>Open Modal</Text>
            </TouchableHighlight>
         </View>
      )
   }
}


const styles = StyleSheet.create ({
   container: {
      flex:1,
      alignItems: 'center',
      backgroundColor: '#ede3f2',
      padding: 100,
      margin:10
   },
   modal: {
      flex: 0.5,
      alignItems: 'center',
      backgroundColor: '#f7021a',
      padding: 100
   },
   text: {
      color: '#3f2949',
      marginTop: 10
   }
})
export default modelTest;