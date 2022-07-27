import "./featured.css";

function Featured(props) {
    return (
        <div className="featured">
            {/*Item 1*/}
            <div className="featured-item">
                <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                    alt=""
                     className="featured-img"
                />
                <div className="featured-title">
                    <h1>Austin</h1>
                    <h2>523 Properties</h2>
                </div>
            </div>
        {/*    Item 2  */}
            <div className="featured-item">
                <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                     alt=""
                     className="featured-img"
                />
                <div className="featured-title">
                    <h1>Austin</h1>
                    <h2>523 Properties</h2>
                </div>
            </div>
        {/*  Item 3   */}
            <div className="featured-item">
                <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                     alt=""
                     className="featured-img"
                />
                <div className="featured-title">
                    <h1>Beon</h1>
                    <h2>523 Properties</h2>
                </div>
            </div>
        </div>
    );
}

export default Featured;