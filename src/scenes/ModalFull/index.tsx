import React from "react";
import Props from "scenes/ModalFull/types";
import {StyleSheet, View, Text} from "react-native";
// @ts-ignore
import {ViewButton} from "@atoms";
import {Colors, Mixins} from "styles";

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
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: Mixins.scaleSize(30)
    },
    viewGap: {
        ...Mixins.margin(8, 0, 0, 0)
    }
});

export default ModalFullScreen;