import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TransactionContext } from './TransactionContext';

const Summary = () => {
  const { transactions } = useContext(TransactionContext);

  const totalCount = transactions.length;
  const totalAmount = transactions.reduce((sum, transaction) => sum + parseFloat(transaction.amount.replace('$', '')), 0);

  const highestSpending = transactions.reduce((max, transaction) => {
    const amount = parseFloat(transaction.amount.replace('$', ''));
    return amount > max.amount ? { ...transaction, amount } : max;
  }, { amount: 0 });

  const lowestSpending = transactions.reduce((min, transaction) => {
    const amount = parseFloat(transaction.amount.replace('$', ''));
    return amount < min.amount ? { ...transaction, amount } : min;
  }, { amount: Infinity });

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.cardTitle}>Transactions</Text>
        </View>
        <View style={styles.cardDivider} />
        <View style={styles.column}>
          <Text style={styles.value}>{totalCount}</Text>
        </View>
      </View>
      <View style={styles.cardDivider} />
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.cardTitle}>Balance</Text>
        </View>
        <View style={styles.cardDivider} />
        <View style={styles.column}>
          <Text style={styles.value}>${totalAmount.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.cardDivider} />
      <View style={styles.card}>
        <Text style={styles.cardTitleRed}>High Spending</Text>
        <View style={styles.row}>
          <Text style={styles.subtitle}>{highestSpending.name}</Text>
          <Text style={styles.value}>${highestSpending.amount ? highestSpending.amount.toFixed(2) : '0.00'}</Text>
        </View>
      </View>
      <View style={styles.cardDivider} />
      <View style={styles.card}>
        <Text style={styles.cardTitleGreen}>Low Spending</Text>
        <View style={styles.row}>
          <Text style={styles.subtitle}>{lowestSpending.name}</Text>
          <Text style={styles.value}>${lowestSpending.amount !== Infinity ? lowestSpending.amount.toFixed(2) : '0.00'}</Text>
        </View>
      </View>
      <View style={styles.cardDivider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    paddingHorizontal: 8,
  },
  cardTitle: {
    fontSize: 20,
    color: 'blue',
  },
  cardTitleRed: {
    color: 'red',
    fontSize: 20,
  },
  cardTitleGreen: {
    color: 'green',
    fontSize: 20,
  },
  value: {
    fontSize: 18,
    textAlign: 'right',
  },
  card: {
    marginBottom: 6,
    paddingHorizontal: 8,
  },
  cardDivider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 9,
  },
  subtitle: {
    fontSize: 20,
    color: 'black',
    marginBottom: 4,
  },
});

export default Summary;
