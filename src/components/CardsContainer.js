import './CardsContainer.css';
import Card from './Card';
import { useEffect, useState } from 'react';
import Detail from './Detail';

const CardsContainer = ({products, doNotShowProducts, cardDetail}) => {


    const [ productDetail, setProductDetail ] = useState({})
    const [ productDescription, setProductDescription ] = useState("")
    const [ productId, setProductId ] = useState("")

    const handleDetail = (productDetail) => {
        doNotShowProducts(true)
        setProductDetail(productDetail)
        setProductId(productDetail.id)
    }


    useEffect(() => {
        productId &&
        fetch(`https://api.mercadolibre.com/items/${productId}/descriptions`)
        .then (res => res.json())
        .then (data => setProductDescription(data.map(data => data.plain_text)))
    }, [productId])

    return (
        <section className="cards-details_container">

            {!cardDetail 
            ?products.map( product => 
                <Card 
                image={product.thumbnail}
                price={product.price}
                title={product.title}
                key={product.id}
                shipping={product.shipping.free_shipping}
                handleDetail={handleDetail}
                product={product}
                />)
            : <Detail 
            image={productDetail.thumbnail}
            title={productDetail.title}
            price={productDetail.price}
            description={productDescription}
            condition={productDetail.condition}
            sold_quantity={productDetail.sold_quantity}
            />}
        </section>
    )
}

export default CardsContainer;