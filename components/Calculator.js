import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {CalculatorStyle as styles} from '../style/CalculatorStyle';
import CustomBtn from './CustomBtn';

class calculator extends Component {
  layout = [
    ['CLEAR', 'DELETE'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['.', '0', '=', '+'],
  ];

  state = {
    screen: '0',
  };

  onClick = e => {
    this.setState({screen: e});
  };

  getLayout = () => {
    return this.layout.map((e, i) => {
      let row = e.map((e, i) => {
        if (e.match(/[CLEAR|DELETE]/))
          return (
            <CustomBtn
              key={i}
              val={e}
              spetialKey={true}
              handler={this.onClick}
            />
          );
        else return <CustomBtn key={i} val={e} handler={this.onClick} />;
      });
      return (
        <View key={i} style={styles.btnRow}>
          {row}
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.calculatorWrapper}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}> {this.state.screen} </Text>
        </View>
        <View style={styles.inputContainer}>{this.getLayout()}</View>
      </View>
    );
  }
}

export default calculator;
