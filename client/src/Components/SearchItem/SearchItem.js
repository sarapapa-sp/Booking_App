import "./SearchItem.css";

function SearchItem(props) {
    return (
        <div className="search">
            <img
                src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="

                alt=""
                className="search-img"
            />
            <div className="search-desc">
                <h1 className="search-title">
                    Tower Street Apartments
                </h1>
                <span className="search-distance">
                    500m from the center
                </span>
                <span className="search-taxiop">
                    Free Airport Taxi
                </span>
                <span className="search-subtitle">
                    Stdio Apartment with AIr continining
                </span>
                <span className="search-features">
                    ENtire stio 1 bathroom 21m2 1 full bed
                </span>
                <span className="search-cancel">
                    Free Cancellation
                </span>
                <span className="search--cancel-subtitle">
                    You can cencel later , so lock in this great price today

                </span>
            </div>
            <div className="search-detail">
                <div className="search-rating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>

                <div className="search-details-text">
                    <span className="search-price">
                        $123
                    </span>
                    <span className="search-taxi--op">
                        Includes taxes and fees
                    </span>
                    <button className="search-check-btn">
                        See Availability
                    </button>
                </div>

            </div>
        </div>
    );
}

export default SearchItem;