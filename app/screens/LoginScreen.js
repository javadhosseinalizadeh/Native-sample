import React , {Fragment} from 'react'
import { View, StyleSheet, TextInput, Image } from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import Constants from 'expo-constants'
import ButtonComponent from '../components/ButtonComponent/ButtunComponent'
import {Formik} from 'formik'


const LoginScreen = () => {

    // const [email , setEmail] = useState()
    // const [password , setpassword] = useState()


    return ( 
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={val => console.log(val)}
        >
            {({handleChange, handleSubmit})=> (
                <Fragment>
            <View style={{flexDirection: 'row'}}>
            <TextInput
            
                placeholder='ایمیل کاربری'
                autoCompleteType='email'
                autoCorrect={false}
                keyboardType='email-address'
                style={styles.textInput}
                placeholderTextColor='royalblue'
                // onChangeText={text => setEmail(text)}
                 onChangeText={handleChange('email')}
            />
            <MaterialCommunityIcons
            
                name='email'
                size={30}
                color='dodgerblue'
                style={styles.icon}
            />
        </View>
        <View style={{flexDirection: 'row'}}>
            <TextInput
            
                placeholder='کلمه عبور'
                autoCompleteType='password'
                autoCorrect={false}
                style={styles.textInput}
                placeholderTextColor='royalblue'
                secureTextEntry
               // onChangeText={password => setpassword(password)}
                onChangeText={handleChange('password')}
            />
            <MaterialCommunityIcons
            
                name='onepassword'
                size={30}
                color='dodgerblue'
                style={styles.icon}
            />
        </View>
        <View style={{width:'60%'}}>
            <ButtonComponent 
                title='ورود'
                onPress={handleSubmit}
                                
            />
        </View>
            </Fragment>
            )}
         
        </Formik>
       
    </View>
     );
}
 
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: Constants.statusBarHeight,
        alignItems: 'center'
    },
    logo: {
        width: 270,
        height: 200,
        marginTop: 20,
        marginBottom: 40,
    },
    textInput: {
        width: '80%',
        height: 50,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        textAlign: 'center',
        fontFamily: 'yekan',
        fontSize: 18,
        marginBottom: 15,
    },
    icon: {
        marginLeft: 10,
        alignSelf: 'center',
        // alignItems: 'center',
        marginBottom: 15,

    }
});