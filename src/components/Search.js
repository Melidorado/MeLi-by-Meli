import { useState } from 'react';
import CardsContainer from './CardsContainer';
import Nav from './Nav';

const Search = ({handleSearch, products}) => {

    const [ cardDetail, setCardDetail ] = useState(false)

    const doNotShowProducts = (value) => {
        setCardDetail(value)
    }

    console.log(cardDetail)

    return (
        <>
            <Nav
            handleSearch={handleSearch} 
            doNotShowProducts={doNotShowProducts}/>
            <CardsContainer 
            products={products}
            doNotShowProducts={doNotShowProducts}
            cardDetail={cardDetail}
            />
        </>
    )
}

export default Search;