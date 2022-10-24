import { useState } from 'react';
import Loop from '../Common/SVG/Loop';
import style from './SearchInput.module.scss'

function SearchInput() {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (e) => {
        let value = e.currentTarget.value;
        setInputValue(value);
    }


    return ( 
        <div className={style.inputWrapp}
        onClick={(e) => e.target.focus()}>
            <Loop />
            <input 
            value={inputValue} 
            className={style.searchInput} 
            placeholder='Поиск'
            onChange={onInputChange}
            />

        </div>
     );
}

export default SearchInput;