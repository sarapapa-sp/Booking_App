import "./header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"
import {useContext, useState} from "react";
import DateRange from "react-date-range/dist/components/DateRange"; // theme css file
import {useNavigate} from "react-router-dom"
import {SearchContext} from "../../Context/SearchContext";
import {AuthContext} from "../../Context/AuthContext";

function Header({type}) {
    const [destination,setDestination] = useState("")
    const [openDate,setOpenDate] = useState(false)
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const navigate = useNavigate()
    const [openOptions,setOpenOptions] = useState(false)
    const [options,setOptions] = useState({
        adult:1,
        children:0,
        room:1
    })



    const handleClick = (name,operation) =>{
        setOptions(prev => {
            return {
                ...prev,
                [name]:operation === "i" ? options[name] +1 : options[name] - 1
            }
        })
    }

    const {dispatch} = useContext(SearchContext)
    const {user} = useContext(AuthContext)

    const handleChange = () => {
        dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
        navigate("/hotel",{
            state:{
                destination,dates,options
            }
        })
    }
    return (
        <div className="header">
            <div className={type === "list" ? "header-container listmode" : "header-container"}>
            <div className="header-list">
                <div className="header-list-item active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stay</span>
                </div>
                <div className="header-list-item">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flight</span>
                </div>
                <div className="header-list-item">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="header-list-item">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="header-list-item">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </div>
            </div>
                {
                    type !=="list" &&
                    <>
                    <h1 className="header-title">A lifetime of discounts ? It's Genius</h1>
                    <p className="header-desc">Get rewarded for our travels - unlock instant savings of 10% or win a
                        free flight with a afree lamabooking account</p>
                        { !user &&
                    <button className="header-btn">Sign In / Register</button>
                        }
                    <div className="header-search">
                        {/*Input for place*/}
                        <div className="header-search-item">
                            <FontAwesomeIcon icon={faBed} className="header-icon"/>
                            <input
                                type="text"
                                placeholder="Where are you going"
                                className="header-search-input"
                                onChange={e=>setDestination(e.target.value)}
                                value={destination}
                            />

                        </div>
                        {/*    input for calender*/}
                        <div className="header-search-item">
                            <FontAwesomeIcon icon={faCalendarDays} className="header-icon"></FontAwesomeIcon>
                            <span
                                onClick={() => setOpenDate(!openDate)}
                                className="header-search-text">
                            {`${format(dates[0].startDate, "MM/dd/yyyy")}
                             to 
                             ${format(dates[0].endDate, "MM/dd/yyyy")}
                             `}
                        </span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDates([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dates}
                                className="date"
                                minDate={new Date()}
                            />}

                        </div>
                        {/*    */}
                        <div className="header-search-item">
                            <FontAwesomeIcon icon={faPerson} className="header-icon"></FontAwesomeIcon>
                            <span
                                onClick={() => setOpenOptions(!openOptions)}
                                className="header-search-text">
                            {`${options.adult} adult ${options.children} children ${options.room} room`}
                        </span>
                            {
                                openOptions &&
                                <div className="option">
                                    {/*Adult*/}
                                    <div className="option-item">
                                        <span className="option-text">Adult</span>
                                        <div className="option-counter">

                                            <button
                                                disabled={options.adult <= 1}
                                                className="option-counter-button"
                                                onClick={() => handleClick("adult", "d")}
                                            >-
                                            </button>
                                            <span className="option-counter-number"> {options.adult}</span>
                                            <button
                                                onClick={() => handleClick("adult", "i")}
                                                className="option-counter-button">+
                                            </button>
                                        </div>
                                    </div>
                                    {/*    Childre*/}
                                    <div className="option-item">
                                        <span className="option-text">Children</span>
                                        <div className="option-counter">

                                            <button
                                                disabled={options.children <= 1}
                                                onClick={() => handleClick("children", "d")}
                                                className="option-counter-button">-
                                            </button>
                                            <span className="option-counter-number"> {options.children}</span>
                                            <button
                                                onClick={() => handleClick("children", "i")}
                                                className="option-counter-button">+
                                            </button>
                                        </div>
                                    </div>
                                    {/*    Room */}
                                    <div className="option-item">
                                        <span className="option-text">Room</span>
                                        <div className="option-counter">

                                            <button
                                                disabled={options.room <= 1}
                                                onClick={() => handleClick("room", "d")}
                                                className="option-counter-button">-
                                            </button>
                                            <span className="option-counter-number">{options.room}</span>
                                            <button
                                                onClick={() => handleClick("room", "i")}
                                                className="option-counter-button">+
                                            </button>
                                        </div>
                                    </div>
                                </div>}
                        </div>
                        {/*    */}
                        <div className="header-search-item">
                            <button
                                onClick={handleChange}
                                className="header-btn">Search</button>

                        </div>
                    </div>
                </>}

            </div>
        </div>
    );
}

export default Header;