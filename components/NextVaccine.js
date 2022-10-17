import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const Card = props => {
  const {item} = props.item;

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{item.vacina}</Text>
      <Text style={styles.text}>{item.proximaVacina}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: 60,
    marginVertical: 5,
    borderRadius: 10,

    justifyContent: 'center',
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    color: '#3F92C5',
  },
  text: {
    fontSize: 15,
  },
});

export default Card;
