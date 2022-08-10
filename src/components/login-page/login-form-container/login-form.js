import React, {useState} from 'react';




function RegLogForm(){
    let [formType, setForm] = useState('reg')

    function showRegForm (event){
        setForm(formType = 'reg')
    }

    function showLogForm (event){
        setForm(formType = 'log')
    }

    function showForm(){
        if (formType === 'reg'){
            return (
                <>regForm</>
            )
        } else {
            return (
                <>logForm</>
            )
        }
    }


    return(
        <>
            <button onClick={showRegForm}>Регистрация</button>
            <button onClick={showLogForm}>Авторизация</button>
            {showForm()}
        </>
    )

}
export default RegLogForm