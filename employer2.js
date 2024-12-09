import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Employer2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the employee search!</Text>
      
      <View style={styles.flexContainer}>
      <Image
        source={{
          uri: 'https://img.rasset.ie/0015e662-1200.jpg',
        }}
        style={styles.bannerImage}
      />
        <Text style={styles.text2}>Warehouse Worker!</Text>
      
      </View>

      <View style={styles.flexContainer}>
      <Image
        source={{
          uri: 'https://c8.alamy.com/comp/FWC50N/toan-thang-chinese-takeaway-with-delivery-service-bundoran-ireland-FWC50N.jpg',
        }}
        style={styles.bannerImage}
      />
        <Text style={styles.text2}>Delivery Driver!</Text>
      
      </View>

      <View style={styles.flexContainer}>
      <Image
        source={{
          uri: 'https://img.rasset.ie/0015e662-1200.jpg',
        }}
        style={styles.bannerImage}
      />
        <Text style={styles.text2}>Warehouse Worker!</Text>
      
      </View>

      <View style={styles.flexContainer}>
      <Image
        source={{
          uri: 'https://img.rasset.ie/0015e662-1200.jpg',
        }}
        style={styles.bannerImage}
      />
        <Text style={styles.text2}>Warehouse Worker!</Text>
      
      </View>

      <View style={styles.flexContainer}>
      <Image
        source={{
          uri: 'https://img.rasset.ie/0015e662-1200.jpg',
        }}
        style={styles.bannerImage}
      />
        <Text style={styles.text2}>Warehouse Worker!</Text>
      
      </View>

      <View style={styles.flexContainer}>
      <Image
        source={{
          uri: 'https://img.rasset.ie/0015e662-1200.jpg',
        }}
        style={styles.bannerImage}
      />
        <Text style={styles.text2}>Warehouse Worker!</Text>
      
      </View>

      <View style={styles.flexContainer}>
      <Image
        source={{
          uri: 'https://img.rasset.ie/0015e662-1200.jpg',
        }}
        style={styles.bannerImage}
      />
        <Text style={styles.text2}>Warehouse Worker!</Text>
      
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, 
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
  },
  bannerImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: 'darkgrey',
    marginBottom: 10,
    borderRadius: 5,
  },
   text2: {
    fontSize: 15,
    marginLeft: 15,
  },
});

export default Employer2;