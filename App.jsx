// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.appbar}>
                <View style={styles.appbarinner}>
                    <Text style={styles.appbartitle}>Memo App</Text>
                    <Text style={styles.appbarright}>ログアウト</Text>
                </View>
            </View>
            <View>
                <View style={styles.memolistitem}>
                    <View>
                        <Text style={styles.memolistitemtitle}>
                            買い物リスト
                        </Text>
                        <Text style={styles.memolistitemdate}>
                            2020/12/24 10:00
                        </Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
                <View style={styles.memolistitem}>
                    <View>
                        <Text style={styles.memolistitemtitle}>
                            買い物リスト
                        </Text>
                        <Text style={styles.memolistitemdate}>
                            2020/12/24 10:00
                        </Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
                <View style={styles.memolistitem}>
                    <View>
                        <Text style={styles.memolistitemtitle}>
                            買い物リスト
                        </Text>
                        <Text style={styles.memolistitemdate}>
                            2020/12/24 10:00
                        </Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
            </View>
            <View style={styles.circleButton}>
                <Text style={styles.circleButtonLabel}>+</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
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
    memolistitem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.15)',
    },
    memolistitemtitle: {
        fontSize: 16,
        lineHeight: 32,
    },
    memolistitemdate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484',
    },
    circleButton: {
        backgroundColor: '#467FD3',
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
    circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 40,
    },
});
