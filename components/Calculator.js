import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {CalculatorStyle as styles} from '../style/CalculatorStyle';
import CustomBtn from './CustomBtn';
import {CustomBtnStyles as kStyles} from '../style/CustomBtnStyles';

class calculator extends Component {
  mainLayout = [
    ['AC', 'DELETE'],
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['0', '.', '='],
  ];

  operLayout = ['/', '*', '-', '+'];

  state = {
    screen: '0',
  };

  onClick = e => {
    this.setState({screen: e});
  };

  getLayout = () => {
    let numPad = this.mainLayout.map((e, i) => {
      let row = e.map((e, i) => {
        if (e.match(/[AC|DELETE]/))
          return (
            <CustomBtn
              key={i}
              val={e}
              keyStyle={kStyles.spetialBtn}
              handler={this.onClick}
            />
          );
        else
          return (
            <CustomBtn
              key={i}
              val={e}
              keyStyle={kStyles.defaultBtn}
              handler={this.onClick}
            />
          );
      });
      return (
        <View key={i} style={styles.btnRow}>
          {row}
        </View>
      );
    });

    let operPad = this.operLayout.map((e, i) => {
      if (e.match(/[+]/))
        return (
          <CustomBtn
            key={i}
            val={e}
            keyStyle={[kStyles.spetialBtn, kStyles.operKey]}
            handler={this.onClick}
          />
        );
      else
        return (
          <CustomBtn
            key={i}
            val={e}
            keyStyle={[kStyles.defaultBtn, kStyles.operKey]}
            handler={this.onClick}
          />
        );
    });

    return (
      <View style={styles.btnContainer}>
        <View style={styles.numPad}>{numPad}</View>
        <View style={styles.operPad}>{operPad}</View>
      </View>
    );
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
