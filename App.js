import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TransactionListScreen = () => (
  <View style={styles.container}>
    <Text>Transaction List</Text>
  </View>
);

const SummaryScreen = () => (
  <View style={styles.container}>
    <Text>Summary</Text>
  </View>
);

const Stack = createStackNavigator();

const TransactionStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="TransactionList" component={TransactionListScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const App = () => (
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
      <Tab.Screen name="Summary" component={SummaryScreen} />
    </Tab.Navigator>
  </NavigationContainer>
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
