import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, Modal, TouchableHighlight } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';
import { Actions, Router, Scene } from 'react-native-router-flux';
// import help from './modalTest';
// import ButtonFile from './Src/Components/ButtonFile'

class SampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getTitle: {
                email: '',
                password: ''
            },
            modalVisible: false,
        };
        this.inputs = {};
        this.focusNextField = this.focusNextField.bind(this);
    }
    focusNextField(id) {
        this.inputs[id].focus();
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    handleChange(name, e) {
        // alert(name)
        var change = this.state.getTitle;
        var strValue = e;
        change[name] = strValue;
        //  alert(change[name])
        this.setState({ getTitle: change })

    }
    validationMail(email) {
        var reg = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])/;
        return reg.test(email);
    }
    loginMethod() {
        let { email, password } = this.state.getTitle;

        if (email == '' || email == null || email == undefined) {
            Alert.alert('Sample', 'Please enter Email Id')
        } else if (!this.validationMail(email)) {
            Alert.alert('Sample', 'Please enter valid email Id')
        }
        else if (password == '' || password == null || password == undefined) {
            Alert.alert('Sample', 'Please enter Password')
        }
        else {
            // alert('login sucesessfully: ' + email + password)
           this.props.navigation.navigate('SuperGridView')
            alert('login:' + email + password)

        }
    }
    render() {
        return (
            <ImageBackground source={require('D:/PersonalReact/images/bg.png')} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container} >

                    <Image source={require('D:/PersonalReact/images/kairos2.png')}
                        style={styles.imageSizer} />

                    <TextInput
                        placeholder="email"
                        placeholderTextColor="black"
                        style={styles.userTextfields}
                        value={this.state.getTitle.email}
                        onChangeText={this.handleChange.bind(this, 'email')}
                        ref={input => { this.inputs["one"] = input; }}
                        onSubmitEditing={() => { this.focusNextField("two"); }}
                    />
                    <TextInput
                        placeholder="password"
                        placeholderTextColor="black"
                        style={styles.userTextfields}
                        value={this.state.getTitle.password}
                        secureTextEntry={true}
                        onChangeText={this.handleChange.bind(this, 'password')}
                        ref={input => { this.inputs["two"] = input; }}
                        onSubmitEditing={() => { this.loginMethod() }}
                    />
                    <TouchableOpacity onPress={this.loginMethod.bind(this)} style={[styles.userTextfields, { backgroundColor: 'dodgerblue' }]}>
                        <Text style={{ fontSize: 20, fontWeight: '800', color: 'white', textAlign: 'center' }}>Login</Text>
                    </TouchableOpacity>

                    <Modal animationType={"fadde"} transparent={false}
                        visible={this.state.modalVisible}
                    >

                        <View style={styles.container} >
                            <Text style={styles.text}>Please fill your details</Text>

                            <TouchableHighlight onPress={() => {
                                this.toggleModal(!this.state.modalVisible)
                            }}>

                                <Text style={styles.text}>Close</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>

                    <TouchableOpacity onPress={() => { this.toggleModal(true) }} style={[styles.userTextfields, { backgroundColor: 'dodgerblue' }]}>
                        <Text style={{ fontSize: 20, fontWeight: '800', color: 'white', textAlign: 'center' }}>Help</Text>

                    </TouchableOpacity>

                    <TouchableOpacity

                        onPress={() => {
                            this.refs.toast.show('Please enter details!', DURATION.LENGTH_LONG);
                        }}>
                        <Text style={styles.toast}> need me!</Text>
                    </TouchableOpacity>
                    <Toast
                        ref="toast"
                        style={{ backgroundColor: 'yellow' }}
                        position='bottom'
                        positionValue={100}
                        fadeInDuration={750}
                        fadeOutDuration={1000}
                        opacity={0.8}
                        textStyle={{ color: 'red' }}
                    />

                </View >
            </ImageBackground>
        );
    }
}

export default SampleComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 6,
        // backgroundColor: 'royalblue'

    },
    userTextfields: {
        height: 45,
        borderColor: 'royalblue',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginHorizontal: 15,
        color: 'black',
        textAlign: 'left',
        margin: 5
    },
    imageSizer: {
        flex: 0.4,
        width: 250,
        height: 150,
        resizeMode: 'contain',
        marginRight: 10,
        marginLeft: 70,
        marginBottom: 5,
        marginTop: 5
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderColor: 'royalblue',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 15,
        color: 'black',
        textAlign: 'center',
        margin: 5,
    },
    toast: {

        //   backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        textAlign: 'center',
        color: 'blue',
        // fontWeight: '',
        fontSize: 20
    }
});


