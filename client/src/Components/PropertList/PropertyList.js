import "./PropertyList.css";
import useFetch from "../../Hooks/useFetch";

function PropertyList(props) {
    const {data,loading,error} = useFetch("http://localhost:8080/api/hotels/countByType")
    const images = [
        "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
        "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
        "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
        "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
        "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="

    ]
    // console.log(data)
    return (
        <div className="p-list">
            {   loading ? "loading please wait" :
                <>
                    {data && images.map((img,i) => (
                        <div className="p-list-item" key={i}>
                            <img src={img}
                                 alt=""
                                 className="p-img"
                            />
                            <div className="p-titles">
                                <h1>{data[i]?.type[0].toUpperCase() +data[i]?.type.substring(1) }</h1>
                                <h2>{data[i]?.count} {data[i]?.type}</h2>
                            </div>
                        </div>
                    ))}
                </>
            }
        </div>
    );
}

export default PropertyList;