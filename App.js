import React, {Component} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {AppStyle as styles} from './style/AppStyle';
import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar backgroundColor="#0d0829" />
        <Calculator />
      </SafeAreaView>
    );
  }
}

export default App;
