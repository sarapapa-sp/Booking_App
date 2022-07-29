import "./List.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import {useLocation} from "react-router-dom";
import {useState} from "react";
import {format} from "date-fns";
import DateRange from "react-date-range/dist/components/DateRange";
import SearchItem from "../../Components/SearchItem/SearchItem";
import useFetch from "../../Hooks/useFetch";

function List(props) {

    const location = useLocation()
    const [destination,setDestination] = useState(location.state.destination)
    const [date,setDate] = useState(location.state.date)
    const [opendate,setOpenDate] = useState(false)

    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const [options, setOptions] = useState(location.state.options)


    const {data,loading,error,reFetch} = useFetch(`http://localhost:8080/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`)
    const handleClick = ()=>{
        reFetch()
    }

    console.log(data)
    return (
        <div>
            <Navbar />
            <Header
                type="list"
            />

            <div className="list-container">
                <div className="list-wrapper">
                    <div className="list-search">
                        <h1 className="search-title">Search</h1>
                        <div className="list-search-item">
                            <label>Destination</label>
                            <input
                                type="text"
                                placeholder={destination}
                                disabled
                            />
                        </div>
                        <div className="list-search-item">
                            <label>Check in date</label>
                            <span
                                onClick={() => setOpenDate(!opendate)}
                            >{
                                `${format(date[0].startDate,"MM/dd/yyyy")}
                                 to
                                 ${format(date[0].endDate,"MM/dd/yyyy")}`
                            }</span>
                            { opendate &&   <DateRange
                                // editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                // moveRangeOnFirstSelection={false}
                                ranges={date}
                                minDate={new Date()}
                                className="listdate date"
                            />}
                        </div>
                        {/*Item 3*/}
                        <div className="list-search-item">
                            <label>Options</label>
                            <div className="list-options">

                            {/*Option 1*/}
                            <div className="list-option-item">
                                <span className="list-option-text">
                                    Minimum Price<small>per night</small>
                                </span>
                                <input
                                    onChange={(e) => setMin(e.target.value)}
                                    type="number"
                                    className="list-option-input"
                                    />
                            </div>
                        {/*    Option 2*/}
                            <div className="list-option-item">
                                <span className="list-option-text">
                                    Max price <small>per night</small>
                                </span>
                                <input
                                    onChange={(e) => setMax(e.target.value)}
                                    type="number"
                                    className="list-option-input"
                                />
                            </div>
                        {/*    Option 3*/}
                            <div className="list-option-item">
                                <span className="list-option-text">
                                    Adult
                                </span>
                                <input
                                    min={1}
                                    type="number"
                                    className="list-option-input"
                                    placeholder={options.adult}
                                />
                            </div>
                        {/*    4*/}
                            <div className="list-option-item">
                                <span className="list-option-text">
                                    Children
                                </span>
                                <input
                                    min={0}
                                    type="number"
                                    className="list-option-input"
                                    placeholder={options.children}
                                />
                            </div>
                        {/*    5*/}
                            <div className="list-option-item">
                                <span className="list-option-text">
                                    Room
                                </span>
                                <input
                                    min={1}
                                    type="number"
                                    className="list-option-input"
                                    placeholder={options.room}
                                />
                            </div>
                            </div>
                        </div>
                        <button
                            onClick={handleClick}
                            className="list-search-button">Search</button>
                    </div>
                    <div className="list-result">
                        {
                            loading ? "loading please wait" :
                                <>
                                    {data.map(item => (
                                        <SearchItem
                                            key={item._id}
                                            hotel={item} />
                                    ))}

                                </>
                        }




                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;