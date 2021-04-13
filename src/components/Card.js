import './Card.css';

const Card = ({image, price, title}) => {
    return(
        <article>
            <div className="image-container">
                <img src={image}/>
            </div>
            <div className="info-container">
                <p className="price">${price}</p>
                <p className="title">{title}</p>
                <button>Ver más</button>
            </div>
        </article>
    )
}

export default Card;