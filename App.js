import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {AppStyle as styles} from './style/AppStyle';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Calculator />
      </SafeAreaView>
    );
  }
}

export default App;
