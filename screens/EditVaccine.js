import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const EditVaccine = props => {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={styles.body}>
        <View style={styles.content}>
          <Text style={styles.text}>Data de vascinação</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.cadastrar}>
            <Text style={styles.textPassword}>Cadastrar</Text>
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
    paddingTop: 80,
    height: '100%',
    flexDirection: 'column',
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
    width: '40%',
    color: 'white',
  },

  input: {
    width: '60%',
    justifyContent: 'center',
    textAlign: 'center',
    height: 35,
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
    height: 50,
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

export default EditVaccine;
