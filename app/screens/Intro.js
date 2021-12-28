import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, StatusBar, Dimensions} from 'react-native';
import colors from '../misc/colors';
import RoundIconBtn from '../components/RoundIconBtn';

const Intro = () => {
    const [name, setName] = useState('');
    const handleOnChangeText = (text) => {
        setName(text);
    };
    const handleSubmit = async () =>{
        const user = {name : name};
        await AsyncStorage.setItem('user', JSON.stringify(user));
    }

    return(
        <>
            <StatusBar hidden/>
            
            <View style={styles.conatiner}>
                <Text style={styles.inputTitle}>Enter Your Name</Text>
                <TextInput 
                    value={name} 
                    onChangeText={handleOnChangeText} 
                    placeholder = "Enter name" 
                    style = {styles.textInput}
                />
                
                {name.trim().length >= 2 ? ( 
                    <RoundIconBtn antIconName='arrowright' onPress={handleSubmit}/>
                ) : null}
            </View>
        </>
    );
};

const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        color: colors.PRIMARY,
        width,
        height: 50,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize:15,
        marginBottom: 15,
    },
    inputTitle: {
        alignSelf: 'flex-start',
        paddingLeft: 35,
        marginBottom: 5,
        opacity: 0.5,
        color: colors.DARK,
    }
});

export default Intro;