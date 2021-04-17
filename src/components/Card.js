import './Card.css';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const Card = ({image, price, title, shipping, handleDetail, product}) => {

    const handleClickDetail = () => {
        handleDetail(product)
    }

    return(
        <article>
            <div className="image-container">
                <img src={image} alt={title}/>
            </div>
            <div className="info-container">
                <p className="price">${price}</p>
                { shipping && < LocalShippingIcon className="free-shipping"/>}
               
            </div>
            <p className="title">{title}</p>
            <button onClick={handleClickDetail}>Ver más</button>
        </article>
    )
}

export default Card;