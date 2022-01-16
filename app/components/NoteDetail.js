import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native'
import react, {useState } from 'react';
import { useHeaderHeight } from '@react-navigation/elements';
import colors from '../misc/colors';
import RoundIconBtn from '../components/RoundIconBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotes} from '../contexts/NoteProvider';
import NoteInputModal from './NoteInputModal';

const formatDate = (ms) => {
    const date = new Date(ms);
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    const hrs = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`
}

const NoteDetail = (props) => {
    // const {note} = (props.route.params);
    const [note, setNote] = useState(props.route.params.note)
    const headerHeight = useHeaderHeight();
    const {setNotes} = useNotes();
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const deleteNote = async() => {
        const result = await AsyncStorage.getItem('notes');
        let notes = [];
        if(result != null) notes = JSON.parse(result);
        const newNotes = notes.filter(n => n.id !== note.id);
        setNotes(newNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
        props.navigation.goBack();
    };

    const displayDeleteAlert = () => {
        Alert.alert('Are you sure?', 'This action will delete your note permanently!',
        [
            {
                text: 'Delete',
                onPress: deleteNote,
            },
            {
                text: 'No Thanks!',
                onPress: () => console.log("No"),
            },
        ], 
        {
            cancelable: true,
        }
        );
    };

    const handleUpdate = async(title, description, time) => {
        const result = await AsyncStorage.getItem('notes');
        let notes = [];
        if(result !== null) notes = JSON.parse(result);

        const newNotes = notes.filter(n => {
            if(n.id === note.id){
                n.title = title;
                n.description = description;
                n.isUpdated = true;
                n.time = time;

                setNote(n)
            }
            return n;
        })
        setNotes(newNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
    };
    const handleOnClose = () => setShowModal(false)

    const openEditModal = () => {
        setIsEdit(true)
        setShowModal(true)
    }

    return (
        <>
        <ScrollView contentContainerStyle={[styles.conatiner,{paddingTop: headerHeight}]} >
            <Text style={styles.time}>{ note.isUpdated ? `Updated At ${formatDate(note.time)}` : `Created At ${formatDate(note.time)}`}</Text>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.description}>{note.description}</Text>       
        </ScrollView>
        <View style={styles.btnContainer}>
            <RoundIconBtn
                antIconName='delete' 
                style={{backgroundColor: colors.ERROR, marginBottom: 15}}
                onPress={displayDeleteAlert}
            />
            <RoundIconBtn
                antIconName='edit' style={{backgroundColor: colors.PRIMARY}}
                onPress={openEditModal}
            />
        </View>
        <NoteInputModal 
            isEdit={isEdit}
            note={note}
            onClose={handleOnClose}
            onSubmit={handleUpdate}
            visible={showModal}
        />
        </>
    );

};

const styles = StyleSheet.create({
    conatiner: {
        // flex: 1,
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.PRIMARY,
    },
    description: {
        fontSize: 20,
        opacity: 0.6,
    },
    time:{
        textAlign: 'right',
        fontSize: 14,
        opacity: 0.4,
    },
    btnContainer:{
        position: 'absolute',
        right: 25,
        bottom: 25,
    }
})

export default NoteDetail;

