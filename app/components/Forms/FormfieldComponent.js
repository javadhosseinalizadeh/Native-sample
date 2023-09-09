import React, { Fragment } from 'react'
import {useFormikContext} from 'formik'
import TextInputComponent from '../../../Shared/TextInput/TextInputComponent';
import ErrorMassage from './ErrorMassage';

const FormfieldComponent = ({name, ...otherProps}) => {
    const{handleChange, setFieldTouched, errors, touched} = useFormikContext();
    return ( 
        <Fragment>
             <TextInputComponent
            {...otherProps}
            onChangeText={handleChange(name)}
            onBlur={()=> setFieldTouched(name)}
        />
             <ErrorMassage  error={errors[name]}
                visible={touched[name]}
               />
        </Fragment>
      
     );
}
 
export default FormfieldComponent;