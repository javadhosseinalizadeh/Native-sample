import React from 'react'
import ButtonComponent from '../../../Shared/ButtonComponent/ButtunComponent';
import {useFormikContext} from 'formik'
const SubmitButtonComponent = ({title}) => {
    const {handleSubmit} = useFormikContext();
    return ( 
        <ButtonComponent title={title} onPress={handleSubmit} />
     );
}
 
export default SubmitButtonComponent;