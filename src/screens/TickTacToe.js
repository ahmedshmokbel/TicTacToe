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
    TouchableOpacity,

    View,
} from 'react-native';

import Header from '../componants/Header'

const { width, } = Dimensions.get('window');

const TicTacToe = (props) => {
    const [n, setnumber] = useState(parseInt(props.route.params.number));
    const [Grid, setGrid] = useState(new Array(n).fill(0).map(() => new Array(n).fill(0)));
    const [currentPlayer, setcurrentPlayer] = useState(1);
    const [state, setstate] = useState('');



    const DrawBoard = () => {
        var Horizontal = []
        for (let i = 0; i < n; i++) {
           
            Horizontal.push(
                <View key={i} style={{ flexDirection: 'row', width: width, height: width / n, }} >
                    {DrawElements(i)}
                </View>
            )
        }
        return Horizontal
    }



    const PlayGame = (rowNumber, i) => {

        if (state === '') {

            if (Grid[rowNumber][i] !== 0) {
                alert('you can`t play here again !')
                return
            }
            Grid[rowNumber][i] = currentPlayer % 2 == 1 ? 1 : -1

            setGrid([...Grid])
         
            setcurrentPlayer(currentPlayer + 1)

            var game = WinGame()

            if ((game !== n || game !== n) && currentPlayer > (n * n - 1)) {
                setstate('Draw')
            }
 
        }
        else {
            return
        }
    }
    const WinGame = () => {

        var diagonal = 0
        var revDiagonal = 0
        for (var i = 0; i < n; i++) {
            var rowSum = 0;
            var columnSum = 0
            for (var j = 0; j < n; j++) {
                rowSum = rowSum + Grid[i][j];
                columnSum = columnSum + Grid[j][i]
            }

            diagonal = diagonal + Grid[i][i]
            revDiagonal = revDiagonal + Grid[i][n - i - 1]

            if (rowSum === n || columnSum === n || diagonal === n || revDiagonal === n) {
                setstate("X WINS!");

                return n
            }
            else if (rowSum === -n || columnSum === -n || diagonal === -n || revDiagonal === -n) {
                setstate("O WINS!");

                return -n
            }

        }



    }
    const DrawElements = (rowNumber) => {

        var Vert = []

        for (let i = 0; i < n; i++) {
            Vert.push(
                <TouchableOpacity key={i} onPress={() => PlayGame(rowNumber, i)} style={{ borderWidth: 1, borderColor: 'black', width: width / n, height: width / n }}>
                    <Text style={{ fontSize: 100, alignSelf: 'center', }}>
                        {Grid[rowNumber][i] == 1 ? 'X' : Grid[rowNumber][i] == -1 ? 'O' : ''}
                    </Text>
                </TouchableOpacity>)
        }
        return Vert
    }








    return (
        <View style={styles.container}>
            <Header />

            <View style={{ alignSelf: 'center', top: 50 }}>

                <Text style={{ fontSize: 25, alignSelf: 'center', }}>

                    <Text style={{ fontSize: 34, alignSelf: 'center', color: 'red', fontWeight: 'bold' }}>
                        {currentPlayer % 2 === 1 ? 'X' : 'O'}{'\t'}

                    </Text >'s turn</Text>

            </View>
            <View style={{ alignItems: 'center', marginTop: 100 }}>
                <DrawBoard />
            </View>

            <View style={{ marginTop: 40 }}>
                <Text style={{ fontSize: 30, alignSelf: 'center', color: 'red', fontWeight: 'bold' }}>
                    {state}
                </Text>
                <TouchableOpacity style={{ marginTop: 40 }} onPress={() => {
                    setGrid(new Array(n).fill(0).map(() => new Array(n).fill(0)))
                    setcurrentPlayer(1)
                    setstate('')
                }}>
                    <Text style={{ fontSize: 30, textDecorationLine: 'underline', alignSelf: 'center', }}>Reset Game !</Text>

                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default TicTacToe;
