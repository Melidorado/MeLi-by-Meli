import './CardsContainer.css';
import Card from './Card';

const CardsContainer = ({products}) => {
    return (
        <section>
            {products.map( product => 
                <Card 
                image={product.thumbnail}
                price={product.price}
                title={product.title}
                />)}
        </section>
    )
}

export default CardsContainer;