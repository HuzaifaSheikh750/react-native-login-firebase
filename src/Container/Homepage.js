import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Touchable,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

// import { useSelector , useDispatch } from 'react-redux';

function Homepage({navigation}) {

  // const state = useSelector(state => state);
  // console.log(state)
  
const logout = async ()=>{
  await AsyncStorage.removeItem('token')
  navigation.navigate('Signin')
}
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home2 Screen</Text>
      
      <TouchableOpacity onPress={logout}>
        <Text>Log Out</Text>
      </TouchableOpacity>

    </View>
  );
}

export default Homepage;