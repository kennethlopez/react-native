import React from "react";
import Props from "scenes/tabs/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "scenes/feed";
import MessagesScreen from "scenes/messages";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GRAY_DARK, PRIMARY} from "styles/colors";

const Tab = createBottomTabNavigator();

const TabsScreen: React.FC<Props> = () => (
    <Tab.Navigator screenOptions={({route }) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName = '';

            if (route.name === 'Feed') {
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                // iconName = focused ? 'ios-bar-chart' : 'ios-bar-chart-outline';
            } else if (route.name === 'Messages') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: PRIMARY,
            inactiveTintColor: GRAY_DARK,
        }}
    >
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
);

export default TabsScreen;