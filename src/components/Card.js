import './Card.css';

const Card = ({image, price, title}) => {
    return(
        <article>
            <div className="image-container">
                <img src={image} alt={title}/>
            </div>
            <div className="info-container">
                <p className="price">${price}</p>
                <p className="title">{title}</p>
            </div>
            <button>Ver más</button>
        </article>
    )
}

export default Card;