import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView, FlatList, ActivityIndicator, Image } from 'react-native'
import { Card, Avatar, ButtonGroup, Chip } from 'react-native-elements'

const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const topButtons = ['Programmation', 'Artists']

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
    <View style={styles.container}>

      {isLoading ? <ActivityIndicator /> : (
        <View>
          {/* Top Buttons */}
          <ButtonGroup
            // onPress={this.updateIndex} 
            // selectedIndex={selectedIndex} 
            buttons={topButtons}
            containerStyle={{ height: 40 }} />

          {/* Date chips */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Chip title="Tous" />
            <Chip title="Jeu 25 Août" type="outline" />
            <Chip title="Ven 26 Août" type="outline" />
            <Chip title="Sam 27 Août" type="outline" />
          </View>

          {/* List of artists */}
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.artist_id}
            renderItem={({ item }) => (

              <Card containerStyle={{ marginBottom: -10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Avatar rounded source={{ uri: 'https://i.pravatar.cc/150', }} />
                  <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                    <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{item.artist_name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ marginRight: 20 }}>Scène n°{item.stage_id}</Text>
                      <Text>{item.artist_concert_time}</Text>
                    </View>
                  </View>
                </View>
              </Card>

            )}
          />
        </View>

      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
});

export default HomeScreen
