import React from "react";
import {View, StyleSheet, Text} from 'react-native';
import {WHITE} from "styles/colors";
import Props from "scenes/feed/types";
// @ts-ignore
import {ViewButton} from "@atoms";
import {margin} from "styles/mixins";

const FeedScreen: React.FC<Props> = ({navigation}) => (
    <View style={styles.container}>
        <Text>Feeds</Text>
        <ViewButton style={styles.viewGap} hook={['Open Modal', () => navigation.navigate('ModalFull')]}/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewGap: {
        ...margin(8, 0, 0, 0)
    }
});

export default FeedScreen;