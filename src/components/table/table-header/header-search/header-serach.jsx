import React, {useState} from 'react';
import './header-search.css'
const HeaderSearch = () => {
    const [searchPlaceholder, setSearchPlaceholder] = useState('Поиск')

    console.log(searchPlaceholder)

    return (
    <div className='header_search-field'>
        <span className="material-symbols-outlined white">
            search
        </span>
        <input type='text' placeholder={searchPlaceholder} />
    </div>
    );
};

export default HeaderSearch;