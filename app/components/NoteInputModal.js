import React from 'react'
import { StyleSheet, Text, View, Modal, StatusBar } from 'react-native'
import colors from '../misc/colors';

const NoteInputModal = ({visible}) => {
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT}/> 
            <Modal visible={visible} animationType='fade'>
                <Text>Modal</Text>
                <Text>Description</Text>
            </Modal>
        </>
    )
};

const styles = StyleSheet.create({
    
});

export default NoteInputModal;

