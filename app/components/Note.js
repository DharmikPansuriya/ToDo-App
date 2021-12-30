import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Note = ({item}) => {
    const {title, description} = item;
    return (
        <View>
            <Text>{title}</Text>
            <Text>{description}</Text>
        </View>
    );
};

// const styles = StyleSheet.create({})

export default Note;

