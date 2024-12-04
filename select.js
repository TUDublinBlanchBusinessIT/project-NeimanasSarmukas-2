import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Select = () => {  // Ensure the component is properly defined
  const navigation = useNavigation();  // Hook for navigation

  return (
    <View style={styles.container}>
    
      <Text style={styles.header}>Are You A :</Text>
      <Button
        mode="contained" onPress={() => navigation.navigate('employer1')}
        style={styles.button} >
        Employer
      </Button> <br/>

       <Button
        mode="contained" onPress={() => navigation.navigate('employee1')}
        style={styles.button}>
        Employee
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
  button: {
    marginTop: 20,
  },

});

export default Select;