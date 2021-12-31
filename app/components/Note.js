import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import colors from '../misc/colors';

const Note = ({item}) => {
    const {title, description} = item;
    return (
        <View style={styles.container}>
            <Text style={styles.title} numberOfLines={2}>{title}</Text>
            <Text style={styles.description} numberOfLines={3}>{description}</Text>
        </View>
    )
};

const width = Dimensions.get('window').width - 30.5;
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.PRIMARY,
        width:width/2,
        padding: 8,
        borderRadius: 12,
        marginBottom: 11,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.LIGHT,
    },
    description: {

    }
});

export default Note;

