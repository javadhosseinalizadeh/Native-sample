import React , {Fragment} from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Constants from 'expo-constants'
import ButtonComponent from '../../Shared/ButtonComponent/ButtunComponent'
import {Formik} from 'formik'
import * as Yup from 'yup'
import ErrorMassage from '../components/Forms/ErrorMassage'
import TextInputComponent from '../../Shared/TextInput/TextInputComponent'
import FormfieldComponent from '../components/Forms/FormfieldComponent'
import FormComponent from '../components/Forms/FormComponent'
import SubmitButtonComponent from '../components/Forms/SubmitButtonComponent'
import Screen from '../../Shared/Screen'
// import {FormComponent,FormfieldComponent, } from '../components/Forms/index'

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('نام و نام خانوادگی الزامی می باشد'),
    email: Yup.string().required('این فیلد الزامی می باشد').email('ایمیل معتبر نمی باشد'),
    password: Yup.string().required('این فیلد الزامی می باشد').min(4, 'کلمه ی عبور نباید کمتر از 4 کاراکتر باشد'),
    passwordConfirmation: Yup.string().required('تکرار کلمه عبور الزامی می باشد')
    .oneOf([Yup.ref('psddword'), null], 'کلمه های عبور باید یکسان باشند')
})

const RegisterScreen = () => {

    // const [email , setEmail] = useState()
    // const [password , setpassword] = useState()


    return ( 
    <Screen style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <FormComponent
            initialValues={{email: '', password: '', fullname: '', passwordConfirmation: ''}}
            onSubmit={val => console.log(val)}
            validationSchema={validationSchema}
        >

            
            <FormfieldComponent
            
                placeholder='نام و نام خانوادگی'
                autoCorrect={false}
                icon='account-circle'
                name='fullname'
                placeholderTextColor='royalblue'
                // onChangeText={text => setEmail(text)}
            />
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
                autoCorrect={false}
                icon='onepassword'
                name='password'
                placeholderTextColor='royalblue'
                secureTextEntry
               // onChangeText={password => setpassword(password)}

            />
            <FormfieldComponent
            
                placeholder='تکرار کلمه عبور'
                autoCorrect={false}
                icon='onepassword'
                placeholderTextColor='royalblue'
                secureTextEntry
                name='passwordConfirmation'
               // onChangeText={password => setpassword(password)}
            />
        <View style={{width:'60%'}}>
            <SubmitButtonComponent 
                title='ثبت نام'
            />
        </View>

         
        </FormComponent>
       
    </Screen>
     );
}
 
export default RegisterScreen;

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