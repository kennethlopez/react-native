import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "scenes/types";
import {RouteProp} from "@react-navigation/native";

export interface HomeParams {
    post: string
}

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>

type Props = {
    route: HomeScreenRouteProp;
    navigation: HomeScreenNavigationProp;
};

export default Props;