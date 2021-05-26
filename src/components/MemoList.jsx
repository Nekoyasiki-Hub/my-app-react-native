import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function MemoList() {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
                style={styles.memolistitem}
                onPress={() => {
                    navigation.navigate('MemoDetail');
                }}
            >
                <View>
                    <Text style={styles.memolistitemtitle}>買い物リスト</Text>
                    <Text style={styles.memolistitemdate}>
                        2020/12/24 10:00
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.memoDelete}
                    onPress={() => {
                        Alert.alert('Are you sure?');
                    }}
                >
                    <Feather name="x-circle" size={18} color="#B0B0B0" />
                </TouchableOpacity>
            </TouchableOpacity>
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
    memoDelete: {
        padding: 8,
    },
});
