import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
    return (
        <View style={styles.appbar}>
            <View style={styles.appbarinner}>
                <Text style={styles.appbartitle}>Memo App</Text>
                <Text style={styles.appbarright}>ログアウト</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appbar: {
        width: '100%',
        height: 104,
        backgroundColor: '#467FD3',
        justifyContent: 'flex-end',
    },
    appbarinner: {
        alignItems: 'center',
    },
    appbarright: {
        position: 'absolute',
        right: 19,
        bottom: 16,
        color: 'rgba(255,255,255,0.8)',
    },
    appbartitle: {
        marginBottom: 8,
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 32,
        color: '#ffffff',
    },
})