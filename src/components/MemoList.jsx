import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MemoList() {
    return (
        <View>
            <View style={styles.memolistitem}>
                <View>
                    <Text style={styles.memolistitemtitle}>買い物リスト</Text>
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
                    <Text style={styles.memolistitemtitle}>買い物リスト</Text>
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
                    <Text style={styles.memolistitemtitle}>買い物リスト</Text>
                    <Text style={styles.memolistitemdate}>
                        2020/12/24 10:00
                    </Text>
                </View>
                <View>
                    <Text>X</Text>
                </View>
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
});
