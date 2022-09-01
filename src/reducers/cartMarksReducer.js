const initialState = [
    {id:1, title: 'ВАЖНО!', color: 'purple'},
    {id:2, title: 'Выдано в работу', color: 'blue'},
    {id:3, title: 'Дизайн', color: 'darkblue'},
    {id:4, title: 'Недооформленная задача', color: 'red'},
]

export const cartMarksReducer = (state=initialState, action) => {
    switch (action.type){
        default:
            return state
    }
}