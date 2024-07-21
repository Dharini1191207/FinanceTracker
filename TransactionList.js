import React, { useContext } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TransactionContext } from './TransactionContext';

const TransactionList = ({ navigation }) => {
  const { transactions } = useContext(TransactionContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })} style={styles.listItem}>
            <View style={styles.itemContent}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.itemSubtitle}>{item.amount}</Text>
            </View>
            <Text style={styles.chevron}>{'>'}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    marginBottom: 8,
    borderRadius: 27,
    elevation: 1,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 16,
    color: 'green',
    textAlign: 'right',
    paddingRight: 10,
  },
  chevron: {
    fontSize: 19,
    color: 'black',
    alignSelf: 'center',
  },
});

export default TransactionList;
