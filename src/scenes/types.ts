import {DetailsParams} from "scenes/Details/types";
import {HomeParams} from "scenes/Home/types";
import {TabsParams} from "scenes/Tabs/types";
import {FeedParams} from "scenes/Feed/types";

export type RootStackParamList = {
    Home: HomeParams | undefined,
    Details: DetailsParams,
    CreatePost: undefined,
    Tabs: TabsParams | undefined,
}

export type TabStackParamList = {
    Feed: FeedParams | undefined,
    Messages: undefined,
    ModalFull: undefined
};