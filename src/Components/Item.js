// import image from '../images/item-1.jpeg';

const Item = ({title, price, img, desc}) => {
    return (
        <div className="item">
            <img src={img} alt="whoops" />
            <div className="header">
                <p>${price}</p>
                <h3>{title}</h3>
            </div>
            <p>{desc}</p>
        </div>
    )
}

export default Item
