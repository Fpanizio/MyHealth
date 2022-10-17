import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyDrawer from '../components/MyDrawer';
import MinhasVacinas from './MinhasVacinas';
import VaccineList from './VaccineList';

const Drawer = createDrawerNavigator();

const Home = props => {
  return (
    <Drawer.Navigator drawerContent={props => <MyDrawer {...props} />}>
      <Drawer.Screen
        name="MinhasVacinas"
        component={MinhasVacinas}
        options={{
          headerStyle: {
            backgroundColor: '#C1E7E3',
          },
          headerTintColor: '#419ED7',
          headerTitle: 'Minhas vacinas',
        }}
      />
      <Drawer.Screen
        name="ProximasVacinas"
        component={VaccineList}
        options={{
          headerStyle: {
            backgroundColor: '#C1E7E3',
          },
          headerTintColor: '#419ED7',
          headerTitle: 'Próximas vacinas',
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  test: {
    backgroundColor: '#419ED7',
  },
});

export default Home;
