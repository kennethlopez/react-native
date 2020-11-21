import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import { HelloWorld } from '@atoms';

export default function App() {
    return (
        <View style={styles.container}>
            <HelloWorld name="Sam" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
