import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native'
import colors from '../misc/colors';

const NoteScreen = ({user}) => {
    const [greet, setGreet] = useState('Evening')
    return ( 
        <>
            <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT} /> 
            <View style={styles.container}>
                <Text>{`Good ${greet} ${user.name}`} </Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container:{},
});

export default NoteScreen;