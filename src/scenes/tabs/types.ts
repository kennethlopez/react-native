import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {RootStackParamList} from "scenes/types";
import {StackNavigationProp} from "@react-navigation/stack";

export interface TabsParams {

}

type TabsScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<RootStackParamList, 'Tabs'>,
    StackNavigationProp<RootStackParamList>
>;

type Props = {
    navigation: TabsScreenNavigationProp;
};

export default Props;