import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import Props from "scenes/Messages/types";
import {Colors} from "styles";

const MessagesScreen: React.FC<Props> = () => (
    <View style={styles.container}>
        <Text>Messages</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default MessagesScreen;