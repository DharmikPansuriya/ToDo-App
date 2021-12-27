import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, StatusBar, Dimensions} from 'react-native';
import colors from '../misc/colors';

const Intro = () => {
    const [user, setUser] = useState()
    const handleOnChangeText = (text) => {
        setUser(text);
    };

    return(
        <>
            <StatusBar hidden/>

            <View style={styles.conatiner}>
                <Text style={styles.inputTitle}>Enter Your Name</Text>
                <TextInput 
                    value={user} 
                    onChangeText={handleOnChangeText} 
                    placeholder = "Enter name" 
                    style = {styles.textInput}
                />
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