import { StyleSheet, Text, View } from 'react-native'
import react from 'react';
import { useHeaderHeight } from '@react-navigation/elements';

const NoteDetail = (props) => {
    const {note} = (props.route.params);
    const headerHeight = useHeaderHeight();
    return (
        <View style={styles.conatiner,{paddingTop: headerHeight} } >
            <Text>{note.title}</Text>
            <Text>{note.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({})

export default NoteDetail

