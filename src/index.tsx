import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Colors} from "styles";
import CreatePostScreen from "scenes/CreatePost";
import HomeScreen from "scenes/Home";
import DetailsScreen from "scenes/Details";
import TabsScreen from "scenes/Tabs";
import ModalFullScreen from "scenes/ModalFull";

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const stackNavigatorScreenOptions = {
    headerStyle: {
        backgroundColor: Colors.PRIMARY
    },
    headerTintColor: Colors.WHITE
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
            <RootStack.Navigator mode="modal" headerMode="none" initialRouteName="Main">
                <RootStack.Screen name="Main" component={MainStackScreen} />
                <RootStack.Screen name="ModalFull" component={ModalFullScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}