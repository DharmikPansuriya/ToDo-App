import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import colors from '../misc/colors';

const SearchBar = ({containerStyle}) => {
    return (
        <View style = {[styles.container, {...containerStyle}]}>
            <TextInput style={styles.searchBar} placeholder='Search here' />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{},
    searchBar: {
        borderWidth: 0.5,
        borderColor: colors.PRIMARY,
        height: 40,
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 16,
    }
});

export default SearchBar

