import { ScrollView, StyleSheet, Text, View } from 'react-native'
import react from 'react';
import { useHeaderHeight } from '@react-navigation/elements';
import colors from '../misc/colors';

const NoteDetail = (props) => {
    const {note} = (props.route.params);
    const headerHeight = useHeaderHeight();
    const formateDate = (time) => {
        return '10:00';
    }
    return (
        <ScrollView contentContainerStyle={[styles.conatiner,{paddingTop: headerHeight}]} >
            <Text>{`Created At ${formateDate(note.time)}`}</Text>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.description}>{note.description}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
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
    }
})

export default NoteDetail

