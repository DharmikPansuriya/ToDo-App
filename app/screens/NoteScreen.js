import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native'
import NoteInputModal from '../components/NoteInputModal';
import RoundIconBtn from '../components/RoundIconBtn';
import SearchBar from '../components/SearchBar';
import colors from '../misc/colors';

const NoteScreen = ({user}) => {
    const [greet, setGreet] = useState('Evening');
    const findGreet = () => {
        const hrs = new Date().getHours();
        if(hrs >= 0 && hrs < 12) return setGreet('Morning');
        if(hrs >= 12 && hrs < 17) return setGreet('Afternoon');
        if(hrs >= 17 && hrs <= 23) return setGreet('Evening');
    };

    useEffect(() => {
        findGreet()
    }, []);

    return ( 
        <>
            <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT} /> 
            <View style={styles.container}>
                <Text style={styles.header}>{`Good ${greet} ${user.name}`} </Text>
                <SearchBar containerStyle={{marginVertical:10}}/>
                <View style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
                    <Text style={styles.emptyHeader} >Add Notes</Text>
                    <RoundIconBtn onPress={() =>console.log("opening ok")} antIconName='plus' style={styles.addBtn}/>
                </View>
            </View>
            <NoteInputModal visible={true}/>
        </>
    );
};

const styles = StyleSheet.create({
    header:{
        fontSize: 22,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        marginVertical:10,
    },
    emptyHeader: {
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        opacity: 0.2,
    },
    emptyHeaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // zIndex: -1,
    },
    addBtn: {
        position: 'absolute',
        fontSize: 30,
        right: 30,
        bottom: 10,
    }
});

export default NoteScreen;