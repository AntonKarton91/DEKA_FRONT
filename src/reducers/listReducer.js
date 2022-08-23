const initialState = [
    {columnName: 'Задачи в очереди',
        id: 0,
        taskList: [
            {id: 1, name: 'Лореаль, образец, маск Бар на полку, 119МК-7 (СФ)', participants: [{id: 1}]},
            {id: 2, name: 'L\'Oreal, ВИЗИ ПЭКи, образцы, №35 ЮЛ', participants: [{id: 1}]},
            {id: 3, name: 'Инситех, 78 подложек, №34 ЮЛ', participants: [{id: 2}]}
        ]
    },
    {columnName: 'Задачи в Антона',
        id: 1,
        taskList: [
            {id: 1, name: 'Лореаль, образец, маск Бар на полку, 119МК-7 (СФ)', participants: [{id: 1}]},
        ]
    },
]

export const listReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state
    }
}