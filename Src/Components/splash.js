
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';


export default class splash extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.load();
    }, 1000);
  }

  load = () => {
    this.props.navigation.push("SampleComponent");
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('D:/PersonalReact/images/kairos2.png')}
          style={styles.imageSizer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  imageSizer: {
    flex: 1,
    width: 200,
    height: 10,
    resizeMode: 'contain',
    borderWidth: 100,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});