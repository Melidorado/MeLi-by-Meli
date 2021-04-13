import './Home.css';
import InputSearch from './InputSearch';

const Home = ({handleSearch}) => {

    return (
        <div className="home-container">
            <div className="search-container">
                <h1>Search in <span>MeLi</span></h1>
                <InputSearch 
                handleSearch={handleSearch}
                />
            </div>
        </div>
    )
}

export default Home;