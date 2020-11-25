import {StackNavigationProp} from "@react-navigation/stack";
import {TabStackParamList} from "scenes/types";

export interface ModalFullParams {

}

type ModalFullScreenNavigationProp = StackNavigationProp<TabStackParamList, 'ModalFull'>

type Props = {
    navigation: ModalFullScreenNavigationProp;
};

export default Props;