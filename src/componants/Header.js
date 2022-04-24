import React from 'react';
import {
    View,
    StyleSheet,

    Text,
    
} from 'react-native';



const Header = (props) => {


    return (
        <View style={[styles.container]}>

            <View style={styles.titlecontainer}>
                <Text
                    style={[styles.title,]}
                    numberOfLines={1}>
                    Tic Tac Toe
                </Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'brown',
        justifyContent: 'center',
    },
    titlecontainer: {
        height: 50,
        width:'100%',
        alignContent: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'center',
       
    },



});
export default (Header)