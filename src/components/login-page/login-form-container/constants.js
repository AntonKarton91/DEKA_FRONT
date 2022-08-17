export const registerFormItems = {
    items: [{placeholder:'Имя', id:'name', name:'name'},
            {placeholder:'Фамилия', id:'surname', name:'surname'},
            {placeholder:'Email', id:'email', name:'email'},
            {placeholder:'Пароль', id:'password', name:'password'},
            {placeholder:'Повторите пароль', id:'password1', name:'password1'}
            ],
    submit: 'ЗАРЕГИСТРИРОВАТЬСЯ'

}

export const loginFormItems = {
    items: [{placeholder:'Email', id:'email', name:'email'},
            {placeholder:'Пароль', id:'password', name:'password'}
            ],
    submit: 'АВТОРИЗОВАТЬСЯ'
}