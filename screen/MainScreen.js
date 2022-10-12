import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

//svg
import Hamburguer from '../assets/hamburgerIcon.svg';

import Card from '../components/Cards';

const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.topPage}>
        <TouchableOpacity style={styles.menu}>
          <Hamburguer width="55" height="55" />
        </TouchableOpacity>
        <Text style={styles.text}>Minhas vacinas</Text>
      </View>
      <View style={styles.main}>
        <FlatList>
          <View style={styles.contentList}>
            <Card cor={'green'} />
            <Card cor={'purple'} />
            <Card cor={'green'} />
            <Card cor={'purple'} />
            <Card cor={'green'} />
            <Card cor={'purple'} />
          </View>
        </FlatList>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.enterButton}>
          <Text style={styles.newVaccine}>Nova vacina</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ADD5D0',
    flex: 1,
  },
  topPage: {
    flex: 0.6,
    paddingLeft: 10,
    alignItems: 'center',
    backgroundColor: '#C1E7E3',
    height: 75,
    flexDirection: 'row',
  },
  menu: {
    marginRight: 15,
  },
  text: {
    fontSize: 33,
    color: '#419ED7',
  },
  main: {
    flex: 5,
  },
  buttons: {
    paddingTop: 10,
    flex: 1,
    alignItems: 'center',
  },
  enterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#49B976',
    width: 166,
    height: 50,
    elevation: 5,
  },
  contentList: {
    paddingLeft: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  newVaccine: {
    color: 'white',
    fontSize: 20,
  }
});

export default App;
