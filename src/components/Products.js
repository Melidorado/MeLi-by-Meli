import './Products.css';
import Card from './Card';

const Products = ({products, handleDetail}) => {
    return (
        <section className="products-container">
            {products.map( product => 
                <Card 
                image={product.thumbnail}
                price={product.price}
                title={product.title}
                key={product.id}
                shipping={product.shipping.free_shipping}
                handleDetail={handleDetail}
                product={product}
                />)}
        </section>
    )
}

export default Products;