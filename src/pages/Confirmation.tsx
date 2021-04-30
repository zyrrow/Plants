import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation(){

const navigation = useNavigation()
function handleMoveOn(){
navigation.navigate('PlaintSelect')
}

    return(
        <SafeAreaView style={styles.constiner}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😄
                </Text>
                <Text style={styles.title}>
                    Prontinho
                </Text>
                <Text style={styles.subTitle}>
                    Agora vamos cuidar da suas plantinhas com muito cuidado.
                </Text>
                <View style={styles.footer}>
                    <Button title='Começar' onPress={handleMoveOn}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    constiner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    
    title:{
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subTitle:{
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: colors.heading
    },
    emoji:{
        fontSize: 78,
    },
    footer:{
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }
})