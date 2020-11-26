import React from "react";
import Props from "scenes/Tabs/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from "styles";
import FeedScreen from "scenes/Feed";
import MessagesScreen from "scenes/Messages";

const Tab = createBottomTabNavigator();

const TabsScreen: React.FC<Props> = () => (
    <Tab.Navigator screenOptions={({route }) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName = '';

            switch (route.name) {
                case 'Feed':
                    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                    break;
                case 'Messages':
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                    break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: Colors.PRIMARY,
            inactiveTintColor: Colors.GRAY_DARK,
        }}
    >
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
);

export default TabsScreen;