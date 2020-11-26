import {StackNavigationProp} from "@react-navigation/stack";
import {TabStackParamList} from "scenes/types";

export interface FeedParams {
    
} 

type FeedScreenNavigationProp = StackNavigationProp<TabStackParamList, 'Feed'>

type Props = {
    navigation: FeedScreenNavigationProp;
};

export default Props;