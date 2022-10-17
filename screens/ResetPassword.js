import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {sendPasswordResetEmail} from 'firebase/auth';
import {auth} from '../config/firebase';

const ResetPassword = props => {
  const [email, setEmail] = useState('');

  const recuperarSenha = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Email de redefinição enviado com sucesso!');
      })
      .catch(() => {
        console.log('Erro ao solicitar a redefinição de senha');
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}> + MyHealth</Text>
      </View>
      <KeyboardAvoidingView style={styles.body}>
        <View style={styles.content}>
          <Text style={styles.text}>E-mail</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.cadastrar} onPress={recuperarSenha}>
            <Text style={styles.textPassword}>Recuperar senha</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#C1E7E3',
    justifyContent: 'center',
    padding: 10,
    height: 70,
  },
  headerText: {
    color: '#419ED7',
    fontSize: 33,
  },
  body: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ADD5D0',

    padding: 20,
  },
  content: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    height: 40,
    width: '20%',
    fontSize: 20,
    color: 'white',
  },

  input: {
    marginLeft: 10,
    width: '80%',
    justifyContent: 'center',
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    color: '#3F92C5',
  },
  cadastrar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#49B976',
    width: 166,
    height: 40,
    elevation: 5,
  },
  textPassword: {
    fontSize: 16,
    color: 'white',
  },
  buttons: {
    paddingTop: 150,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default ResetPassword;
