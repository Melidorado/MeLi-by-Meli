import CardsContainer from './CardsContainer';
import Nav from './Nav';

const Search = ({handleSearch, products}) => {
    return (
        <>
            <Nav
            handleSearch={handleSearch} />
            <CardsContainer 
            products={products}/>
        </>
    )
}

export default Search;