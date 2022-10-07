import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

//My components
import Input from './components/Input';

//SVG
import Vaccine from './assets/Vaccine.svg';

const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ImageBackground
        source={require('./assets/background-vacina.png')}
        style={styles.imageBackground}
      />
      <ScrollView>
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
        <View style={styles.loginView}>
          <Input label="E-mail" password={false} type="email-address" />
          <Input label="Senha" password={true} type="default" />
        </View>
        <View style={styles.viewButton}>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.enterButton}>
              <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.createButton}>
              <Text style={styles.text}>Criar Minha conta</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.passwordButton}>
              <Text style={styles.textPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  imageBackground: {
    flex: 0,
    position: 'absolute',
    
    height: 670,
    width: 430,
    opacity: 0.5,
  },
  title: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'space-around',
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
  loginView: {
    paddingLeft: 10,
  },
  viewButton: {
    alignItems: 'center',
    paddingTop: 40,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  textPassword: {
    fontSize: 16,
    color: 'white',
  },
  buttons: {
    paddingBottom: 30,
  },
  enterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#49B976',
    width: 166,
    height: 50,
    elevation: 5,
  },
  createButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#419ED7',
    width: 285,
    height: 50,
    elevation: 5,
  },
  passwordButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B5C7D1',
    width: 285,
    height: 38,
    elevation: 5,
  },
});

export default App;
