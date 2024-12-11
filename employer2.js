import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Employer2 = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Employee Search!</Text>

      {/* Employee Listings */}
      <View style={styles.flexContainer}>
        <Image
          source={{
            uri: 'https://cdn-blog.novoresume.com/articles/cv-examples/Web-Developer-CV-Example.png',
          }}
          style={styles.bannerImage}
        />
        <Text style={styles.text2}>Warehouse Worker!</Text>
      </View>

      <View style={styles.flexContainer}>
        <Image
          source={{
            uri: 'https://www.resume-now.com/sapp/uploads/2024/03/b7826cf5-dcab-4ac8-a636-01b6661ed850_ea5c9fb4-9e7b-4aa3-9e04-a1640ee30d2a_CV-example-video-producer.svg',
          }}
          style={styles.bannerImage}
        />
        <Text style={styles.text2}>Delivery Driver!</Text>
      </View>

      <View style={styles.flexContainer}>
        <Image
          source={{
            uri: 'https://s3.resume.io/cdn-cgi/image/width=544,format=auto/uploads/examples/resume/resume_pages/35976/persistent-resource/teen-cv-examples.jpg',
          }}
          style={styles.bannerImage}
        />
        <Text style={styles.text2}>ANY!</Text>
      </View>

      <View style={styles.flexContainer}>
        <Image
          source={{
            uri: 'https://www.my-resume-templates.com/wp-content/uploads/2023/05/good-resume-example.jpg',
          }}
          style={styles.bannerImage}
        />
        <Text style={styles.text2}>Van Driver!</Text>
      </View>

      {/* Menu Button */}
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
                console.log('Settings clicked');
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
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
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

export default Employer2;
