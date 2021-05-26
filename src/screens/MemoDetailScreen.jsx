import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props) {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            <View style={styles.MemoHeader}>
                <Text style={styles.MemoTitle}>買い物リスト</Text>
                <Text style={styles.MemoDate}>2020/12/24 10:00</Text>
            </View>
            <ScrollView style={styles.MemoBody}>
                <Text style={styles.MemoText}>
                    買い物リスト
                    ポテチポテチポテチポテチポテチポテチポテチポテチポテチポテチポテチポテチ
                </Text>
            </ScrollView>
            <CircleButton 
                style={{ top: 60, bottom: 'auto' }} 
                name="edit" 
                onPress = {() => { navigation.navigate('MemoEdit')}}/>
        </View>
    );ddddddd
}

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
