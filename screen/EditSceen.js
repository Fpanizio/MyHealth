import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

//svg
import Hamburguer from '../assets/hamburgerIcon.svg';
import Trash from '../assets/trash.svg';

// import Input from '../components/Input';
import Checkbox from '../components/Checkbox';

const App = () => {
  const optionsIndividual = [
    {text: '1a. dose', id: 1},
    {text: '2a. dose', id: 2},
    {text: '3a. dose', id: 3},
    {text: 'Dose unica', id: 4},
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.body}>
      <View style={styles.topPage}>
        <TouchableOpacity style={styles.menu}>
          <Hamburguer width="55" height="55" />
        </TouchableOpacity>
        <Text style={styles.title}>EDITAR VACINA</Text>
      </View>
      <View style={styles.main}>
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.text}>Data de vacinação</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Vacina</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Dose</Text>
            <Checkbox options={optionsIndividual} onChange={op => alert(op)} />
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Comprovante</Text>
            <TextInput
              style={styles.input}
              placeholder="Selecionar Imagem..."
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>Próxima vacinação</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{paddingTop: 30}}>
            <TouchableOpacity style={styles.enterButton}>
              <Text style={styles.save}>Salvar alterações</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={{paddingTop: 30}}>
        <TouchableOpacity style={styles.delete}>
          <Trash width='25' height='25'/>
          <Text style={styles.save}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ADD5D0',
    flex: 1,
    paddingBottom: 40,
  },
  topPage: {
    paddingLeft: 10,
    alignItems: 'center',
    backgroundColor: '#C1E7E3',
    height: 75,
    flexDirection: 'row',
  },
  menu: {
    marginRight: 15,
  },
  title: {
    fontSize: 33,
    color: '#419ED7',
  },
  main: {
    flex: 1,
    marginTop: 50,
  },
  enterButton: {
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#49B976',
    width: 186,
    height: 50,
    elevation: 5,
  },
  save: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 250,
    height: 36,
  },
  content: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  delete: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FD7979',
    width: 133,
    height: 44,
    elevation: 5,
  },
});

export default App;
