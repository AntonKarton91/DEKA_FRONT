import React, {useState} from 'react';
import RightMenuButton from '../../UI/right-menu-button/RightMenuButton';
import classes from '../task_popup.module.css';


const PopupRightMenu = ({popupActive}) => {
   
    return (  
        <div className={classes.right_menu}>
            <div className={classes.right_menu__title}>Добавить на карточку</div>
            <RightMenuButton icon={ 'person' } name={ 'Участники' }/>
            <RightMenuButton icon={ 'label' } name={ 'Метки' }/>
            <RightMenuButton icon={ 'select_check_box' } name={ 'Чек-лист' }/>
            <RightMenuButton icon={ 'schedule' } name={ 'Даты' }/>
            <RightMenuButton icon={ 'attach_file' } name={ 'Вложение' }/>
            <RightMenuButton icon={ 'vertical_shades' } name={ 'Обложка' }/>
        </div>                  
    )
    

}
    

export default PopupRightMenu;