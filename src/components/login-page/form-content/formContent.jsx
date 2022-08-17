import React, {useState} from 'react';
import './form-content.css'
import Button from "../login-form-container/buttons/button";

const FormContent = ({data}) => {

    const [formData, setData] = useState(data)
    // console.log(formData)

    return (
        <form className='form-content'>
            {formData.items.map(data => {
                return (
                    <input className='form-input'
                        type="text"
                        placeholder={data.placeholder}
                        key={data.id}
                    />
                )
            })}

            <Button >{formData.submit}</Button>
        </form>
    );
};

export default FormContent;