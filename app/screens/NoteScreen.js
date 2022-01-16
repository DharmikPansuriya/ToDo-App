import { 
    View, 
    Text, 
    StyleSheet,
    StatusBar, 
    Keyboard, 
    TouchableWithoutFeedback, 
    FlatList
    } 
    from 'react-native'
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteInputModal from '../components/NoteInputModal';
import RoundIconBtn from '../components/RoundIconBtn';
import SearchBar from '../components/SearchBar';
import { useNotes } from '../contexts/NoteProvider';
import Note from '../components/Note';
import colors from '../misc/colors';



const NoteScreen = ({user, navigation}) => {
    const [greet, setGreet] = useState('Evening');
    const [modalVisible, setModalVisible] = useState(false);
    const {notes, setNotes} = useNotes();


    const findGreet = () => {
        const hrs = new Date().getHours();
        if(hrs >= 0 && hrs < 12) return setGreet('Morning');
        if(hrs >= 12 && hrs < 17) return setGreet('Afternoon');
        if(hrs >= 17 && hrs <= 23) return setGreet('Evening');
    };

    const handleOnSubmit = async (title, description) => {
        const note = {id: Date.now(), title, description, time: Date.now()};
        const updatedNotes = [...notes, note];
        setNotes(updatedNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    const openNote = (note) => {
        navigation.navigate('NoteDetail', {note})
    }

    useEffect(() => {
        findGreet();
    }, []);

    return ( 
        <>
            <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT} /> 
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.header}>
                        {`Good ${greet} ${user.name}`} 
                    </Text>
                    {notes.length ?
                    <SearchBar containerStyle={{marginVertical:10}}/>
                    : null }
                    <FlatList 
                        data = {notes} 
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => <Note onPress={() => openNote(item)} item={item}/>}                        
                        numColumns={2}
                        columnWrapperStyle={{
                            justifyContent: 'space-between',
                        }}
                    />
                    {!notes.length ?           
                    <View style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}>
                        <Text style={styles.emptyHeader}> Add Notes </Text>
                    </View> : null}
                </View>
            </TouchableWithoutFeedback>
            <RoundIconBtn 
                onPress={() =>setModalVisible(true)} 
                antIconName='plus' 
                style={styles.addBtn}
            />
            <NoteInputModal 
                visible={modalVisible} 
                onClose={() => setModalVisible(false)}
                onSubmit={handleOnSubmit}
            />               
        </>
    );
};

const styles = StyleSheet.create({
    header:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        marginVertical:10,
        zIndex: 1,
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
        zIndex: -1,
    },
    addBtn: {
        position: 'absolute',
        fontSize: 30,
        right: 25,
        bottom: 25,
        zIndex: 1,
    },
});

export default NoteScreen;