import React from 'react'  
import {  Text, View, StyleSheet,Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import Screen from '../../Shared/Screen';
import Icon from '../../Shared/icon';
import ItemSeparator from '../../Shared/ItemSeparator';
const AccountScreen = () => {
    return ( 
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    source={require('../assets/logo.png')}
                />
                <View style={styles.detailes}>
                    <Text  style={styles.title}>جواد علیزاده</Text>
                    <Text  style={styles.subTitle}>javad@gmail.com</Text>
                </View>
                <TouchableOpacity
                onPress={''}
                style={{
                    alignSelf: 'center',
                    marginLeft: 20
                }} >
                    <Icon
                    name='setting'
                    backgroundColor='tomato'
                    />
                </TouchableOpacity>
            </View>
            <ItemSeparator height={5}/>
            <TouchableHighlight
            underlayColor='#f8f4f4'
            onPress={()=>{}}>
                <View style={styles.container}>
                    <Icon
                    name='logout'
                    backgroundColor='tomato'
                    />
                    <View style={styles.details}>
                        <Text style={styles.title}>خروج</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </Screen>
     );
}
 
export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 20,
        padding: 15
    },
    screen: {
        backgroundColor: '#f8f4f4'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 40,
    },
    detailes: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'ih',
        fontSize: 20,
    },
    subTitle: {
        color: '#6e6969'
    }
}); 