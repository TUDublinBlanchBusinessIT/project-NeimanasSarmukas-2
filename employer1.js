import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Employee1 = () => {
  const [jobPreference, setJobPreference] = useState('');
  const [phone, setPhone] = useState('');
  const [qualifications, setQualifications] = useState('');
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register Yourself</Text>

      <TextInput
        label="Job Preference"
        value={jobPreference}
        onChangeText={setJobPreference}
        style={styles.input}
      />

      <TextInput
        label="Phone Number"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />

      <TextInput
        label="Qualifications"
        value={qualifications}
        onChangeText={setQualifications}
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

export default Employee1;