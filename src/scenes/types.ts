import {DetailsParams} from "scenes/details/types";
import {HomeParams} from "scenes/home/types";
import {TabsParams} from "scenes/tabs/types";
import {FeedParams} from "scenes/feed/types";

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