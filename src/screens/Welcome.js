/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,

    View,
} from 'react-native';

import Header from '../componants/Header'

const Welcome = (props) => {


    const [number, setsnumber] = useState(0);

    return (
        <View style={styles.container}>
            <Header />
            <Text style={{ fontSize: 25, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold' }}>Welcome to the Game {'\n'} Please enter the the Grid size</Text>

            <TextInput keyboardType='number-pad' style={{ fontSize: 34, alignSelf: 'center', color: 'red', fontWeight: 'bold', borderWidth: 1, width: '90%' }}
                onChangeText={(number) => { setsnumber(number) }} />
            <TouchableOpacity style={{ marginTop: 40 }} onPress={() => {
             
                if (number !== '') {
                    props.navigation.navigate('TicTacToe', { number: number })
                }
                else {

                    alert('input shouldn`t be empty ')
                }
            }}>
                <Text style={{ fontSize: 30, textDecorationLine: 'underline', alignSelf: 'center', }}>Enter the Game !</Text>

            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default Welcome;
