import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen(props) {
    const [BodyText, setBodyText] = useState('');
    const { navigation } = props;
    const handlePress = () => {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        const ref = db.collection(`users/${currentUser.uid}/memos`);
        ref.add({
            bodyText: BodyText,
            upDatedAt: new Date()
        })
            .then((docRef) => {
                console.log('Created', docRef.id);
                navigation.goBack();
            })
            .catch((error) => {
                console.log('Error!!', error);
            });
    };
    return (
        <KeyboardSafeView style={styles.container} behavior="height">
            <View style={styles.inputContainer}>
                <TextInput
                    value={BodyText}
                    multiline
                    style={styles.input}
                    onChangeText={(text) => {
                        setBodyText(text);
                    }}
                    autoFocus = {true}
                />
            </View>
            <CircleButton name="check" onPress={handlePress} />
        </KeyboardSafeView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        paddingHorizontal: 27,
        paddingVertical: 32,
        flex: 1,
    },
    input: {
        fontSize: 16,
        lineHeight: 24,
        flex: 1,
        textAlignVertical: 'top',
    },
});
