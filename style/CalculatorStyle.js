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
  },
  btnRow: {
    flexDirection: 'row',
    flex: 1,
  },
  numPad: {
    flex: 3,
  },
  operPad: {
    flex: 1,
    paddingBottom: 1,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
