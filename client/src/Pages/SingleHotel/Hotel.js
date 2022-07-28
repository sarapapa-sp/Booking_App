import "./Hotel.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../Components/MailList/MailList";
import Footer from "../../Components/Footer/Footer";
import {useState} from "react";

function Hotel(props) {
    const [slidenumber , setSlidenumber] = useState(0)
    const [open,setOpen] = useState(false)
    const photos = [
        {
            src:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
        },
        {
            src:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
        },
        {
            src:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
        },
        {
            src:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
        },
        {
            src:"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
        }
    ]

    const handleMove = (move) => {
        let newslidenumber ;
        if(move === "l"){
            newslidenumber = slidenumber === 0 ? 5 : slidenumber-1
        }else{
            newslidenumber = slidenumber===4 ? 0 : slidenumber + 1
        }
        setSlidenumber(newslidenumber)
    }

    const handleOpen = (i) => {
        setOpen(true)

        setSlidenumber(i)
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotel-container">
                {open &&
                    <div className="slider-div">
                        <FontAwesomeIcon

                            icon={faCircleXmark}
                            onClick={()=>setOpen(false)}
                            className="slider-close"
                        />
                        <FontAwesomeIcon
                            className="slider-arrow"
                            icon={faCircleArrowLeft}
                            onClick={()=> handleMove("l")}
                        />
                        <div className="slider-wrapper">
                            <img
                                src={photos[slidenumber].src}
                                alt=""
                                className="slider-img"
                            />
                        </div>
                        <FontAwesomeIcon
                            className="slider-arrow"
                            icon={faCircleArrowRight}
                            onClick={()=> handleMove("r")}
                        />
                    </div>
                }
                <div className="hotel-wrapper">
                    <button>Book Now</button>
                    <h1 className="hotel-title">
                        Grant Hotel
                    </h1>
                    <div className="hotel-address">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className="hotel-distance">
                        Excellent location - 500 m
                    </span>
                    <span className="hotel-price-high">
                        Book a stay over $414 at this property and get a free airport taxi
                    </span>
                    <div className="hotel-imgs">
                        {photos.map(
                            (hotel,i) => <div
                                onClick={()=>handleOpen(i)}
                                className="hotel-img-wrapper"> <img src={hotel.src} alt="hotel" className="hotel-img" /></div>
                        )}

                    </div>
                    <div className="hotel-details">
                        <div className="hotel-detail-text">
                            <h1 className="hotel-detail-title">
                                Stay in the heart of the Krakow
                            </h1>
                            <p className="hotel-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo tenetur vero. Delectus doloremque ducimus eligendi illo porro ut? Error exercitationem impedit labore maxime natus nobis praesentium quod repellat unde!
                            </p>
                        </div>
                        <div className="hotel-detail-price">
                            <h1>
                                Perfect for 9-night stay
                            </h1>
                            <span>
                                Located in the real heart of sergse , this property has an excellent location score of 9.8
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>

        </div>
    );
}

export default Hotel;