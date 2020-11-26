import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import Props from "scenes/Feed/types";
// @ts-ignore
import {ViewButton} from "@atoms";
import {Colors, Mixins} from "styles";

const FeedScreen: React.FC<Props> = ({navigation}) => (
    <View style={styles.container}>
        <Text>Feeds</Text>
        <ViewButton style={styles.viewGap} hook={['Open Modal', () => navigation.navigate('ModalFull')]}/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewGap: {
        ...Mixins.margin(8, 0, 0, 0)
    }
});

export default FeedScreen;