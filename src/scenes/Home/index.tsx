import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import Props from "scenes/Home/types";
// @ts-ignore
import {ViewButton} from "@atoms";
import {Mixins, Typography} from "styles";

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
                // Navigate to Details route with params
                navigation.navigate('Details', {
                    itemId: Math.floor(Math.random() * 100),
                    details: 'sampaul Details'
                });
            }]} />
            <ViewButton style={styles.viewGap} hook={['Go to Tabs', () => navigation.navigate('Tabs')]}/>
            <ViewButton
                style={styles.viewGap}
                hook={['Go to Tabs Messages', () => navigation.navigate('Tabs', {screen: 'Messages'})]}
            />
            {/*<ViewButton style={styles.viewGap} hook={['Create post', () => navigation.navigate('CreatePost')]}/>*/}
            <ViewButton style={styles.viewGap} title='Create post' onPress={() => navigation.navigate('CreatePost')}/>
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
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_16
    },
    viewGap: {
        ...Mixins.margin(8, 0, 0, 0)
    }
});

export default HomeScreen;