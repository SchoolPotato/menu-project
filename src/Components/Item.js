import image from '../images/item-1.jpeg';

const Item = () => {
    return (
        <div className="item">
            <img src={image} alt="whoops" />
            <div className="header">
                <p>$15</p>
                <h4>Hello There</h4>
            </div>
            <p>hello there</p>
        </div>
    )
}

export default Item
