import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'

const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Fetch data method
  const getArtists = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8000/api/artists');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={(item,  index) =>  item.artist_id}
          renderItem={({ item }) => (
            <Text>{item.artist_name}, {item.artist_description}</Text>
          )}
        />
      )}
    </View>
  );
}

export default HomeScreen
