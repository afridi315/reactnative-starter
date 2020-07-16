import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const greetings = 'Hi there!';
    const greeting2 = <Text>This is another greeting!</Text>

    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen!</Text>
            <Text>{ greetings }</Text>
            { greeting2 }
        </View>
    ); 
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        margin: 16,
        textAlign: "center",
    }
})

export default ComponentsScreen;