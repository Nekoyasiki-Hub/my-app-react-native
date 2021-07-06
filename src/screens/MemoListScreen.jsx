import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
    const { navigation } = props;
    const [Memos, setMemos] = useState([]);
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <LogOutButton />,
        });
    }, []);

    useEffect(() => {
        const db = firebase.firestore();
        const { currentUser } = firebase.auth();
        let unsubscribe = () => {};
        if (currentUser) {
            const ref = db
                .collection(`users/${currentUser.uid}/memos`)
                .orderBy('upDatedAt', 'desc');
            unsubscribe = ref.onSnapshot(
                (snapshot) => {
                    const userMemos = [];
                    snapshot.forEach((document) => {
                        console.log(document.id, document.data());
                        const data = document.data();
                        userMemos.push({
                            id: document.id,
                            bodyText: data.bodyText,
                            upDatedAt: data.upDatedAt.toDate(),
                        });
                    });
                    setMemos(userMemos);
                },
                (error) => {
                    console.log(error);
                    Alert.alert('データの読み込みに失敗しました！');
                }
            );
        }
        return unsubscribe;
    }, []);

    return (
        <View style={styles.container}>
            <MemoList Memos={Memos} />
            <CircleButton
                name="plus"
                onPress={() => {
                    navigation.navigate('MemoCreate');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
    },
});
