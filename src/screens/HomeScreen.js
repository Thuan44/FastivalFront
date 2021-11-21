import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import { Card, Avatar, ButtonGroup, Chip } from 'react-native-elements'

const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const topButtons = ['Programmation', 'Artistes']

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
            containerStyle={{ height: 40, marginBottom: 20 }} />

          {/* Date chips */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
            <Chip title="Tous" buttonStyle={{backgroundColor: 'salmon'}} />
            <Chip title="Jeu 25 Août" type="outline" buttonStyle={{borderColor: 'salmon', borderWidth: 1}}  />
            <Chip title="Ven 26 Août" type="outline" buttonStyle={{borderColor: 'salmon', borderWidth: 1}}  />
            <Chip title="Sam 27 Août" type="outline" buttonStyle={{borderColor: 'salmon', borderWidth: 1}}  />
          </View>

          {/* List of artists */}
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.artist_id}
            renderItem={({ item }) => (
              <TouchableOpacity>
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
              </TouchableOpacity>

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
