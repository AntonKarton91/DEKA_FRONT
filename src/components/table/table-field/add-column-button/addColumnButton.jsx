import React from 'react';
import '../table-column/table-column.css'



const AddColumnButton = ({addCol}) => {
    return (
        <div className='add-column-btn' onClick={addCol}>
            Добавить еще одну колонку
        </div>
    )
}
export default AddColumnButton;