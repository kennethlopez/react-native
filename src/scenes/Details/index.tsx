import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import Props from "scenes/Details/types";
// @ts-ignore
import {ViewButton} from "@atoms/";
import {Mixins, Typography} from "styles";

const DetailsScreen: React.FC<Props> = ({ route, navigation, navigation: {setParams} }) => {
    const { itemId, details } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>details: {JSON.stringify(details)}</Text>
            <ViewButton style={styles.button} hook={['Go to Details... again', () => {
                navigation.navigate('Details', {...route.params})
            }]} />
            <ViewButton style={styles.button} hook={['Stack another Details screen', () => {
                navigation.push('Details', {...route.params})
            }]} />
            <ViewButton style={styles.button} title="Go to home" onPress={() => navigation.navigate('Home')} />
            <ViewButton style={styles.button} hook={['Go back', () => navigation.goBack()]} />
            <ViewButton style={styles.button} hook={['Go back to first screen in stack', () => navigation.popToTop()]} />
            <ViewButton style={styles.button} hook={['Update Params', () => {
                setParams({
                    itemId: Math.floor(Math.random() * 100),
                    details: 'updated sampaul Details'
                })
            }]} />
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
    text: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_16
    },
    button: {
        ...Mixins.margin(8, 0, 0, 0)
    }
});

export default DetailsScreen;