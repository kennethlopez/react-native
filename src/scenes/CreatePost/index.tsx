import React from "react";
import {View, StyleSheet, TextInput} from 'react-native';
// @ts-ignore
import {ViewButton} from "@atoms";
import Props from "scenes/CreatePost/types";
import {Colors, Mixins, Spacing} from "styles";

const CreatePostScreen: React.FC<Props> = ({ navigation }) => {
    const [postText, setPostText] = React.useState('');

    return (
        <View style={styles.container}>
            <TextInput
                multiline
                placeholder="Write a post!"
                style={styles.textInput}
                value={postText}
                onChangeText={setPostText}/>
            <ViewButton disabled={!postText.length} style={styles.button} hook={['Done', () => navigation.navigate('Home', { post: postText })]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        ...Mixins.margin(16, 0, 0, 0)
    },
    textInput: {
        height: 200,
        width: (Mixins.WINDOW_WIDTH - Spacing.SCALE_16 * 2),
        backgroundColor: Colors.WHITE,
        textAlignVertical: "top",
        ...Mixins.padding(Spacing.SCALE_16, Spacing.SCALE_16, Spacing.SCALE_16, Spacing.SCALE_16),
        ...Mixins.boxShadow()
    }
});

export default CreatePostScreen;