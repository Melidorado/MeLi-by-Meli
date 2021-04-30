import './Nav.css';
import InputSearch from './InputSearch';

const Nav = ({handleSearch, doNotShowProducts}) => {
    return(
        <nav>
            <h2 className="nav-title">Search in <span>MeLi</span></h2>
            <div className="input-container">
            <InputSearch 
            handleSearch={handleSearch}
            doNotShowProducts={doNotShowProducts}
            />
            </div>
        </nav>
    )
}

export default Nav;