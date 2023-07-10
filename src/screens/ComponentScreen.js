import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentScreen = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter( counter => counter + 1);
          }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleRenderCounter = () => {
        return (0 == counter % 2) ?
            <Text style={styles.textCounterUneven}>{counter}</Text> :
            <Text style={styles.textCounterEven}>{counter}</Text>
    }

    return <>
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.textOne}>First text box is purple !</Text>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.textTwo}>Second one is blue ?!</Text>
            </View>
            <View style={styles.wrapper}>
                {handleRenderCounter()}
            </View>
        </View>
    </>
    
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    wrapper: {
        width: '45%',
        borderRadius: '25%',
        margin: 'auto',
    },
    textOne: {
        fontSize: 30,
        color: 'purple',
    },
    textTwo: {
        fontSize: 25,
        color: 'blue',
    },
    textCounterUneven: {
        fontSize: 50,
        color: 'red',
    },
    textCounterEven: {
        fontSize: 50,
        color: 'green',
        marginLeft: '50%'
    },
});


export default ComponentScreen;