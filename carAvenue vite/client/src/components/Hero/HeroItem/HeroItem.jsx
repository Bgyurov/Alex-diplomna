import { Link } from "react-router-dom"
export const HeroItem = ({
    imageUrl,
    car,
    model,
    manufacturedate,
    _id,
}) => {
    return (
        <div className="ad">
        <div className="wrapper-img">
            <img src={imageUrl} />
        </div>
        <h3>{car} {model}</h3>
        <h4>{manufacturedate}</h4>

        <div className="data-buttons">
            <Link to={`/catalog/${_id}`} className="btn details-btn">Details</Link>
        </div>
    </div>
    )
}