import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

var listArray = [
    { id: 1, name: "Raju", location: 'AmalaPuram' },
    { id: 2, name: "Veni", location: 'Tuni' },
    { id: 3, name: "Dhiraj", location: 'Vizag' },
    { id: 4, name: "Shameenaz", location: 'Hanumanthu Waka' }]

class FlatListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: listArray

        };
    }

    selectParticularData = (item) => {
        alert("userName: " + item.name)

    }

    _renderItem = (data) => {
        let { item, index } = data;
        return (
            <View key={index} style={{ flex: 1, backgroundColor: 'green', padding: 10 }}>
                <Text style={{ fontSize: 14, color: 'white', fontWeight: '800', textAlign: 'left' }} onPress={() => { this.selectParticularData(item) }}>User Name: {item.name}</Text>
                <Text style={{ fontSize: 14, color: 'white', fontWeight: '800', textAlign: 'left' }}>User Location: {item.location}</Text>
            </View>
        )

    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: 10, }}>
                <FlatList
                    data={this.state.data}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

export default FlatListComponent;
