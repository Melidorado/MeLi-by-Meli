import './InputSearch.css';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';

const InputSearch = ({handleSearch, doNotShowProducts}) => {

    const [ value, setValue ] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        handleSearch(value)
        doNotShowProducts && doNotShowProducts(false)
    }

    console.log(value)

    return(
        <form onSubmit={handleSubmit}>
            <input
            onChange={handleChange}
            value={value} 
            type="text" 
            />
            <input 
            className="search" 
            type="submit" 
            value=""></input>
            <SearchIcon id="search-icon" onClick={handleSubmit}/>
        </form>
    )
}

export default InputSearch;