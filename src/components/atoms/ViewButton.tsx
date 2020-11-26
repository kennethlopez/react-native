import React from "react";
import {View, Button, ButtonProps, ViewStyle, NativeSyntheticEvent, NativeTouchEvent} from 'react-native';

export interface Props extends ButtonProps {
    hook?: [
        string,
        (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
    ]
    style?: ViewStyle;
}

const ViewButton: React.FC<Props> = (props) => {
    const style = props.style;
    let title: string;
    let action: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
    if (props.hook) {
        [title, action] = props.hook;
    } else {
        title = props.title;
        action = props.onPress;
    }
    return (
        <View style={style}>
            <Button {...props} title={title} onPress={action} />
        </View>
    );
};

export default ViewButton;