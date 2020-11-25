import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {FONT_BOLD, FONT_SIZE_16} from "styles/typography";
import Props from "scenes/home/types";
import {margin} from "styles/mixins";
// @ts-ignore
import {ViewButton} from "@atoms";

const HomeScreen: React.FC<Props> = ({ route, navigation }) => {
    React.useEffect(() => {
        if (route.params?.post) {
            console.log('post from create post screen: ', route.params.post)
        }
    }, [route.params?.post]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <ViewButton style={styles.viewGap} hook={['Go to Details', () => {
                // Navigate to details route with params
                navigation.navigate('Details', {
                    itemId: Math.floor(Math.random() * 100),
                    details: 'sampaul details'
                });
            }]} />
            <ViewButton style={styles.viewGap} hook={['Go to Tabs', () => navigation.navigate('Tabs')]}/>
            <ViewButton
                style={styles.viewGap}
                hook={['Go to Tabs Messages', () => navigation.navigate('Tabs', {screen: 'Messages'})]}
            />
            <ViewButton style={styles.viewGap} hook={['Create post', () => navigation.navigate('CreatePost')]}/>
            { route.params?.post ? (<Text style={styles.viewGap}>From CreatePostScreen: {route.params.post}</Text>) : null }
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
        ...FONT_BOLD,
        fontSize: FONT_SIZE_16
    },
    viewGap: {
        ...margin(8, 0, 0, 0)
    }
});

export default HomeScreen;