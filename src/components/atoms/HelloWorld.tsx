import React from 'react';
import {Text} from 'react-native';

export interface Props {
    name: string
}

const HelloWorld: React.FC<Props> = ({name}) => <Text>Hello World {name}!</Text>;

export default HelloWorld;