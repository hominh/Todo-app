import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Note extends Component {
    render() {
        return (
            <View style = {styles.note} key = {this.props.keyval}>
                <Text style = {styles.noteText}>
                    {this.props.val.date}
                </Text>
                <Text style = {styles.noteText}>
                    {this.props.val.note}
                </Text>
                <TouchableOpacity onPress={this.props.deleteMethod} style = {styles.deleteButton}>
                    <Text style = {styles.deleteText}>Delete</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    deleteButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    deleteText: {
        color: 'white',        
    }
});