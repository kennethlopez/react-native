import React from "react";
import {View, StyleSheet, TextInput} from 'react-native';
import {boxShadow, margin, padding, WINDOW_WIDTH} from "styles/mixins";
import {WHITE} from "styles/colors";
// @ts-ignore
import {ViewButton} from "@atoms";
import Props from "scenes/create-post/types";
import {SCALE_16} from "styles/spacing";

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
            <ViewButton style={styles.button} hook={['Done', () => navigation.navigate('Home', { post: postText })]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        ...margin(16, 0, 0, 0)
    },
    textInput: {
        height: 200,
        width: (WINDOW_WIDTH - SCALE_16 * 2),
        backgroundColor: WHITE,
        textAlignVertical: "top",
        ...padding(SCALE_16, SCALE_16, SCALE_16, SCALE_16),
        ...boxShadow()
    }
});

export default CreatePostScreen;