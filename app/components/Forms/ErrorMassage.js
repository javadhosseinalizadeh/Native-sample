import React from 'react'
import { StyleSheet, Text } from 'react-native'  

const ErrorMassage = ({error, visible}) => {
    if (!error || !visible) {
        return null
    }
    return ( 
        <Text style={styles.error}>
            {error}
        </Text>
     );
}
 
export default ErrorMassage;


const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontFamily: 'ih',
        fontSize: 16
    }
});