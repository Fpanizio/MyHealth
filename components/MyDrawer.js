import React, {useEffect} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, StyleSheet} from 'react-native';

import {signOut} from 'firebase/auth';
import {auth} from '../config/firebase';

const MyDrawer = props => {
  useEffect(() => {
    auth.onAuthStateChanged(() => {
      if (!auth.currentUser) {
        props.navigation.pop();
      }
    });
  }, []);

  const logout = () => {
    signOut(auth);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.email}</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={logout} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 24,
    color: '#419ED7',
  },
});

export default MyDrawer;
