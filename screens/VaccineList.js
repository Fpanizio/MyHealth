import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import NextVaccine from '../components/NextVaccine';
import { ListaVacinas } from './MinhasVacinas';

const VaccineList = () => {
  ListaVacinas.sort(function (a, b) {
    if (a.proximaVacina < b.proximaVacina) return -1;
    else return true;
  });


  return (
    <View style={styles.container}>
      <FlatList
        data={ListaVacinas}
        renderItem={item => <NextVaccine item={item} />}
        numColumns={1}
        style={styles.flatlist}
      />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.cadastrar}
          onPress={console.log('adas')}>
          <Text style={styles.textPassword}>Nova vacina</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#ADD5D0',
  },
  buttons: {
    height: '17%',
    justifyContent: 'center',
    alignSelf: 'center',
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
});

export default VaccineList;
