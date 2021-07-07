import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { shape, string, instanceOf, arrayOf } from 'prop-types';

import { useNavigation } from '@react-navigation/native';
import { DatetoString} from '../utils/index.js'


export default function MemoList(props) {
    const { Memos } = props;
    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.memolistitem}
                onPress={() => {
                    navigation.navigate('MemoDetail', { id: item.id });
                }}
            >
                <View>
                    <Text style={styles.memolistitemtitle} numberOfLines={1}>
                        {item.bodyText}
                    </Text>
                    <Text style={styles.memolistitemdate}>
                        {DatetoString(item.upDatedAt)}
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
        );
    };
    return (
        <View>
            <FlatList
                data={Memos}
                renderItem={renderItem}
                keyExtractor={(item) => {
                    return item.id;
                }}
            />
        </View>
    );
}

MemoList.propTypes = {
    Memos: arrayOf(
        shape({
            id: string,
            bodyText: string,
            upDatedAt: instanceOf(Date),
        })
    ).isRequired,
};

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
