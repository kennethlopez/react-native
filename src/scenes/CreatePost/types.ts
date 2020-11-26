import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "scenes/types";

type CreatePostScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreatePost'>

type Props = {
    navigation: CreatePostScreenNavigationProp;
}

export default Props;