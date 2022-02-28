import React,{ useEffect, useState } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
       <Text style={styles.textstylecenter}>
          Welcome To Application.
       </Text>
      
        <FlatList 
       data={data}
       renderItem={({ item }) => (
              <Text>{item.id + '. ' +item.name + ' | ' + item.username + ' | ' + item.email}</Text>
            )}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor:'#55ff99',
      },
      textstylecenter:{
        textAlign: 'center',
        justifyContent: 'cnter',
  },
});

export default Home;