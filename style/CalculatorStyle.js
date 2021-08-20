import {StyleSheet} from 'react-native';

export const CalculatorStyle = StyleSheet.create({
  calculatorWrapper: {
    flex: 1,
    backgroundColor: '#23194d',
  },
  resultText: {
    color: '#dc095a',
    fontSize: 50,
    textAlign: 'right',
  },
  resultContainer: {
    flex: 2,
    padding: 10,
  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#0d0829',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    padding: 1,
  },
  btnRow: {
    flexDirection: 'row',
    flex: 1,
  },
});
