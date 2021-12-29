import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, TextInput, View, Modal, StatusBar, Keyboard } from 'react-native'
import RoundIconBtn from '../components/RoundIconBtn';
import colors from '../misc/colors';

const NoteInputModal = ({visible}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleOnChangeText = (text, valueFor) => {
        if(valueFor === 'title') setTitle(text);
        if(valueFor === 'description') setDescription(text);
    };

    const handleModalClose = () =>{
        Keyboard.dismiss();
    };

    console.log(title, description);
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT}/> 
            <Modal visible={visible} animationType='fade'>
                <View style={styles.container}>
                    <TextInput 
                        style={[styles.input, styles.title]} 
                        value={title}
                        placeholder='Title'
                        onChangeText={(text) => handleOnChangeText(text, 'title')}
                    />
                    <TextInput 
                        style={[styles.input, styles.description]} 
                        value={description}
                        placeholder='Note' 
                        multiline
                        onChangeText={(text) => handleOnChangeText(text, 'description')}
                    />
                    <RoundIconBtn antIconName='check'/>
                </View>
                <TouchableWithoutFeedback onPress = {handleModalClose} >
                    <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
                </TouchableWithoutFeedback>
            </Modal>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        // flex: 1,
    },
    input: {
        borderBottomColor: colors.PRIMARY,
        borderBottomWidth: 2,
        fontSize: 20,
        color: colors.DARK,
    },
    title: {
        height: 40,
        marginVertical: 15,
        fontWeight: 'bold',
    },
    description: {
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        height: 300,
        textAlignVertical: 'top',
        opacity: 0.5,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    modalBG: {
        flex:1,
        zIndex: -1,
    }

});

export default NoteInputModal;

