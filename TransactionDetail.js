import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetail = ({ route }) => {
  const { transaction } = route.params;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formattedDate = formatDate(transaction.date);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.amount}>{transaction.amount}</Text>
        <Text style={styles.cardTitle}>{transaction.name}</Text>
        <Text style={styles.text}>London, ON</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Transaction Date</Text>
        <Text style={styles.dateValue}>{formattedDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: '#f0f8ff',
    padding: 13,
    marginTop: 5,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 8,
  },
  amount: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  dateLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateValue: {
    fontSize: 18,
  },
});

export default TransactionDetail;
