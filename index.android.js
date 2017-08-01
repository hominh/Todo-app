/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default class TodoApp extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Text style = {styles.headerText}>
            Note
          </Text>
          <ScrollView style = {styles.scrollContainer}>
          </ScrollView>
          <View style = {styles.footer}>
            <TouchableOpacity style = {styles.addButton}>
              <Text style = {styles.addButtonText}>
                  +
              </Text>
            </TouchableOpacity>
            <TextInput style = {styles.textInput} placeholder = '...' placeholderTextColor = 'white' underlineColorAndroid = 'transparent'>

            </TextInput>
          </View>    
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {

  },
  footer: { 

  },
  addButton: {

  },
  addButtonText: {

  },
  textInput: {

  }

});

AppRegistry.registerComponent('TodoApp', () => TodoApp);
