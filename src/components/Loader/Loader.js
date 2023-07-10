import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import tw from 'twrnc';

const Loader = () => {
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const startAnimation = () => {
            Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
            ).start();
        };

        startAnimation();
    }, []);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={[tw`w-full h-full flex items-center inset-y-1/3`]}>
            <Animated.View style={[styles.pokeball, , { transform: [{ rotate: spin }] }]}>
                <View style={styles.pokeballButton}></View>
                <View style={styles.pokeballLine}></View>
                <View style={styles.pokeballLowerHalf}></View>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    pokeball: {
        position: 'relative',
        width: 75,
        height: 75,
        borderRadius: 100,
        backgroundColor: '#fff',
        borderWidth: 5,
        borderColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pokeballButton: {
        position: 'relative',
        top: 1,
        margin: 'auto',
        width: 15,
        height: 15,
        backgroundColor: '#000',
        borderRadius: 30,
        zIndex: 2,
    },
    pokeballLine: {
        position: 'absolute',
        top: '47%',
        height: 5,
        width: 75,
        backgroundColor: '#000',
        zIndex: 2,
    },
    pokeballLowerHalf: {
        position: 'absolute',
        top: '50%',
        height: 33,
        width: 67,
        backgroundColor: '#FB1B1B',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
    }
})

export default Loader;
