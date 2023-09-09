import React from 'react'
import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native'
import ButtonComponent from '../../Shared/ButtonComponent/ButtunComponent';

const WelcomeScreen = ({navigation}) => {
    return ( 
        <ImageBackground
            source={require('../assets/bg1.jpg')}
            style={styles.background}
            blurRadius={3}
            >
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.firstText}>
                    کسب تجربه و ورود به بازار کار
                </Text>
            </View>
            <View style={styles.ButtunContainer}>
                <ButtonComponent 
                title='ورود' 
                color='royalblue' 
                onPress={()=> navigation.navigate('Login')}
                
                />
                <ButtonComponent title='ثبت نام'  onPress={()=> navigation.navigate('Register')}/>
            </View>
        </ImageBackground>
     );
}
 
export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    ButtunContainer: {
        width: '100%',
        padding: 50,
        
    },
    logo: {
        width: 260,
        height: 190
    },
    logoContainer: {
        position: 'absolute',
        top: 60,
        alignItems: 'center'
    },
    firstText: {
        fontFamily: 'ih',
        fontSize: 20,
        top: 25,
        color: 'tomato'
    }
});