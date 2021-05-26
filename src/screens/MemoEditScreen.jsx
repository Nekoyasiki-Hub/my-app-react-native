import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoEditScreen(props) {
    const { navigation } = props;
    return (
        <KeyboardSafeView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput value="エディット" multiline style={styles.input} />
            </View>
            <CircleButton
                name="check"
                onPress={() => {
                    navigation.goBack();
                }}
            />
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
