import React from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";

function List(props) {
    return (
        <div>
            <Navbar />
            <Header
                type="list"
            />
        </div>
    );
}

export default List;