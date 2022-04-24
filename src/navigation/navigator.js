import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TicTacToe from '../screens/TickTacToe';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();
export default Navigation = () => {


    const MyStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="TicTacToe" component={TicTacToe} />

            </Stack.Navigator>
        );
    }



    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}