import "./FeaturedProperty.css";
import useFetch from "../../Hooks/useFetch";

function FeaturedProperty(props) {
    const {data,loading,error} = useFetch("http://localhost:8080/api/hotels?featured=true&limit=4")


    return (
        <div className="f-pro">

            {
                loading ? "please wait loading" :

                <>
                    {
                        data.map(item => (
                            <div className="fp-item" key={item._id}>
                                <img
                                    src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                                     alt=""
                                     className="fp-img"
                                />
                                <span className="fp-name">{item.name}</span>
                                <span className="fp-city">{item.city}</span>
                                <span className="fp-price">Starting from ${item.cheapestPrice}</span>
                                {
                                    item.rating &&
                                    <div className="fp-rating">
                                    <button className="rating-button">{item.rating}</button>
                                    <span className="rating-text">Excellent</span>
                                </div>}
                            </div>
                        ))
                    }

                </>
            }

        </div>
    );
}

export default FeaturedProperty;