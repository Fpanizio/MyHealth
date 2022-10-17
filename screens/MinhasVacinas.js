import React, {useState} from 'react';
import {navigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

export let ListaVacinas = [
  {
    vacina: 'BCG',
    data: '2022-09-21',
    dose: 1,
    urlImage: 'http://',
    proximaVacina: '2023-09-21',
  },
  {
    vacina: 'Tetano',
    data: '2022-09-20',
    dose: 1,
    urlImage: 'http://',
    proximaVacina: '2025-05-20',
  },
  {
    vacina: 'Dengue',
    data: '2022-09-19',
    dose: 1,
    urlImage: 'http://',
    proximaVacina: '2024-09-23',
  },
  {
    vacina: 'COVID-19',
    data: '2022-03-03',
    dose: 1,
    urlImage: 'http://',
    proximaVacina: '2024-03-03',
  },
  {
    vacina: 'POLIO',
    data: '2022-09-21',
    dose: 1,
    urlImage: 'http://',
    proximaVacina: '2024-09-23',
  },
  {
    vacina: 'SARAMAPO',
    data: '2022-09-21',
    dose: 1,
    urlImage: 'http://',
    proximaVacina: '2024-09-23',
  },
];

const reset = () => {
  props.navigation.reset({
    index: 3,
    routes: [{name: 'Home'}],
  });
};

const MinhasVacinas = props => {
  const [vacina, setVacina] = useState('');
  const [dose, setDose] = useState('');
  const [data, setData] = useState('');
  const [proximaVacina, setProximaVacina] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const addVaccine = () => {
    if (
      ListaVacinas.find(vaccine => {
        return vaccine.vacina === vacina;
      }) === true
    ) {
      setModalVisible(!modalVisible);
      return;
    } else {
      if (vacina && dose && data && proximaVacina) {
        ListaVacinas.push({
          vacina: vacina,
          dose: dose,
          data: data,
          proximaVacina: proximaVacina,
        });
      }
    }
  };

  // APENAS VÊ A DOSE DA VACINA, NÃO EDITA AINDA.
  const handePress = vacina => {
    const listaVacinas = ListaVacinas.find(vaccine => {
      return vaccine.vacina === vacina;
    });

    Alert.alert(
      'Vaccine detais',
      `Nome da vacina: ${listaVacinas.vacina} \n Dose da vacina: ${listaVacinas.dose}`,
    );

    // setVacina(listaVacinas.vacina);
    // setDose(listaVacinas.dose);
    // setData(listaVacinas.data);
    // setProximaVacina(listaVacinas.proximaVacina);
    // setModalVisible(!modalVisible);
  };

  //Deleta a vacina
  const deleteVacina = vacina => {
    const listaVacinas = ListaVacinas.find(vaccine => {
      return vaccine.vacina === vacina;
    });

    ListaVacinas = ListaVacinas.filter(Listv => {
      return Listv.vacina !== listaVacinas.vacina;
    });

    props.navigation.reset({
      index: 3,
      routes: [{name: 'Home'}],
    });
  };

  ListaVacinas.sort(function (a, b) {
    if (a.vacina < b.vacina) return -1;
    else return true;
  });

  function Item({vacina, dose, data, proximaVacina}) {
    return (
      <TouchableOpacity
        style={styles.containerFlatList}
        onLongPress={() => deleteVacina(vacina)}
        onPress={() => handePress(vacina)}>
        <Text style={{color: '#3F92C5', fontSize: 20}}>{vacina}</Text>
        <Text
          style={{
            backgroundColor: '#3F92C5',
            color: 'white',
          }}>{`${dose} dose`}</Text>
        <Text>{data}</Text>
        <Image
          style={styles.image}
          source={require('../assets/image-comprovante.png')}
        />
        <Text
          style={{
            color: 'red',
            fontSize: 11,
            alignSelf: 'flex-end',
            paddingRight: 3,
          }}>{`Próxima dose em: ${proximaVacina}`}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={ListaVacinas}
        renderItem={({item}) => (
          <Item
            vacina={item.vacina}
            dose={item.dose}
            data={item.data}
            proximaVacina={item.proximaVacina}
          />
        )}
        numColumns={2}
        style={styles.flatlist}
      />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.cadastrar}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.textPassword}>Nova vacina</Text>
        </TouchableOpacity>
        <Modal
          animationType="fade"
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => {
            setModalVisible(!modalVisible),
              setVacina(''),
              setDose(''),
              setData(''),
              setProximaVacina('');
          }}>
          <SafeAreaView>
            <KeyboardAvoidingView style={styles.body}>
              {/* <View style={styles.content}>
                <Text style={[styles.text, {paddingTop: 16}]}>
                  Data de vascinação
                </Text>
                <TouchableOpacity
                  style={[
                    styles.content,
                    {
                      backgroundColor: 'white',
                      width: 218,
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  ]}
                  onPress={() => setOpen(true)}>
                  <Text></Text>
                </TouchableOpacity>
                <DatePicker
                  mode="date"
                  modal={true}
                  open={open}
                  date={data}
                  onConfirm={data => {
                    setOpen(false);
                    setData(data);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </View> */}
              <View style={styles.content}>
                <Text style={styles.text}>Data de vascinação</Text>
                <TextInput
                  style={styles.input}
                  value={data}
                  onChangeText={setData}
                />
              </View>
              <View style={styles.content}>
                <Text style={styles.text}>Vacina</Text>
                <TextInput
                  style={styles.input}
                  value={vacina}
                  onChangeText={setVacina}
                />
              </View>
              <View style={styles.content}>
                <Text style={styles.text}>Dose</Text>
                <TextInput
                  style={styles.input}
                  value={dose}
                  onChangeText={setDose}
                />
              </View>
              <View style={styles.content}>
                <Text style={styles.text}>Comprovante</Text>
                {/* <Image source={require('../assets/image-comprovante.png')} /> */}
                <TextInput style={styles.input} />
              </View>
              <View style={styles.content}>
                <Text style={styles.text}>Próxima vacinação</Text>
                <TextInput
                  style={styles.input}
                  value={proximaVacina}
                  onChangeText={setProximaVacina}
                />
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.cadastrar}
                  onPress={() => {
                    addVaccine(), setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textPassword}>Cadastrar</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#ADD5D0',
  },
  flatlist: {
    height: Dimensions.get('window').height / 2 - 75,
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  containerFlatList: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width / 2 - 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: 200,
    height: 80,
  },
  body: {
    marginTop: 55,
    height: '100%',
    backgroundColor: '#ADD5D0',
    padding: 15,
  },
  content: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    marginVertical: 10,
  },
  text: {
    height: 40,
    width: 140,
    color: 'white',
    textAlign: 'right',
    paddingRight: 10,
    paddingTop: 10,
  },

  input: {
    width: 218,
    justifyContent: 'center',
    textAlign: 'center',
    height: 40,
    backgroundColor: 'white',
    color: '#3F92C5',
    marginRight: 10,
  },
});

export default MinhasVacinas;
