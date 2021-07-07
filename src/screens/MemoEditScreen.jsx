import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';
import { shape, string } from 'prop-types';
import firebase from 'firebase';

export default function MemoEditScreen(props) {
    const { navigation, route } = props;
    const { id, bodyText } = route.params;
    const [Body, setBody] = useState(bodyText);

    const handlePress = () => {
        const { currentUser } = firebase.auth();
        if (currentUser) {
            const db = firebase.firestore();
            const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
            ref.set(
                {
                    bodyText: Body,
                    upDatedAt: new Date(),
                },
                { merge: true }
            )
                .then(() => {
                    navigation.goBack();
                })
                .catch((error) => {
                    Alert.alert(error.code);
                });
        }
    };

    return (
        <KeyboardSafeView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    value={Body}
                    multiline
                    style={styles.input}
                    onChangeText={(text) => {
                        setBody(text);
                    }}
                />
            </View>
            <CircleButton name="check" onPress={handlePress} />
        </KeyboardSafeView>
    );
}

MemoEditScreen.propTypes = {
    route: shape({
        params: shape({ id: string, bodyText: string }),
    }).isRequired,
};

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
