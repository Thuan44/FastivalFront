import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'

const movieURL = "https://reactnative.dev/movies.json"

const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  // Fetch data
  // useEffect(() => {
  //   fetch('http://10.0.2.2:8000/api/artists', {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then((response) => {return response.json()})
  //   .then((json) => setData(json))
  //   .catch((error) => alert(error))
  //   .then(setLoading(false))
  // })

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

       {isLoading ? (
         <ActivityIndicator />
       ) : (
         <FlatList
          data={data}
          keyAxtractor={({ id }) => id}
          renderItem={({ item }) => {
            return (
              <Text>
                {item.artist_name}
              </Text>
            )
          }}
         >
         </FlatList>
       )

       } 
    </View>
  );
}

export default HomeScreen
