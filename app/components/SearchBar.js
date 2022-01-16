import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import colors from '../misc/colors';

const SearchBar = ({containerStyle, value, onClear, onChangeText}) => {
    return (
        <View style = {[styles.container, {...containerStyle}]}>
            <TextInput 
                value={value} 
                onChangeText={onChangeText}
                style={styles.searchBar} 
                placeholder='Search here' />
                {value ? 
                    (<AntDesign 
                        name='close' size={20} 
                        color={colors.PRIMARY} 
                        onPress={onClear}
                        style={styles.clearIcon}
                />) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center'
    },
    searchBar: {
        borderWidth: 0.5,
        borderColor: colors.PRIMARY,
        height: 40,
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 16,
    },
    clearIcon: {
        position: 'absolute',
        right: 10,
    }
});

export default SearchBar

