import React, { Component } from 'react';
import {Alert, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class UserLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userDetails:{email:'', password:''},

    };
    this.inputs={};
    this.focusNextField = this.focusNextField.bind(this);
  }

  // through ref to next field
  focusNextField(id){
    this.inputs[id].focus();
  }

  // to handke textoinputs fields
  handleChange(name, e){
    //alert(name)
    var change = this.state.userDetails;
    var strValue = e;
    change[name]=strValue;
    // alert(change[name])
    this.setState({userDetails:change})

  }
  validationMail(email){
      var reg = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])/;
        return reg.test(email);
  }
  loginMethod(){
      let {email, password} = this.state.userDetails;

      if(email == '' || email== null || email == undefined){
          Alert.alert('Sample', 'Please enter Email Id')
      }else if(!this.validationMail(email)){
          Alert.alert('Sample', 'Please enter valid email Id')
      }
      else if(password == '' || password == null || password == undefined){
          Alert.alert('Sample', 'Please enter Password')
      }
      else{
         // alert('login sucesessfully: ' + email + password)
         Actions.superGridView();
         alert('login:'+email +password)
      }

     // alert('hello: ')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        placeholder="email"
        placeholderTextColor="orange"
        maxLength={25}
        keyboardType="email-address"
        returnKeyType="next"
        value={this.state.userDetails.email}

        ref={input => {this.inputs["one"] = input;}}
        onSubmitEditing={() => {this.focusNextField("two");}}
        style={styles.userTextfields}
        />
         <TextInput
        placeholder="password"
        keyboardType="default"
        placeholderTextColor="orange"
        maxLength={12}
        secureTextEntry={true}
        value={this.state.userDetails.password}
        ref={input => {this.inputs["two"] = input;}}
        onSubmitEditing={() => {this.loginMethod()}}
        returnKeyType="done"
        onChangeText={this.handleChange.bind(this, 'password')}
        style={styles.userTextfields}

        />

        <TouchableOpacity onPress={this.loginMethod.bind(this)} style={[styles.userTextfields,{backgroundColor:'green'}]}>
            <Text style={{fontSize:18, fontWeight:'700', color:'white', textAlign:'center'}}>Login</Text>
            </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        margin:10
      },
      userTextfields:{height:45, borderColor:'green', borderWidth:1, borderRadius:5, padding:5, marginHorizontal:15, margin:5}
});

export default UserLoginPage;