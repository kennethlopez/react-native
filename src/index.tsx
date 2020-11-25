import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "scenes/home";
import DetailsScreen from "scenes/details";
import CreatePostScreen from "scenes/create-post";
import {PRIMARY} from "styles/colors";
import TabsScreen from "scenes/tabs";
import ModalFullScreen from "scenes/modal-full";

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const stackNavigatorScreenOptions = {
    headerStyle: {
        backgroundColor: PRIMARY
    },
    headerTintColor: '#fff'
}

const MainStackScreen = () => (
    <Stack.Navigator initialRouteName="Home" screenOptions={stackNavigatorScreenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home title'}}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen name="Tabs" component={TabsScreen} />
    </Stack.Navigator>
);

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal" headerMode="none">
                <RootStack.Screen name="Main" component={MainStackScreen} />
                <RootStack.Screen name="ModalFull" component={ModalFullScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}