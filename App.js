/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';



export default class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.result}>  
          <Text style={styles.resultText}>121</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.caclulationText}>11X11</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.numberRows}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.numberRows}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" /> 
            </View>
            <View style={styles.numberRows}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
            <View style={styles.numberRows}>
              <Button title="0" />
              <Button title="0" />
              <Button title="0" />
            </View>
          </View>
          <View style={styles.operations}>
            <Button title="+" />
            <Button title="-" />
            <Button title="X" />
            <Button title="%" />
          </View>
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    //backgroundColor: 'yellow',
    //justifyContent: 'center',
  },
  result: {
    flex: 2,
    backgroundColor: '#FFD54F',
    alignItems: 'flex-end',
    justifyContent: 'center'

  },
  resultText: {
    fontSize: 50,
    color: 'grey',
    
  },
  calculation: {
    flex: 1,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  caclulationText: {
    fontSize:30,
    color: 'black'
  },
  buttons: {
    flex: 5,
    flexDirection: 'row',
  },
  numberRows: {
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#FFA000',
  },
  operations: {
    flex: 1,
    backgroundColor:'#FF6F00',
  }
})
