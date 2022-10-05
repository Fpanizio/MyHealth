import React, { useState } from 'react';
import {Text, View, SafeAreaView, StyleSheet, Button} from 'react-native';

//My components
import Input from './components/Input';

//SVG
import Vaccine from './assets/Vaccine.svg';

const App = () => {

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.titleView}>
        <View style={styles.title}>
          <Vaccine
            width={50}
            height={50}
            style={{marginRight: 15, marginTop: 10}}
          />
          <Text style={styles.textTittle}>MyHealth</Text>
        </View>
        <View style={{paddingTop: 45, paddingBottom: 20}}>
          <Text style={styles.textSubTitle}>Controle as suas vacinas</Text>
          <Text style={styles.textSubTitle}>e fique seguro</Text>
        </View>
      </View>
      <View>
        <Input label="E-mail" password={false} type="email-address" />
        <Input label="Senha" password={true} type="default" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 10,
    backgroundColor: '#d3d3d3',
    flex: 1,
  },
  title: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'center',
    marginTop: 50,
  },
  textTittle: {
    color: '#419ED7',
    fontSize: 48,
  },
  textSubTitle: {
    color: '#419ED7',
    fontSize: 30,
    textAlign: 'center',
  },
  titleView: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
});

export default App;
