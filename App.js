/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity, Alert} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super()
    this.state = {
      calculatingText:'',
      calculatedResult:''
    }
    this.opsArray=['Del','+','-','*','/']
  }

  numerBtnPressed(text) {
    console.log(text)
    if(text == '=') {
      const equation = this.state.calculatingText
      const lastCharOfEq = equation.substr(equation.length-1)
      if(this.opsArray.indexOf(lastCharOfEq) == -1) {
        this.setState({calculatedResult:eval(this.state.calculatingText)})
        if(eval(this.state.calculatingText) == 520) {
          Alert.alert('嘬，我也爱你')
        }
      }
      else {
        this.setState({calculatedResult:eval(equation.substring(0,equation.length-1))})
      }
      console.log('last '+this.state.calculatedResult)
      
    }
    else {
      this.setState({calculatingText:this.state.calculatingText+text})

    }
  }

  opsPressed(opsType) {
    switch(opsType){
      case 'Del':
        console.log(opsType)
        //let newLine = this.state.calculatingText.slice(0.-1)
        let newLine =  this.state.calculatingText
        this.setState({calculatingText:newLine.substring(0,newLine.length-1)})
        break
      case '+':
      case '-':
      case '*':
      case '/':
        
        let orgLine =  this.state.calculatingText
        let lastChar = this.state.calculatingText.substr(orgLine.length-1)
        console.log(this.state.calculatingText)
        if(this.opsArray.indexOf(lastChar) != -1) {
          this.setState({calculatingText:orgLine.substring(0,orgLine.length-1)+opsType})
        }
        else {
          this.setState({calculatingText:this.state.calculatingText+opsType})
        }
        console.log("orgline "+orgLine)
        console.log("lastchar "+lastChar)
    }

  }

  render() {
    let rows = []
    let numArray = [[7,8,9],[4,5,6],[1,2,3],['.',0,'=']]
    for(let rowNum=0;rowNum<4;rowNum++) {
      let row = []
      for(let columNum=0;columNum<3;columNum++) {
        row.push(<TouchableOpacity key={numArray[rowNum][columNum]} onPress={()=>this.numerBtnPressed(numArray[rowNum][columNum])} style={styles.buttonNumber}><Text style={styles.btnText}>{numArray[rowNum][columNum]}</Text></TouchableOpacity>)
      }
      rows.push(<View key={rowNum} style={styles.numberRows}>{row}</View>)
    }

    let ops = []
    
    for(let i=0;i<5;i++) {
      ops.push(<TouchableOpacity key={this.opsArray[i]} onPress={()=>this.opsPressed(this.opsArray[i])} style={styles.buttonNumber}><Text>{this.opsArray[i]}</Text></TouchableOpacity>)
    }
    return(
      <View style={styles.container}>
        <View style={styles.result}>  
          <Text style={styles.resultText}>{this.state.calculatedResult}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.caclulationText}>{this.state.calculatingText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
            
          </View>
          <View style={styles.operations}>
            {ops}
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
    justifyContent: 'space-around'
  },
  buttonNumber: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    
  },
  btnText: {
    fontSize:30
  },
  numberRows: {
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#FFA000',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  operations: {
    flex: 1,
    backgroundColor:'#FF6F00',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});
