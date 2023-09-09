import React , {Fragment} from 'react'
import { View, StyleSheet, Image } from 'react-native'


import * as Yup from 'yup'
import FormfieldComponent from '../components/Forms/FormfieldComponent'
import FormComponent from '../components/Forms/FormComponent'
import SubmitButtonComponent from '../components/Forms/SubmitButtonComponent'
import Screen from '../../Shared/Screen'
// import {FormComponent,FormfieldComponent,SubmitButtonComponent } from '../components/Forms/index'


const validationSchema = Yup.object().shape({
    email: Yup.string().required('این فیلد الزامی می باشد').email('ایمیل معتبر نمی باشد'),
    password: Yup.string().required('این فیلد الزامی می باشد').min(4, 'کلمه ی عبور نباید کمتر از 4 کاراکتر باشد'),
})

const LoginScreen = ({navigation}) => {

    // const [email , setEmail] = useState()
    // const [password , setpassword] = useState()


    return ( 
    <Screen style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <FormComponent
            initialValues={{email: '', password: ''}}
            onSubmit={()=> navigation.navigate('Home')}
            // validationSchema={validationSchema}
        >
           
            <FormfieldComponent
            
                placeholder='ایمیل کاربری'
                autoCompleteType='email'
                autoCorrect={false}
                keyboardType='email-address'
                icon='email'
                name='email'
                placeholderTextColor='royalblue'
                // onChangeText={text => setEmail(text)}

            />

            <FormfieldComponent
            
                placeholder='کلمه عبور'
                autoCompleteType='password'
                autoCorrect={false}
                icon='onepassword'
                placeholderTextColor='royalblue'
                secureTextEntry
                name='password'
               // onChangeText={password => setpassword(password)}

            />

        <View style={{width:'60%'}}>
            <SubmitButtonComponent 
                title='ورود'                            
            />
        </View>

         
        </FormComponent>
       
    </Screen>
     );
}
 
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    logo: {
        width: 270,
        height: 200,
        marginTop: 20,
        marginBottom: 40,
    }
});