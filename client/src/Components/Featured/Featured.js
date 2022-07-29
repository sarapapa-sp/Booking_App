import "./featured.css";
import useFetch from "../../Hooks/useFetch"
function Featured(props) {

    const {data,loading,error} = useFetch("http://localhost:8080/api/hotels/countByCity?city=mumbai,delhi,pune")

    // console.log(data)
    return (
        <div className="featured">
            {
                loading ? "loading please wait" :
                <>
                {/*Item 1*/}
                <div className="featured-item">
                <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                alt=""
                className="featured-img"
                />
                <div className="featured-title">
                <h1>Mumbai</h1>
                <h2>{data[0]} Properties</h2>
                </div>
                </div>
            {/*    Item 2  */}
                <div className="featured-item">
                <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                alt=""
                className="featured-img"
                />
                <div className="featured-title">
                <h1>Delhi</h1>
                <h2>{data[1]} Properties</h2>
                </div>
                </div>
            {/*  Item 3   */}
                <div className="featured-item">
                <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                alt=""
                className="featured-img"
                />
                <div className="featured-title">
                <h1>Pune</h1>
                <h2>{data[2]} Properties</h2>
                </div>
                </div>
                </>
            }
        </div>
    );
}

export default Featured;