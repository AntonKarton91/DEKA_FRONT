const initialState = [
        {name: 'Антон', id: 1, url: "images/avatars/a1.png"},
        {name: 'Михаил', id: 2, url: "images/avatars/a2.png"},
    ]

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}