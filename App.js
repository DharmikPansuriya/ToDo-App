import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Intro from './app/screens/Intro';
import NoteScreen from './app/screens/NoteScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoteDetail from './app/components/NoteDetail';
import { NavigationContainer } from '@react-navigation/native';
import NoteProvider from './app/contexts/NoteProvider';

const Stack = createNativeStackNavigator();

export default function App() {

  const [user, setUser] = useState({});
  const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false);
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    if(result === null) return setIsAppFirstTimeOpen(true);
    setUser(JSON.parse(result));
    setIsAppFirstTimeOpen(false);
  };

  useEffect(() => {
    findUser();
    AsyncStorage.clear();
  }, []);

  const renderNoteScreen = (props) => <NoteScreen {...props} user={user}/>

  if(isAppFirstTimeOpen) return <Intro onFinish={findUser}/>;
  return  <NavigationContainer> 
            <NoteProvider>
              <Stack.Navigator screenOptions={{headerTitle: '', headerTransparent: true, headerShadowVisible: false}}>
                <Stack.Screen component={renderNoteScreen} name="NoteScreen" />
                <Stack.Screen component={NoteDetail} name="NoteDetail" />
              </Stack.Navigator>
            </NoteProvider>
          </NavigationContainer>    
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
