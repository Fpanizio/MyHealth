import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckBox = ({options = [], onChange}) => {
  const [selected, setSelected] = useState([]);

  function toggle(id) {
    let index = selected.findIndex(i => i === id);
    let arrSelecteds = [...selected];
    if (index !== -1) {
      arrSelecteds.splice(index, 1);
    } else {
      arrSelecteds.push(id);
    }
    setSelected(arrSelecteds);
  }

  useEffect(() => onChange(selected), [selected]);
  return (
    <View style={styles.container}>
      {options.map((op, index) => (
        <>
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => toggle(op?.id)}>
              {selected.findIndex(i => i === op.id) !== -1 ? (
                <Icon name="check" color={'#3ebd93'} size={16} />
              ) : null}
            </TouchableOpacity>
            <Text style={styles.opText}>{op?.text}</Text>
          </View>
        </>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  touchable: {
    height: 22,
    width: 22,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1.5,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    width: 80,
  },
  opText: {
    marginLeft: 3,
    color: 'white',
    fontSize: 16,
  },
});

export default CheckBox;
