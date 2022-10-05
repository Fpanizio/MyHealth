import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const Input = props => {
  const {label, password, type} = props;
  const [input, setInput] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.textInput}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType={type}
        value={input}
        onChangeText={texto => setInput(texto)}
        secureTextEntry={password}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    fontSize: 20,
    width: '80%',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  textInput: {
    fontSize: 20,
    marginRight: 5,
  },
});

export default Input;
