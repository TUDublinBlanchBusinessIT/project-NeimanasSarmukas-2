import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { auth, db } from './components/firebaseConfig'; // Firebase config

const ProfileScreen = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const user = auth.currentUser; // Get current logged-in user
        if (user) {
          const userDoc = await db.collection('users').doc(user.uid).get();
          if (userDoc.exists) {
            setEmail(userDoc.data().email); // Fetch email from Firestore
          } else {
            setEmail('No email found.');
          }
        } else {
          setEmail('User not logged in.');
        }
      } catch (error) {
        console.error(error);
        setEmail('Error fetching email.');
      } finally {
        setLoading(false);
      }
    };

    fetchEmail();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.text}>Loading...</Text>
      ) : (
        <Text style={styles.text}>Your Email: {email}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, fontWeight: 'bold' },
});

export default ProfileScreen;