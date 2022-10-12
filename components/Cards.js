import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Input = props => {
  const {cor} = props;

  return (
    <View
      style={{
        height: 180,
        width: 180,
        marginRight: 15,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: cor,
      }}></View>
  );
};

const styles = StyleSheet.create({});

export default Input;
