import React from "react";
import Props from "scenes/modal-full/types";
import {StyleSheet, View, Text} from "react-native";
import {WHITE} from "styles/colors";
// @ts-ignore
import {ViewButton} from "@atoms";
import {margin, scaleSize} from "styles/mixins";

const ModalFullScreen: React.FC<Props> = ({navigation}) => (
    <View style={styles.container}>
        <Text style={styles.text}>This is a modal!</Text>
        <ViewButton style={styles.viewGap} hook={['Dismiss', () => navigation.goBack()]}/>
        <ViewButton style={styles.viewGap} hook={['Go to Messages', () => navigation.navigate('Messages')]}/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: scaleSize(30)
    },
    viewGap: {
        ...margin(8, 0, 0, 0)
    }
});

export default ModalFullScreen;