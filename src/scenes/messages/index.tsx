import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import {WHITE} from "styles/colors";
import Props from "scenes/messages/types";

const MessagesScreen: React.FC<Props> = () => (
    <View style={styles.container}>
        <Text>Messages</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default MessagesScreen;