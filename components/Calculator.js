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
    screen: '',
    period: false,
  };

  onClick = e => {
    let length = this.state.screen.length;
    let lastInput = this.state.screen[length - 1];

    // borra el estado
    if (e === 'AC') {
      this.setState({period: false});
      this.setState({screen: ''});
    }
    // elimina la última entrada
    else if (e === 'DELETE') {
      if (lastInput === '.') this.setState({period: false});
      this.setState({screen: this.state.screen.slice(0, -1)});
    }
    // calcula el resultado
    else if (e === '=') {
      try {
        if (length > 0) {
          let res = this.state.screen;
          if (length === 1 && res.match(/[\-|+]/)) res = '';
          else if (lastInput.match(/[\-|/|+|*|\.]/)) {
            do {
              if (res[res.length - 1] === '.') this.setState({period: false});
              res = res.slice(0, -1);
            } while (res[res.length - 1].match(/[\-|/|+|*|\.]/));
            res = String(eval(res));
          } else res = String(eval(res));
          if (res === '0') res = '';
          this.setState({screen: res});
          if (res.indexOf('.')) this.setState({period: true});
        }
      } catch {
        this.setState({screen: ''});
      }
    }

    // establece las entradas validas para las operaciones
    else if (e.match(/[\-|/|+|*]/)) this.validateOperation(e);
    // permite ingresar cualquier número
    else {
      // evalua que los numeros ingresados no tengan más de un punto decimal
      if (!this.state.period || e !== '.')
        this.setState({screen: this.state.screen + e});
      if (e === '.') this.setState({period: true});
    }
  };

  validateOperation = e => {
    let length = this.state.screen.length;
    let lastInput = this.state.screen[length - 1];

    this.setState({period: false});
    // al inicio de la operacion puede haber un + o un -
    if (length === 0) {
      if (e.match(/[\-|+]/)) this.setState({screen: e});
    } else {
      // examina si la última entrada fue una operación
      if (lastInput.match(/[\-|/|+|*]/)) {
        if (length === 1) {
          if (e.match(/[\-|+]/))
            this.setState({screen: this.state.screen.slice(0, -1) + e});
        } else {
          if (e.match(/[\-|+]/) && lastInput.match(/[/|*]/))
            this.setState({screen: this.state.screen + e});
          else if (e.match(/[*|/]/) && lastInput.match(/[\-|+]/)) {
            if (!this.state.screen[length - 2].match(/[*|/]/))
              this.setState({screen: this.state.screen.slice(0, -1) + e});
          } else this.setState({screen: this.state.screen.slice(0, -1) + e});
        }
      } else this.setState({screen: this.state.screen + e});
    }
  };

  createOperPad = () => {
    return this.operLayout.map((e, i) => {
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
  };

  createNumPad = () => {
    return this.mainLayout.map((e, i) => {
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
  };

  getLayout = () => {
    let numPad = this.createNumPad();
    let operPad = this.createOperPad();

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
          <Text style={styles.resultText}>
            {this.state.screen === '' ? '0' : this.state.screen}
          </Text>
        </View>
        <View style={styles.inputContainer}>{this.getLayout()}</View>
      </View>
    );
  }
}

export default calculator;
