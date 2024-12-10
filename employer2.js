import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Employer2 = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
     
      <Text style={styles.text}>Employee search!</Text>
      
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


      <View style={styles.buttonContainer}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('employer2')}
        style={styles.button}
      >
        Home
      </Button>

       <Button
          mode="contained"
          onPress={() => navigation.navigate('profile')} // Navigate to ProfileScreen
          style={styles.button}
        >
          Profile
        </Button>
      
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
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    width: '100%',
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
  }
});

export default Employer2;