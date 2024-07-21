import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TransactionList from './TransactionList';
import TransactionDetail from './TransactionDetail';
import Summary from './Summary';
import { TransactionProvider } from './TransactionContext';

const Stack = createStackNavigator();

const TransactionStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen name="TransactionList" component={TransactionList} options={{ title: 'Transaction List' }} />
    <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ title: 'Transaction Detail' }} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const App = () => (
  <TransactionProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Transactions') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Summary') {
              iconName = focused ? 'information' : 'information-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'grey',
        }}
      >
        <Tab.Screen name="Transactions" component={TransactionStackNavigator} />
        <Tab.Screen name="Summary" component={Summary} />
      </Tab.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
  </TransactionProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
