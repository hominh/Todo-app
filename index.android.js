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
import Note from './app/components/note';

export default class TodoApp extends Component {

  state = {
    noteArray: [ {'date':'test date','note':'test note 1'} ],
    noteText: '',
  }

  render() {

    let notes1 = this.state.noteArray.map((val,key) => {
      return <Note key = {key} keyval = {key} val = {val} deleteMethod = { () => this.deleteMethod(key) } />
    });
    

    return (
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Text style = {styles.headerText}>
            Note
          </Text>
          </View>
          <ScrollView style = {styles.scrollContainer}>
            {notes1}
          </ScrollView>
          <View style = {styles.footer}>
            <TouchableOpacity onPress = {this.addNote.bind(this)} style = {styles.addButton}>
              <Text style = {styles.addButtonText}>
                  +
              </Text>
            </TouchableOpacity>
            <TextInput
              onChangeText = {(noteText) => this.setState({noteText})}
              value = {this.state.noteText}  
              style = {styles.textInput} 
              placeholder = '...' 
              placeholderTextColor = 'white' 
              underlineColorAndroid = 'transparent'>
            </TextInput>
          </View>    
      </View>
    );
  }

  addNote() {
     if(this.state.noteText) {
       var d = new Date();
       this.state.noteArray.push({'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),'note': this.state.noteText});
       this.setState({noteArray:this.state.noteArray});
       this.setState({noteText: ''});
       //console.log(this.state);
    }
    else {
      alert('Please input note text');
    }
    
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
    flex: 1,
    marginBottom: 100,
  },
  footer: { 
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  }

});

AppRegistry.registerComponent('TodoApp', () => TodoApp);
