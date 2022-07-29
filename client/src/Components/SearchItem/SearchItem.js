import "./SearchItem.css";
import {Link} from "react-router-dom";

function SearchItem({hotel}) {
    console.log(hotel)
    return (
        <div className="search">
            <img
                src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="

                alt=""
                className="search-img"
            />
            <div className="search-desc">
                <h1 className="search-title">
                    {hotel.name}
                </h1>
                <span className="search-distance">
                    {hotel.distance}
                </span>
                <span className="search-taxiop">
                    Free Airport Taxi
                </span>
                <span className="search-subtitle">
                    Stdio Apartment with AIr continining
                </span>
                <span className="search-features">
                    {hotel.desc}
                </span>
                <span className="search-cancel">
                    Free Cancellation
                </span>
                <span className="search--cancel-subtitle">
                    You can cencel later , so lock in this great price today

                </span>
            </div>
            <div className="search-detail">
                {
                    hotel.rating &&
                    <div className="search-rating">
                        <span>Excellent</span>
                        <button>{hotel.rating}</button>
                    </div>
                }

                <div className="search-details-text">
                    <span className="search-price">
                        ${hotel.cheapestPrice}
                    </span>
                    <span className="search-taxi--op">
                        Includes taxes and fees
                    </span>
                    <Link to={`/hotel/${hotel._id}`}>
                        <button className="search-check-btn">
                            See Availability
                        </button>

                    </Link>
                </div>

            </div>
        </div>
    );
}

export default SearchItem;