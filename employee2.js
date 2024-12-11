import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Employee2 = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Job Search!</Text>

      {/* Job Listings */}
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
            uri: 'https://media.sciencephoto.com/image/f0206410/800wm',
          }}
          style={styles.bannerImage}
        />
        <Text style={styles.text2}>Cashier!</Text>
      </View>

      <View style={styles.flexContainer}>
        <Image
          source={{
            uri: 'https://dhl-freight-connections.com/wp-content/uploads/2024/04/forklift-1.png',
          }}
          style={styles.bannerImage}
        />
        <Text style={styles.text2}>Forklift Driver!</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setMenuVisible(true)}
        >
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Custom Popup Menu */}
      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('profile');
              }}
            >
              <Text style={styles.modalButtonText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setMenuVisible(false);
                console.log('Settings clicked'); // Add functionality here for settings.
              }}
            >
              <Text style={styles.modalButtonText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setMenuVisible(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  bannerImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    backgroundColor: 'darkgrey',
    marginBottom: 10,
    borderRadius: 5,
  },
  text2: {
    fontSize: 15,
    marginLeft: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalButton: {
    padding: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Employee2;

