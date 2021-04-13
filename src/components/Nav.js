import './Nav.css';
import InputSearch from './InputSearch';

const Nav = ({handleSearch}) => {
    return(
        <nav>
            <h2>Search in <span>MeLi</span></h2>
            <div className="input-container">
            <InputSearch 
            handleSearch={handleSearch}/>
            </div>
        </nav>
    )
}

export default Nav;