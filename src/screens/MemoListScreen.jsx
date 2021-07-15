import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import Button from '../components/Button';

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

    if (Memos.length === 0) {
        return (
            <View style={emptyStyles.container}>
                <View style={emptyStyles.inner}>
                    <Text style={emptyStyles.title}>
                        最初の文字を登録しよう！！
                    </Text>
                    <Button
                        style={emptyStyles.button}
                        label="作成する"
                        onPress={() => {
                            navigation.navigate('MemoCreate');
                        }}
                    />
                </View>
            </View>
        );
    }

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

const emptyStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    },
    inner: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        marginBottom: 24,
    },
    button: {
        alignSelf: 'center',
    },
});
