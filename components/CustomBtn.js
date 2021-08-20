import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {CustomBtnStyles as styles} from '../style/CustomBtnStyles';

class CustomBtn extends Component {
  render() {
    const {val, handler, keyStyle} = this.props;
    return (
      <TouchableOpacity style={keyStyle} onPress={() => handler(val)}>
        <Text style={styles.btnText}>{val}</Text>
      </TouchableOpacity>
    );
  }
}

export default CustomBtn;
