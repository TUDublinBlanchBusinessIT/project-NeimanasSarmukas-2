import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Employer1 = () => {
  const [company, setCompany] = useState('');
  const [hours, setHours] = useState('');
  const [date, setDate] = useState('');
  const [requirements, setRequirements] = useState('');
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register your company!</Text>

      <TextInput
        label="Company Name"
        value={company}
        onChangeText={setCompany}
        style={styles.input}
      />

      <TextInput
        label="Hours Required"
        value={hours}
        onChangeText={setHours}
        style={styles.input}
      />

      <TextInput
        label="Date Required"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />

      <TextInput
        label="Are There Special Requirements"
        value={requirements}
        onChangeText={setRequirements}
        style={styles.input}
      />

       <Button
        mode="contained"
        onPress={() => navigation.navigate('employer2')}
        style={styles.button}>
        Register
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
  },
});

export default Employer1;