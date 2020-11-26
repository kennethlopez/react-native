import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "scenes/types";

export interface DetailsParams {
    itemId: number,
    details: string
}

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>

type Props = {
    route: DetailsScreenRouteProp;
    navigation: DetailsScreenNavigationProp;
};

export default Props;