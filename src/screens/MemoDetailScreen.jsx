import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CircleButton from '../components/CircleButton';
import { shape, string } from 'prop-types';
import firebase from 'firebase';
import { DatetoString} from '../utils/index.js'

export default function MemoDetailScreen(props) {
    const { navigation, route } = props;
    const { id } = route.params;
    const [Memo, setMemo] = useState(null);
    let unsubscrive = () => {};
    useEffect(() => {
        const { currentUser } = firebase.auth();
        if(currentUser){
            const db = firebase.firestore();
            const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
            unsubscrive = ref.onSnapshot((document) => {
                console.log(document.id, document.data());
                const data = document.data();
                setMemo({
                    id: document.id,
                    bodyText: data.bodyText,
                    upDatedAt: data.upDatedAt.toDate(),
                });
            });
        }
        return unsubscrive
    },[]);

    return (
        <View style={styles.container}>
            <View style={styles.MemoHeader}>
                <Text style={styles.MemoTitle} numberOfLines = {1}>{Memo && Memo.bodyText}</Text>
                <Text style={styles.MemoDate}>{Memo && DatetoString(Memo.upDatedAt)}</Text>
            </View>
            <ScrollView style={styles.MemoBody}>
                <Text style={styles.MemoText}>{Memo && Memo.bodyText}</Text>
            </ScrollView>
            <CircleButton
                style={{ top: 60, bottom: 'auto' }}
                name="edit"
                onPress={() => {
                    navigation.navigate('MemoEdit');
                }}
            />
        </View>
    );
}
MemoDetailScreen.propTypes = {
    route: shape({
        params: shape({ id: string }),
    }).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    MemoHeader: {
        backgroundColor: 'gray',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    MemoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    MemoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16,
    },
    MemoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    MemoText: {
        fontSize: 16,
        lineHeight: 24,
    },
});
