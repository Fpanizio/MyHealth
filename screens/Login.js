import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

//SVG
// import Vaccine from '../assets/Vaccine.svg' ARRUMAR O ICONE DA VACINA

import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';

const Login = props => {
  const [email, setEmail] = useState('fpanizio@hotmail.com');
  const [senha, setSenha] = useState('123321');

  const authUser = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then(userCredential => {
        setEmail('');
        setSenha('');
        props.navigation.navigate('Home', {paramKey: email});
      })
      .catch(error => {
        console.log('Occorreu um erro: ');
        console.log('Erro: ' + error.message);
      });
  };

  const toCreateAccount = () => {
    props.navigation.navigate('CreateAccount');
  };
  const toResetPassword = () => {
    props.navigation.navigate('ResetPassword');
  };

  return (
    <SafeAreaView style={styles.body}>
      <ImageBackground
        source={require('../assets/background-vacina.png')}
        style={styles.imageBackground}
      />
      <ScrollView>
        <View style={styles.title}>
          {/* <Vaccine
            width={50}
            height={50}
            style={{marginRight: 15, marginTop: 10}}
          /> */}
          <Text style={styles.textTittle}>MyHealth</Text>
        </View>
        <View style={{paddingTop: 45, paddingBottom: 20}}>
          <Text style={styles.textSubTitle}>Controle as suas vacinas</Text>
          <Text style={styles.textSubTitle}>e fique seguro</Text>
        </View>
        <View style={styles.loginView}>
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.loginView}>
          <Text style={styles.text}>senha</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.viewButton}>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.enterButton} onPress={authUser}>
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.createButton}
              onPress={toCreateAccount}>
              <Text style={styles.textButton}>Criar Minha conta</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.passwordButton}
              onPress={toResetPassword}>
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

    height: 751,
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButton: {
    alignItems: 'center',
    paddingTop: 40,
  },

  passwordButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B5C7D1',
    width: 285,
    height: 38,
    elevation: 5,
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
  input: {
    backgroundColor: 'white',
    fontSize: 20,
    width: 300,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
    width: 70,
  },
  textButton: {
    fontSize: 20,
    color: 'white',
  },
});

export default Login;
