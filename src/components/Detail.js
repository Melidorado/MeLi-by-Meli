import './Detail.css';

const Detail = ({image, title, price, description, condition, sold_quantity}) => {

    const toUpperCaseFirstLetter = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return(
        <article className="details-container">
            <section className="image-description_container">
                <div className="image-detail_container">
                    <img src={image} className="detail-image" alt={title}/>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </section>
            <aside>
            <span className="condition-sold">{`${toUpperCaseFirstLetter(condition)}   |   ${sold_quantity} vendidos`}</span>
            <h1 className="detail-title">{title}</h1>
            <p className="detail-price">{`$${price}`}</p>
            <button className="buy-button">Comprar Ahora</button>

            </aside>
        </article>
    )
}

export default Detail;