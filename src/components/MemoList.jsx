import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

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
                <TouchableOpacity>
                    <Feather name='x-circle' size ={18} color= '#B0B0B0'/>
                </TouchableOpacity>
            </View>
            <View style={styles.memolistitem}>
                <View>
                    <Text style={styles.memolistitemtitle}>買い物リスト</Text>
                    <Text style={styles.memolistitemdate}>
                        2020/12/24 10:00
                    </Text>
                </View>
                <TouchableOpacity>
                    <Feather name='x-circle' size ={18} color= '#B0B0B0'/>
                </TouchableOpacity>
            </View>
            <View style={styles.memolistitem}>
                <View>
                    <Text style={styles.memolistitemtitle}>買い物リスト</Text>
                    <Text style={styles.memolistitemdate}>
                        2020/12/24 10:00
                    </Text>
                </View>
                <TouchableOpacity>
                    <Feather name='x-circle' size ={18} color= '#B0B0B0'/>
                </TouchableOpacity>
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
